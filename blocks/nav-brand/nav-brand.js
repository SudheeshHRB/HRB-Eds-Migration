import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Nav Brand — DAM logo + home link.
 * @param {Element} block
 */
export default function decorate(block) {
  const link = block.querySelector('a');
  const img = block.querySelector('img');
  if (!link && !img) return;

  const brand = document.createElement('div');
  brand.className = 'nav-brand-inner';

  const anchor = link || document.createElement('a');
  if (!link) {
    anchor.href = '/';
  }
  anchor.className = 'nav-brand-link';
  const label = (anchor.getAttribute('title') || anchor.textContent || img?.alt || 'Home').trim();
  anchor.setAttribute('aria-label', label);
  anchor.textContent = '';

  if (img) {
    const src = img.getAttribute('src') || '';
    if (src.toLowerCase().includes('.svg')) {
      img.alt = img.alt || label;
      img.loading = 'eager';
      anchor.append(img.closest('picture') || img);
    } else {
      const picture = createOptimizedPicture(img.src, img.alt || label, true, [{ width: '256' }]);
      moveInstrumentation(img, picture.querySelector('img'));
      anchor.append(picture);
    }
  } else {
    anchor.textContent = label;
  }

  moveInstrumentation(block.firstElementChild || block, brand);
  brand.append(anchor);
  block.replaceChildren(brand);
}
