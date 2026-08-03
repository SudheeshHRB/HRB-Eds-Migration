/**
 * Footer Legal block — S3 Legal and Social
 * Copyright / Pathward text + 5 social icon links
 */
export default function decorate(block) {
  const data = {};
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      data[cells[0].textContent.trim()] = cells[1].innerHTML.trim();
    }
  });

  const legalHtml = data.legal_text
    || '<p>Copyright © 2025-2026 HRB Digital LLC. All Rights Reserved.</p>'
      + '<p>Bank products and services are offered by Pathward®, N.A.</p>'
      + '<p>All deposit accounts through Pathward® are FDIC insured.</p>';

  const socials = [
    { key: 'tiktok', label: 'TikTok', defaultUrl: 'https://www.tiktok.com/@hrblock' },
    { key: 'facebook', label: 'Facebook', defaultUrl: 'https://www.facebook.com/hrblock' },
    { key: 'instagram', label: 'Instagram', defaultUrl: 'https://www.instagram.com/hrblock/' },
    { key: 'youtube', label: 'YouTube', defaultUrl: 'https://www.youtube.com/hrblock' },
    { key: 'linkedin', label: 'LinkedIn', defaultUrl: 'https://www.linkedin.com/company/h&r-block' },
  ];

  block.innerHTML = '';
  block.classList.add('copyright-footer', 'sm-md-column-reverse', 'color-eggshell');

  const container = document.createElement('div');
  container.className = 'container copyright-inner';

  const legal = document.createElement('div');
  legal.className = 'legal-copy';
  legal.innerHTML = legalHtml;
  container.appendChild(legal);

  const socialNav = document.createElement('ul');
  socialNav.className = 'social-media';
  socialNav.setAttribute('aria-label', 'Social media');

  socials.forEach((network) => {
    const url = (data[`${network.key}_url`] || network.defaultUrl || '').replace(/<[^>]+>/g, '').trim();
    if (!url) return;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = `social-link social-${network.key}`;
    a.setAttribute('aria-label', network.label);
    a.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: network.label.toLowerCase() }));
    a.textContent = network.label;
    li.appendChild(a);
    socialNav.appendChild(li);
  });

  container.appendChild(socialNav);
  block.appendChild(container);
}
