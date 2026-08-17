import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * @param {Element} row
 * @returns {boolean}
 */
function isNotesRow(row) {
  return Boolean(row.textContent.trim()) && !row.querySelector('ul');
}

/**
 * Footer Disclosures — always-visible accordion (no native details, which can fail to paint).
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  const headingRow = rows.find((row) => row.querySelector('h1, h2, h3, h4, h5, h6'))
    || rows.find((row) => !row.querySelector('a, ul') && row.textContent.trim());
  const contentRows = rows.filter((row) => row !== headingRow);

  const root = document.createElement('div');
  root.className = 'footer-disclosures-inner';

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'footer-disclosures-toggle';
  toggle.setAttribute('aria-expanded', 'true');

  let heading = headingRow?.querySelector('h1, h2, h3, h4, h5, h6');
  if (!heading) {
    heading = document.createElement('h2');
    heading.textContent = (headingRow?.textContent || 'Offer details and disclosures').trim()
      || 'Offer details and disclosures';
  }
  if (headingRow) moveInstrumentation(headingRow, heading);
  toggle.append(heading);
  root.append(toggle);

  const body = document.createElement('div');
  body.className = 'footer-disclosures-body';
  body.hidden = false;

  const groups = document.createElement('div');
  groups.className = 'footer-disclosures-groups';

  const notes = document.createElement('div');
  notes.className = 'footer-disclosures-notes';

  contentRows.forEach((row) => {
    const list = row.querySelector('ul');
    if (list && !isNotesRow(row)) {
      const group = document.createElement('div');
      group.className = 'disclosure-group';
      moveInstrumentation(row, group);

      const groupHeading = document.createElement('p');
      groupHeading.className = 'disclosure-group-heading';
      const authoredHeading = row.querySelector('h1, h2, h3, h4, h5, h6, strong');
      const headingCell = [...row.children].find((cell) => !cell.querySelector('ul'));
      groupHeading.textContent = (
        authoredHeading?.textContent
        || headingCell?.textContent
        || 'Full Site Disclaimers'
      ).trim();

      list.classList.add('disclosure-group-links');
      group.append(groupHeading, list);
      groups.append(group);
      return;
    }

    const cell = row.querySelector(':scope > div') || row;
    moveInstrumentation(row, notes);
    while (cell.firstChild) notes.append(cell.firstChild);
  });

  notes.querySelectorAll('p').forEach((p) => {
    if (p.querySelector('sup')) return;
    const sup = document.createElement('sup');
    sup.textContent = 'A';
    p.insertBefore(sup, p.firstChild);
    sup.after(document.createTextNode(' '));
  });

  if (groups.children.length) body.append(groups);
  if (notes.childNodes.length) body.append(notes);
  root.append(body);

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    body.hidden = expanded;
  });

  block.replaceChildren(root);
  block.classList.add('offer-disclosures');
}
