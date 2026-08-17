import { getMetadata, loadCSS } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

async function ensureFooterStyles() {
  const base = window.hlx.codeBasePath || '';
  await loadCSS(`${base}/blocks/footer-disclosures/footer-disclosures.css`);
}

/**
 * Align support labels over link columns, and seals under copyright.
 * @param {Element} footer
 */
function layoutFooter(footer) {
  const support = footer.querySelector('.footer-support');
  const links = footer.querySelector('.footer-links');
  if (support && links && !support.closest('.footer-main')) {
    const main = document.createElement('div');
    main.className = 'footer-main';
    const supportUnit = support.closest('.footer-support-wrapper') || support;
    const linksUnit = links.closest('.footer-links-wrapper') || links;
    supportUnit.before(main);
    main.append(supportUnit, linksUnit);
  }

  const supportWrap = footer.querySelector('.footer-support-wrapper');
  const disclosures = footer.querySelector('.footer-disclosures');
  if (supportWrap && disclosures && !supportWrap.contains(disclosures)) {
    const discUnit = disclosures.closest('.footer-disclosures-wrapper') || disclosures;
    supportWrap.prepend(discUnit);
  }

  const legalCopy = footer.querySelector('.legal-copy');
  const seals = footer.querySelector('.footer-seals');
  if (legalCopy && seals && !legalCopy.contains(seals)) {
    const wrap = seals.closest('.footer-seals-wrapper');
    legalCopy.append(seals);
    if (wrap && wrap !== legalCopy && !wrap.children.length) wrap.remove();
  }
}

/**
 * loads and decorates the footer from the authored /footer fragment
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  block.textContent = '';
  if (!fragment) return;

  await ensureFooterStyles();

  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  footer.classList.add('footer');
  footer.querySelectorAll('.section').forEach((section) => {
    section.classList.add('site-footer', 'green-dark-theme');
  });
  layoutFooter(footer);
  block.append(footer);
}
