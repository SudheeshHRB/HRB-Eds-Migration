// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

// const isDesktop = window.matchMedia('(min-width: 900px)');

// const defaultNavData = {
//   brand: {
//     label: 'H&R Block',
//     href: '/',
//     ariaLabel: 'H&R Block Home',
//   },
//   menu: [
//     {
//       label: 'Taxes',
//       href: '/taxes/',
//       children: [
//         { label: 'File online', href: '/online-tax-filing/' },
//         { label: 'Find an office', href: '/tax-offices/' },
//       ],
//     },
//     {
//       label: 'Financial products',
//       href: '/financial-services/',
//       children: [
//         { label: 'Spruce', href: '/financial-services/spruce/' },
//         { label: 'More products', href: '/financial-services/' },
//       ],
//     },
//     {
//       label: 'Business services',
//       href: '/tax-offices/business-services/',
//       children: [
//         { label: 'Small business tax prep', href: '/tax-offices/business-services/' },
//       ],
//     },
//     {
//       label: 'Tools and resources',
//       href: '/tax-center/',
//       children: [
//         { label: 'Tax tips and help', href: '/tax-center/' },
//       ],
//     },
//   ],
//   tools: [
//     { label: 'Find an office', href: '/tax-offices/' },
//     { label: 'Search', href: '/tax-center/' },
//   ],
//   signIn: {
//     eyebrow: 'Sign in to',
//     label: 'MyBlock',
//     href: '/account/',
//   },
// };

// function createLink(label, href, className, ariaLabel) {
//   const link = document.createElement('a');
//   link.href = href;
//   link.textContent = label;
//   if (className) link.className = className;
//   if (ariaLabel) link.setAttribute('aria-label', ariaLabel);
//   return link;
// }

// function createNavList(items, itemClassName, linkClassName, nestedListClassName) {
//   const list = document.createElement('ul');
//   items.forEach((item) => {
//     const listItem = document.createElement('li');
//     if (itemClassName) listItem.className = itemClassName;
//     const link = createLink(item.label, item.href, linkClassName);
//     listItem.append(link);
//     if (item.children?.length) {
//       const nestedList = document.createElement('ul');
//       if (nestedListClassName) nestedList.className = nestedListClassName;
//       item.children.forEach((child) => {
//         const childItem = document.createElement('li');
//         childItem.append(createLink(child.label, child.href));
//         nestedList.append(childItem);
//       });
//       listItem.append(nestedList);
//     }
//     list.append(listItem);
//   });
//   return list;
// }

// function buildDefaultNav() {
//   const nav = document.createElement('nav');
//   nav.id = 'nav';
//   nav.setAttribute('aria-label', 'Primary');

//   const brand = document.createElement('div');
//   brand.className = 'nav-brand';
//   brand.append(createLink(defaultNavData.brand.label, defaultNavData.brand.href, 'nav-brand-link', defaultNavData.brand.ariaLabel));
//   nav.append(brand);

//   const sections = document.createElement('div');
//   sections.className = 'nav-sections';
//   const wrapper = document.createElement('div');
//   wrapper.className = 'default-content-wrapper';
//   wrapper.append(createNavList(defaultNavData.menu, 'nav-drop', 'nav-menu-link', 'submenu'));
//   sections.append(wrapper);
//   nav.append(sections);

//   const tools = document.createElement('div');
//   tools.className = 'nav-tools';
//   const utilityList = document.createElement('ul');
//   utilityList.className = 'nav-utilities';
//   defaultNavData.tools.forEach((tool) => {
//     const item = document.createElement('li');
//     item.append(createLink(tool.label, tool.href, 'nav-tool-link'));
//     utilityList.append(item);
//   });
//   tools.append(utilityList);

//   const signIn = createLink(defaultNavData.signIn.label, defaultNavData.signIn.href, 'nav-signin');
//   const eyebrow = document.createElement('span');
//   eyebrow.className = 'nav-signin-eyebrow';
//   eyebrow.textContent = defaultNavData.signIn.eyebrow;
//   const label = document.createElement('span');
//   label.className = 'nav-signin-label';
//   label.textContent = defaultNavData.signIn.label;
//   signIn.prepend(eyebrow);
//   signIn.append(label);
//   tools.append(signIn);
//   nav.append(tools);

//   return nav;
// }

// function closeOnEscape(e) {
//   if (e.code !== 'Escape') return;
//   const nav = document.getElementById('nav');
//   if (!nav) return;
//   const navSections = nav.querySelector('.nav-sections');
//   if (!navSections) return;
//   const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
//   if (navSectionExpanded && isDesktop.matches) {
//     // eslint-disable-next-line no-use-before-define
//     toggleAllNavSections(navSections);
//     navSectionExpanded.querySelector('.nav-menu-link')?.focus();
//   } else if (!isDesktop.matches) {
//     // eslint-disable-next-line no-use-before-define
//     toggleMenu(nav, navSections);
//     nav.querySelector('.nav-hamburger button')?.focus();
//   }
// }

// function closeOnFocusLost(e) {
//   const nav = e.currentTarget;
//   if (nav.contains(e.relatedTarget)) return;
//   const navSections = nav.querySelector('.nav-sections');
//   if (!navSections) return;
//   if (isDesktop.matches) {
//     // eslint-disable-next-line no-use-before-define
//     toggleAllNavSections(navSections, false);
//   } else {
//     // eslint-disable-next-line no-use-before-define
//     toggleMenu(nav, navSections, false);
//   }
// }

// /**
//  * @param {Element} sections
//  * @param {boolean} expanded
//  */
// function toggleAllNavSections(sections, expanded = false) {
//   if (!sections) return;
//   sections.querySelectorAll('.nav-drop').forEach((section) => {
//     section.setAttribute('aria-expanded', expanded ? 'true' : 'false');
//   });
//   document.body.classList.toggle('nav-mega-open', Boolean(expanded && isDesktop.matches
//     && sections.querySelector('.nav-drop[aria-expanded="true"] .mega-menu')));
// }

// /**
//  * @param {Element} nav
//  * @param {Element} navSections
//  * @param {boolean|null} forceExpanded
//  */
// function toggleMenu(nav, navSections, forceExpanded = null) {
//   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
//   const button = nav.querySelector('.nav-hamburger button');
//   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
//   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//   toggleAllNavSections(navSections, !(expanded || isDesktop.matches));
//   if (button) {
//     button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
//   }

//   if (!expanded || isDesktop.matches) {
//     window.addEventListener('keydown', closeOnEscape);
//     nav.addEventListener('focusout', closeOnFocusLost);
//   } else {
//     window.removeEventListener('keydown', closeOnEscape);
//     nav.removeEventListener('focusout', closeOnFocusLost);
//   }
// }

// /**
//  * Assemble standalone nav-panel blocks into a menu list.
//  * @param {Element} navSections
//  */
// function assembleNavPanels(navSections) {
//   if (!navSections) return;
//   if (navSections.querySelector('.nav-menu-list')) return;

//   const panels = [...navSections.querySelectorAll('.nav-panel')];
//   if (!panels.length) return;

//   const list = document.createElement('ul');
//   list.className = 'nav-menu-list';

//   panels.forEach((panel) => {
//     const li = document.createElement('li');
//     li.className = 'nav-drop';
//     if (panel.classList.contains('has-mega')) li.classList.add('has-mega');
//     li.setAttribute('aria-expanded', 'false');
//     const inner = panel.querySelector('.nav-panel-inner') || panel;
//     while (inner.firstChild) li.append(inner.firstChild);
//     list.append(li);
//     const wrapper = panel.closest('.nav-panel-wrapper') || panel.parentElement;
//     if (wrapper && wrapper !== navSections && !wrapper.classList.contains('section')) {
//       wrapper.remove();
//     } else {
//       panel.remove();
//     }
//   });

//   const wrapper = navSections.querySelector('.default-content-wrapper') || navSections;
//   wrapper.append(list);
// }

// /**
//  * Wire mega-menu / dropdown toggles.
//  * @param {Element} navSections
//  */
// function decorateNavDrops(navSections) {
//   if (!navSections) return;

//   navSections.querySelectorAll('.default-content-wrapper > ul > li').forEach((navSection) => {
//     if (navSection.querySelector('ul, .mega-menu')) navSection.classList.add('nav-drop');
//   });

//   navSections.querySelectorAll('.nav-drop').forEach((navSection) => {
//     navSection.setAttribute('aria-expanded', 'false');
//     const trigger = navSection.querySelector(':scope > .nav-menu-link, :scope > a');
//     if (trigger) {
//       trigger.setAttribute('aria-haspopup', navSection.querySelector('.mega-menu') ? 'true' : 'false');
//       trigger.setAttribute('aria-expanded', 'false');
//     }

//     navSection.addEventListener('click', (e) => {
//       const inMegaLink = e.target.closest('.mega-menu a');
//       if (inMegaLink) return;

//       if (!isDesktop.matches) {
//         if (e.target.closest('.nav-menu-link, :scope > a') || e.target === navSection) {
//           const open = navSection.getAttribute('aria-expanded') === 'true';
//           navSection.setAttribute('aria-expanded', open ? 'false' : 'true');
//           trigger?.setAttribute('aria-expanded', open ? 'false' : 'true');
//         }
//         return;
//       }

//       if (!e.target.closest('.nav-menu-link, :scope > a') && e.target !== navSection) return;
//       e.preventDefault();
//       const expanded = navSection.getAttribute('aria-expanded') === 'true';
//       toggleAllNavSections(navSections, false);
//       if (!expanded) {
//         navSection.setAttribute('aria-expanded', 'true');
//         trigger?.setAttribute('aria-expanded', 'true');
//         document.body.classList.add('nav-mega-open');
//       }
//     });
//   });

//   document.addEventListener('click', (e) => {
//     if (!isDesktop.matches) return;
//     if (e.target.closest('#nav')) return;
//     toggleAllNavSections(navSections, false);
//   });
// }

// /**
//  * loads and decorates the header / primary navigation from the authored /nav fragment
//  * @param {Element} block
//  */
// export default async function decorate(block) {
//   const navMeta = getMetadata('nav');
//   const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
//   const fragment = await loadFragment(navPath);

//   block.textContent = '';
//   const nav = document.createElement('nav');
//   nav.id = 'nav';
//   nav.setAttribute('aria-label', 'Primary');

//   const hasExpectedStructure = fragment?.querySelector('.nav-brand, .nav-sections, .nav-tools')
//     || fragment?.children.length >= 3;

//   if (!hasExpectedStructure) {
//     const defaultNav = buildDefaultNav();
//     while (defaultNav.firstElementChild) nav.append(defaultNav.firstElementChild);
//   } else {
//     while (fragment.firstElementChild) nav.append(fragment.firstElementChild);
//   }

//   const classes = ['brand', 'sections', 'tools'];
//   classes.forEach((c, i) => {
//     const section = nav.children[i];
//     if (section) section.classList.add(`nav-${c}`);
//   });

//   const navBrand = nav.querySelector('.nav-brand');
//   if (navBrand) {
//     const brandLink = navBrand.querySelector('.button');
//     if (brandLink) {
//       brandLink.className = '';
//       brandLink.closest('.button-container')?.classList.remove('button-container');
//     }
//   }

//   const navSections = nav.querySelector('.nav-sections');
//   assembleNavPanels(navSections);
//   decorateNavDrops(navSections);

//   const hamburger = document.createElement('div');
//   hamburger.classList.add('nav-hamburger');
//   hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
//       <span class="nav-hamburger-icon"></span>
//     </button>`;
//   hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
//   nav.prepend(hamburger);
//   nav.setAttribute('aria-expanded', 'false');
//   toggleMenu(nav, navSections, isDesktop.matches);
//   isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

//   const navWrapper = document.createElement('div');
//   navWrapper.className = 'nav-wrapper';
//   navWrapper.append(nav);
//   block.append(navWrapper);
// }
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code !== 'Escape') return;
  const nav = document.getElementById('nav');
  if (!nav) return;
  const navSections = nav.querySelector('.nav-sections');
  if (!navSections) return;
  const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
  if (navSectionExpanded && isDesktop.matches) {
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(navSections);
    navSectionExpanded.querySelector('.nav-menu-link')?.focus();
  } else if (!isDesktop.matches) {
    // eslint-disable-next-line no-use-before-define
    toggleMenu(nav, navSections);
    nav.querySelector('.nav-hamburger button')?.focus();
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (nav.contains(e.relatedTarget)) return;
  const navSections = nav.querySelector('.nav-sections');
  if (!navSections) return;
  if (isDesktop.matches) {
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(navSections, false);
  } else {
    // eslint-disable-next-line no-use-before-define
    toggleMenu(nav, navSections, false);
  }
}

/**
 * @param {Element} sections
 * @param {boolean} expanded
 */
function toggleAllNavSections(sections, expanded = false) {
  if (!sections) return;
  sections.querySelectorAll('.nav-drop').forEach((section) => {
    section.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
  document.body.classList.toggle('nav-mega-open', Boolean(expanded && isDesktop.matches
    && sections.querySelector('.nav-drop[aria-expanded="true"] .mega-menu')));
}

/**
 * @param {Element} nav
 * @param {Element} navSections
 * @param {boolean|null} forceExpanded
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, !(expanded || isDesktop.matches));
  if (button) {
    button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  }

  if (!expanded || isDesktop.matches) {
    window.addEventListener('keydown', closeOnEscape);
    nav.addEventListener('focusout', closeOnFocusLost);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
    nav.removeEventListener('focusout', closeOnFocusLost);
  }
}

/**
 * Assemble standalone nav-panel blocks into a menu list.
 * @param {Element} navSections
 */
function assembleNavPanels(navSections) {
  if (!navSections) return;
  if (navSections.querySelector('.nav-menu-list')) return;

  const panels = [...navSections.querySelectorAll('.nav-panel')];
  if (!panels.length) return;

  const list = document.createElement('ul');
  list.className = 'nav-menu-list';

  panels.forEach((panel) => {
    const li = document.createElement('li');
    li.className = 'nav-drop';
    if (panel.classList.contains('has-mega')) li.classList.add('has-mega');
    li.setAttribute('aria-expanded', 'false');
    const inner = panel.querySelector('.nav-panel-inner') || panel;
    while (inner.firstChild) li.append(inner.firstChild);
    list.append(li);
    const wrapper = panel.closest('.nav-panel-wrapper') || panel.parentElement;
    if (wrapper && wrapper !== navSections && !wrapper.classList.contains('section')) {
      wrapper.remove();
    } else {
      panel.remove();
    }
  });

  const wrapper = navSections.querySelector('.default-content-wrapper') || navSections;
  wrapper.append(list);
}

/**
 * Wire mega-menu / dropdown toggles.
 * @param {Element} navSections
 */
function decorateNavDrops(navSections) {
  if (!navSections) return;

  navSections.querySelectorAll('.default-content-wrapper > ul > li').forEach((navSection) => {
    if (navSection.querySelector('ul, .mega-menu')) navSection.classList.add('nav-drop');
  });

  navSections.querySelectorAll('.nav-drop').forEach((navSection) => {
    navSection.setAttribute('aria-expanded', 'false');
    const trigger = navSection.querySelector(':scope > .nav-menu-link, :scope > a');
    if (trigger) {
      trigger.setAttribute('aria-haspopup', navSection.querySelector('.mega-menu') ? 'true' : 'false');
      trigger.setAttribute('aria-expanded', 'false');
    }

    navSection.addEventListener('click', (e) => {
      const inMegaLink = e.target.closest('.mega-menu a');
      if (inMegaLink) return;

      if (!isDesktop.matches) {
        if (e.target.closest('.nav-menu-link, :scope > a') || e.target === navSection) {
          const open = navSection.getAttribute('aria-expanded') === 'true';
          navSection.setAttribute('aria-expanded', open ? 'false' : 'true');
          trigger?.setAttribute('aria-expanded', open ? 'false' : 'true');
        }
        return;
      }

      if (!e.target.closest('.nav-menu-link, :scope > a') && e.target !== navSection) return;
      e.preventDefault();
      const expanded = navSection.getAttribute('aria-expanded') === 'true';
      toggleAllNavSections(navSections, false);
      if (!expanded) {
        navSection.setAttribute('aria-expanded', 'true');
        trigger?.setAttribute('aria-expanded', 'true');
        document.body.classList.add('nav-mega-open');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!isDesktop.matches) return;
    if (e.target.closest('#nav')) return;
    toggleAllNavSections(navSections, false);
  });
}

/**
 * loads and decorates the header / primary navigation from the authored /nav fragment
 * @param {Element} block
 */
export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  block.textContent = '';
  if (!fragment) return;

  const nav = document.createElement('nav');
  nav.id = 'nav';
  nav.setAttribute('aria-label', 'Primary');

  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  if (navBrand) {
    const brandLink = navBrand.querySelector('.button');
    if (brandLink) {
      brandLink.className = '';
      brandLink.closest('.button-container')?.classList.remove('button-container');
    }
  }

  const navSections = nav.querySelector('.nav-sections');
  assembleNavPanels(navSections);
  decorateNavDrops(navSections);

  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}
