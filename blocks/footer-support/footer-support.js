import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Optimize same-origin raster images; keep SVG / external assets as authored.
 * @param {HTMLImageElement} img
 * @param {string} alt
 * @param {string} width
 * @returns {Element}
 */
function wrapIconImage(img, alt, width = '48') {
  const label = alt || img.alt || '';
  try {
    const url = new URL(img.src, window.location.href);
    const isSvg = url.pathname.toLowerCase().endsWith('.svg');
    if (url.origin === window.location.origin && !isSvg) {
      const optimized = createOptimizedPicture(img.src, label, false, [{ width }]);
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
 * Footer Support — heading + authorable support actions with DAM icons.
 * Model fields: title + titleType (EDS collapses into h2/h3/h4).
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const headingRow = rows.find((row) => row.querySelector('h1, h2, h3, h4, h5, h6'))
    || rows.find((row) => !row.querySelector('a, picture, img'));
  const actionRows = rows.filter((row) => row !== headingRow);

  const container = document.createElement('div');
  container.className = 'footer-support-inner';

  if (headingRow) {
    let heading = headingRow.querySelector('h1, h2, h3, h4, h5, h6');
    if (!heading) {
      const text = headingRow.textContent.trim();
      if (text) {
        heading = document.createElement('h2');
        heading.textContent = text;
      }
    }
    if (heading) {
      moveInstrumentation(headingRow, heading);
      container.append(heading);
    }
  }

  const list = document.createElement('ul');
  list.className = 'support-actions';

  actionRows.forEach((row) => {
    const link = row.querySelector('a');
    const img = row.querySelector('img');
    if (!link) return;

    const li = document.createElement('li');
    moveInstrumentation(row, li);

    const label = (
      link.getAttribute('title')
      || link.textContent
      || img?.alt
      || 'Support link'
    ).trim();

    link.classList.add('icon-btn');
    if (label) {
      link.setAttribute('aria-label', label);
      link.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: label.toLowerCase() }));
    }

    if (img) {
      link.prepend(wrapIconImage(img, label));
    }

    li.append(link);
    list.append(li);
  });

  if (list.children.length) container.append(list);
  block.replaceChildren(container);
  block.classList.add('need-help-footer');
}
