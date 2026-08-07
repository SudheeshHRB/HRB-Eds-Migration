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
  if (!fragment) return;

  block.textContent = '';
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
