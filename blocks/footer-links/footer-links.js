import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Footer Links — authorable columns (doc §3.3)
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const inner = document.createElement('div');
  inner.className = 'footer-links-inner';

  const columns = document.createElement('div');
  columns.className = 'footer-links-columns';

  rows.forEach((row) => {
    const columnEl = document.createElement('div');
    columnEl.className = 'footer-links-column';
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

    columns.append(columnEl);
  });

  inner.append(columns);
  block.replaceChildren(inner);
}
