import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Footer Support — heading + authorable support actions with DAM icons.
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const headingRow = rows.find((row) => row.querySelector('h1, h2, h3, h4, h5, h6'));
  const actionRows = rows.filter((row) => row !== headingRow);

  const container = document.createElement('div');
  container.className = 'footer-support-inner';

  if (headingRow) {
    const heading = headingRow.querySelector('h1, h2, h3, h4, h5, h6');
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

    link.classList.add('icon-btn');
    const trackName = (link.textContent || img?.alt || '').trim().toLowerCase();
    if (trackName) {
      link.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: trackName }));
    }

    if (img) {
      const optimized = createOptimizedPicture(img.src, img.alt || '', false, [{ width: '48' }]);
      moveInstrumentation(img, optimized.querySelector('img'));
      link.prepend(optimized);
    }

    li.append(link);
    list.append(li);
  });

  if (list.children.length) container.append(list);
  block.replaceChildren(container);
  block.classList.add('need-help-footer');
}
