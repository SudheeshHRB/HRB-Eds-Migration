import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Footer Links — authorable link columns (menus + links).
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'footer-links-inner';

  const columnContainer = document.createElement('div');
  columnContainer.className = 'column-container';

  rows.forEach((row) => {
    const columnEl = document.createElement('div');
    columnEl.className = 'column';
    moveInstrumentation(row, columnEl);

    const contentCell = row.querySelector(':scope > div') || row;
    while (contentCell.firstChild) {
      columnEl.append(contentCell.firstChild);
    }

    columnEl.querySelectorAll('a').forEach((link) => {
      const name = link.textContent.trim().toLowerCase();
      if (name) {
        link.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: name }));
      }
    });

    columnContainer.append(columnEl);
  });

  container.append(columnContainer);
  block.replaceChildren(container);
  block.classList.add('links-footer');
}
