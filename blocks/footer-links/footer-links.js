export default function decorate(block) {
  const rows = [...block.children];
  if (rows.length === 0) return;

  const data = {};
  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      const key = cells[0].textContent.trim();
      const value = cells[1].innerHTML.trim();
      data[key] = value;
    }
  });

  const columns = [data.col1, data.col2, data.col3, data.col4];

  block.innerHTML = '';
  block.classList.add('links-footer', 'color-eggshell');

  const container = document.createElement('div');
  container.className = 'container';

  const columnContainer = document.createElement('div');
  columnContainer.className = 'column-container links-footer color-eggshell';

  columns.forEach((html) => {
    const columnEl = document.createElement('div');
    columnEl.className = 'column';

    if (html) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      wrapper.querySelectorAll('a').forEach((link) => {
        link.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: link.textContent.trim().toLowerCase() }));
      });
      columnEl.appendChild(wrapper.firstElementChild || wrapper);
    }

    columnContainer.appendChild(columnEl);
  });

  container.appendChild(columnContainer);
  block.appendChild(container);
}
