export default function decorate(block) {
  const data = {};

  [...block.children].forEach((row) => {
    const cells = [...row.children];

    if (cells.length >= 2) {
      data[cells[0].textContent.trim()] = cells[1].innerHTML.trim();
    }
  });

  const title = data.title || 'Need support?';
  const helpLabel = data.help_label || 'Customer help';
  const helpLink = data.help_link || '/support/';
  const officeLabel = data.office_label || 'Find an office';
  const officeAction = data.office_action || '#find-office';
  const searchLabel = data.search_label || 'Search';
  const searchAction = data.search_action || '#site-search';

  block.innerHTML = '';
  block.classList.add('need-help-footer', 'color-eggshell');

  const container = document.createElement('div');
  container.className = 'container';

  const heading = document.createElement('h2');
  heading.textContent = title;
  container.appendChild(heading);

  const list = document.createElement('ul');
  list.className = 'support-actions';

  const actions = [
    {
      label: helpLabel,
      href: helpLink,
      track: 'call block',
      type: 'link',
    },
    {
      label: officeLabel,
      href: officeAction,
      track: 'find an office',
      type: 'button',
    },
    {
      label: searchLabel,
      href: searchAction,
      track: 'search',
      type: 'button',
    },
  ];

  actions.forEach((action) => {
    const li = document.createElement('li');

    const el = document.createElement(
      action.type === 'link' ? 'a' : 'button',
    );

    el.className = 'icon-btn';
    el.textContent = action.label;

    el.setAttribute(
      'data-track',
      JSON.stringify({
        loc: 'f',
        nm: action.track,
      }),
    );

    if (action.type === 'link') {
      el.href = action.href;
    } else {
      el.type = 'button';

      el.setAttribute(
        'data-action',
        action.href.replace(/^#/, ''),
      );
    }

    li.appendChild(el);
    list.appendChild(li);
  });

  container.appendChild(list);
  block.appendChild(container);
}
