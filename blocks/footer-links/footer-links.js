/**
 * Footer Links block — S2 Link Columns
 * Renders 4-column footer menu grid matching hrblock.com production footer.
 */
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

  const columns = [
    {
      menus: [
        { title: data.col1_menu1_title, id: data.col1_menu1_id, links: data.col1_menu1_links },
        { title: data.col1_menu2_title, id: data.col1_menu2_id, links: data.col1_menu2_links },
      ],
    },
    {
      menus: [
        { title: data.col2_menu1_title, id: data.col2_menu1_id, links: data.col2_menu1_links },
        { title: data.col2_menu2_title, id: data.col2_menu2_id, links: data.col2_menu2_links },
      ],
    },
    {
      menus: [
        { title: data.col3_menu1_title, id: data.col3_menu1_id, links: data.col3_menu1_links },
        { title: data.col3_menu2_title, id: data.col3_menu2_id, links: data.col3_menu2_links },
      ],
    },
    {
      menus: [
        { title: data.col4_menu1_title, id: data.col4_menu1_id, links: data.col4_menu1_links },
      ],
    },
  ];

  block.innerHTML = '';
  block.classList.add('links-footer', 'color-eggshell');

  const container = document.createElement('div');
  container.className = 'container';

  const columnContainer = document.createElement('div');
  columnContainer.className = 'column-container links-footer color-eggshell';

  columns.forEach((col) => {
    const columnEl = document.createElement('div');
    columnEl.className = 'column';

    col.menus.forEach((menu) => {
      if (!menu.title) return;

      const heading = document.createElement('h5');
      const strong = document.createElement('strong');
      strong.textContent = menu.title;
      heading.appendChild(strong);
      columnEl.appendChild(heading);

      if (menu.links) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = menu.links;
        const ul = wrapper.querySelector('ul');
        if (ul) {
          if (menu.id) ul.id = menu.id;
          ul.querySelectorAll('a').forEach((link) => {
            link.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: link.textContent.trim().toLowerCase() }));
          });
          columnEl.appendChild(ul);
        }
      }
    });

    columnContainer.appendChild(columnEl);
  });

  container.appendChild(columnContainer);
  block.appendChild(container);
}
