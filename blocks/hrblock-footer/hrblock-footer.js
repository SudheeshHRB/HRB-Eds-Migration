/**
 * H&R Block Footer section wrapper.
 * Applies site-footer semantics and green-dark-theme styling.
 * Matches production: footer.site-footer.green-dark-theme
 */
export default function decorate(block) {
  block.classList.add('site-footer');
  if (!block.classList.contains('green-dark-theme')) {
    block.classList.add('green-dark-theme');
  }

  const footer = document.createElement('footer');
  footer.className = block.className;
  footer.innerHTML = block.innerHTML;

  [...block.attributes].forEach((attr) => {
    if (attr.name !== 'class') {
      footer.setAttribute(attr.name, attr.value);
    }
  });

  block.replaceWith(footer);
}
