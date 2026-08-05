export default function decorate(block) {
  const data = {};
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      data[cells[0].textContent.trim()] = cells[1].innerHTML.trim();
    }
  });

  const title = data.title || 'Need support?';
  const json = data.actions || '{}';
  const parsedActions = (() => {
    try {
      return JSON.parse(json);
    } catch (error) {
      return {};
    }
  })();

  const supportActions = [
    {
      label: parsedActions.help?.label || 'Customer help',
      href: parsedActions.help?.href || parsedActions.help?.action || '/support/',
      track: 'call block',
      type: 'link',
    },
    {
      label: parsedActions.office?.label || 'Find an office',
      href: parsedActions.office?.action || parsedActions.office?.href || '#find-office',
      track: 'find an office',
      type: 'button',
    },
    {
      label: parsedActions.search?.label || 'Search',
      href: parsedActions.search?.action || parsedActions.search?.href || '#site-search',
      track: 'search',
      type: 'button',
    },
  ];

  block.innerHTML = '';
  block.classList.add('need-help-footer', 'color-eggshell');

  const container = document.createElement('div');
  container.className = 'container';

  const heading = document.createElement('h2');
  heading.textContent = title;
  container.appendChild(heading);

  const list = document.createElement('ul');
  list.className = 'support-actions';

  supportActions.forEach((action) => {
    const li = document.createElement('li');
    const el = document.createElement(action.type === 'link' ? 'a' : 'button');
    el.className = 'icon-btn';
    el.textContent = action.label;
    el.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: action.track }));
    if (action.type === 'link') {
      el.href = action.href;
    } else {
      el.type = 'button';
      el.setAttribute('data-action', action.href.replace(/^#/, ''));
    }
    li.appendChild(el);
    list.appendChild(li);
  });

  container.appendChild(list);
  block.appendChild(container);
}
