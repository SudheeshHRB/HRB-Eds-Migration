/**
 * H&R Block Footer is authored as a section (not a block).
 * Theme/layout styles live in styles/lazy-styles.css (.site-footer / .green-dark-theme).
 * Child blocks: footer-support, footer-links, footer-legal, footer-seals.
 */
export default function decorate(block) {
  block.classList.add('site-footer');
}
