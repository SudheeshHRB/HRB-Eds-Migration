import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Returns true when a row is a social-link item (image and/or link), not legal copy.
 * @param {Element} row
 */
function isSocialRow(row) {
  const link = row.querySelector('a');
  const img = row.querySelector('img');
  if (!link && !img) return false;
  const paragraphs = [...row.querySelectorAll('p')];
  if (paragraphs.length > 1 && !img) return false;
  if (img) return true;
  if (!link) return false;
  if (paragraphs.length === 1) {
    const p = paragraphs[0];
    return p.querySelector('a') && p.textContent.trim() === link.textContent.trim();
  }
  return [...row.children].length <= 2;
}

/**
 * Build picture from authored DAM image.
 * @param {HTMLImageElement} img
 * @param {string} alt
 * @returns {Element}
 */
function buildIconPicture(img, alt) {
  const optimized = createOptimizedPicture(img.src, alt || img.alt || '', false, [{ width: '96' }]);
  moveInstrumentation(img, optimized.querySelector('img'));
  return optimized;
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
      if (!link?.href) return;

      const label = (
        link.getAttribute('title')
        || link.textContent
        || img?.alt
        || 'Social link'
      ).trim();

      const li = document.createElement('li');
      moveInstrumentation(row, li);

      link.classList.add('social-link');
      link.setAttribute('aria-label', label);
      link.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: label.toLowerCase() }));
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = '';

      if (img) {
        link.append(buildIconPicture(img, label));
      }

      const sr = document.createElement('span');
      sr.className = 'sr-only';
      sr.textContent = label;
      link.append(sr);

      li.append(link);
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
