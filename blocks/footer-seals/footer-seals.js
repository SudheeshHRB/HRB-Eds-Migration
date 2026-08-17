import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Use EDS image optimization for same-origin/DAM assets; keep external seals as-is.
 * @param {HTMLImageElement} img
 * @param {string} alt
 * @returns {Element}
 */
function wrapSealImage(img, alt) {
  try {
    const url = new URL(img.src, window.location.href);
    if (url.origin === window.location.origin && !url.pathname.toLowerCase().endsWith('.svg')) {
      const optimized = createOptimizedPicture(img.src, alt, false, [{ width: '126' }]);
      moveInstrumentation(img, optimized.querySelector('img'));
      return optimized;
    }
  } catch {
    // fall through
  }
  const picture = img.closest('picture');
  if (picture) {
    img.alt = alt || img.alt;
    img.loading = 'lazy';
    return picture;
  }
  img.alt = alt || img.alt;
  img.loading = 'lazy';
  return img;
}

/**
 * Footer Seals — authorable certification seals and privacy links.
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'seals-inner';

  rows.forEach((row) => {
    const link = row.querySelector('a');
    const img = row.querySelector('img');
    if (!link && !img) return;

    const item = document.createElement('div');
    item.className = 'seal-item';
    moveInstrumentation(row, item);

    if (link) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const trackName = (link.textContent || img?.alt || 'seal').trim().toLowerCase();
      link.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: trackName }));

      if (img) {
        link.classList.add('seal-link');
        const alt = link.getAttribute('title') || img.alt || link.textContent.trim();
        link.textContent = '';
        link.append(wrapSealImage(img, alt));
        if (alt) link.setAttribute('aria-label', alt);
      } else {
        link.classList.add('privacy-choices');
        const label = link.getAttribute('title') || link.textContent.trim();
        if (label) link.setAttribute('aria-label', label);
      }

      item.append(link);
    } else if (img) {
      item.append(wrapSealImage(img, img.alt));
    }

    container.append(item);
  });

  block.replaceChildren(container);
  block.classList.add('seals-footer');
}
