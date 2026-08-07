import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Social items are icon/link rows (usually with an image). Legal copy stays as richtext.
 * @param {Element} row
 */
function isSocialRow(row) {
  const img = row.querySelector('img');
  const link = row.querySelector('a');
  if (img) return true;
  if (!link) return false;
  // Plain single-link row (no multi-paragraph legal copy)
  const paragraphs = [...row.querySelectorAll('p')];
  if (paragraphs.length > 1) return false;
  if (paragraphs.length === 1) {
    const p = paragraphs[0];
    return p.querySelector('a') && p.textContent.trim() === link.textContent.trim();
  }
  // Single cell with only a link (no other text nodes of substance)
  const text = row.textContent.replace(link.textContent, '').trim();
  return !text;
}

/**
 * Optimize same-origin raster icons; keep SVG / external assets as authored.
 * @param {HTMLImageElement} img
 * @param {string} alt
 * @returns {Element}
 */
function buildIconPicture(img, alt) {
  const label = alt || img.alt || '';
  try {
    const url = new URL(img.src, window.location.href);
    const isSvg = url.pathname.toLowerCase().endsWith('.svg');
    if (url.origin === window.location.origin && !isSvg) {
      const optimized = createOptimizedPicture(img.src, label, false, [{ width: '96' }]);
      moveInstrumentation(img, optimized.querySelector('img'));
      return optimized;
    }
  } catch {
    // fall through
  }
  const picture = img.closest('picture');
  if (picture) {
    img.alt = label || img.alt;
    img.loading = 'lazy';
    return picture;
  }
  img.alt = label || img.alt;
  img.loading = 'lazy';
  return img;
}

/**
 * Footer Legal — copyright/legal copy + DAM icon social links.
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'copyright-inner';

  const legal = document.createElement('div');
  legal.className = 'legal-copy';

  const socialNav = document.createElement('ul');
  socialNav.className = 'social-media';
  socialNav.setAttribute('aria-label', 'Social media');

  rows.forEach((row) => {
    if (isSocialRow(row)) {
      const link = row.querySelector('a');
      const img = row.querySelector('img');
      if (!link?.href && !img) return;

      const label = (
        link?.getAttribute('title')
        || link?.textContent
        || img?.alt
        || 'Social link'
      ).trim();

      const li = document.createElement('li');
      moveInstrumentation(row, li);

      if (link?.href) {
        link.classList.add('social-link');
        link.setAttribute('aria-label', label);
        link.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: label.toLowerCase() }));
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = '';

        if (img) {
          link.append(buildIconPicture(img, label));
        } else {
          const sr = document.createElement('span');
          sr.className = 'sr-only';
          sr.textContent = label;
          link.append(sr);
        }

        li.append(link);
      } else if (img) {
        li.append(buildIconPicture(img, label));
      }

      socialNav.append(li);
      return;
    }

    const cell = row.querySelector(':scope > div') || row;
    moveInstrumentation(row, legal);
    while (cell.firstChild) legal.append(cell.firstChild);
  });

  if (legal.childNodes.length) container.append(legal);
  if (socialNav.children.length) container.append(socialNav);

  block.replaceChildren(container);
  block.classList.add('copyright-footer');
}
