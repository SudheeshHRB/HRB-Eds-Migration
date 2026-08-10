// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

// const defaultFooterData = {
//   supportTitle: 'Need support?',
//   supportLinks: [
//     { label: 'Customer help', href: '/tax-offices/' },
//     { label: 'Find an office', href: '/tax-offices/' },
//     { label: 'Search', href: '/tax-center/' },
//   ],
//   columns: [
//     {
//       title: 'Tax Services',
//       links: [
//         { label: 'File online', href: '/online-tax-filing/' },
//         { label: 'Visit a location', href: '/tax-offices/' },
//       ],
//     },
//     {
//       title: 'Financial Services',
//       links: [
//         { label: 'Spruce', href: '/financial-services/spruce/' },
//         { label: 'More products', href: '/financial-services/' },
//       ],
//     },
//     {
//       title: 'About H&R Block',
//       links: [
//         { label: 'About us', href: '/about-us/' },
//         { label: 'Guarantees', href: '/guarantees/' },
//       ],
//     },
//   ],
//   legalText: 'Copyright © 2026 H&R Block. All rights reserved.',
//   privacyLink: {
//     label: 'Your privacy choices',
//     href: '/privacy/',
//   },
// };

// function createLink(label, href, className) {
//   const link = document.createElement('a');
//   link.href = href;
//   link.textContent = label;
//   if (className) link.className = className;
//   return link;
// }

// function createList(items, listClassName) {
//   const list = document.createElement('ul');
//   if (listClassName) list.className = listClassName;
//   items.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.append(createLink(item.label, item.href));
//     list.append(listItem);
//   });
//   return list;
// }

// function buildDefaultFooter() {
//   const footer = document.createElement('div');
//   footer.className = 'footer section site-footer green-dark-theme';

//   const support = document.createElement('div');
//   support.className = 'footer-support';
//   const supportInner = document.createElement('div');
//   supportInner.className = 'footer-support-inner';
//   const supportTitle = document.createElement('h2');
//   supportTitle.textContent = defaultFooterData.supportTitle;
//   supportInner.append(supportTitle);
//   supportInner.append(createList(defaultFooterData.supportLinks, 'support-actions'));
//   support.append(supportInner);
//   footer.append(support);

//   const links = document.createElement('div');
//   links.className = 'footer-links';
//   const linksInner = document.createElement('div');
//   linksInner.className = 'footer-links-inner';
//   const columnContainer = document.createElement('div');
//   columnContainer.className = 'column-container';
//   defaultFooterData.columns.forEach((column) => {
//     const columnEl = document.createElement('div');
//     columnEl.className = 'column';
//     const heading = document.createElement('h3');
//     heading.textContent = column.title;
//     columnEl.append(heading);
//     columnEl.append(createList(column.links));
//     columnContainer.append(columnEl);
//   });
//   linksInner.append(columnContainer);
//   links.append(linksInner);
//   footer.append(links);

//   const legal = document.createElement('div');
//   legal.className = 'footer-legal';
//   const copyrightInner = document.createElement('div');
//   copyrightInner.className = 'copyright-inner';
//   const legalCopy = document.createElement('div');
//   legalCopy.className = 'legal-copy';
//   const paragraph = document.createElement('p');
//   paragraph.textContent = defaultFooterData.legalText;
//   legalCopy.append(paragraph);
//   copyrightInner.append(legalCopy);
//   legal.append(copyrightInner);
//   footer.append(legal);

//   const seals = document.createElement('div');
//   seals.className = 'footer-seals';
//   const sealsInner = document.createElement('div');
//   sealsInner.className = 'seals-inner';
//   const sealItem = document.createElement('div');
//   sealItem.className = 'seal-item';
//   sealItem.append(createLink(defaultFooterData.privacyLink.label, defaultFooterData.privacyLink.href, 'privacy-choices'));
//   sealsInner.append(sealItem);
//   seals.append(sealsInner);
//   footer.append(seals);

//   return footer;
// }

// /**
//  * loads and decorates the footer from the authored /footer fragment
//  * @param {Element} block The footer block element
//  */
// export default async function decorate(block) {
//   const footerMeta = getMetadata('footer');
//   const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
//   const fragment = await loadFragment(footerPath);

//   block.textContent = '';
//   const footer = document.createElement('div');
//   const hasExpectedStructure = fragment?.querySelector('.footer-support, .footer-links, .footer-legal, .footer-seals')
//     || fragment?.children.length >= 2;

//   if (!hasExpectedStructure) {
//     const defaultFooter = buildDefaultFooter();
//     while (defaultFooter.firstElementChild) footer.append(defaultFooter.firstElementChild);
//   } else {
//     while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
//   }

//   footer.classList.add('footer');
//   block.append(footer);
// }
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

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

  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  footer.classList.add('footer');
  block.append(footer);
}
