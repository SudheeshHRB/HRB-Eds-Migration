export default function decorate(block) {
  const data = {};
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      data[cells[0].textContent.trim()] = cells[1].innerHTML.trim();
    }
  });

  const sealJson = data.seal || '{}';
  const privacyJson = data.privacy || '{}';
  const parsedSeal = (() => {
    try {
      return JSON.parse(sealJson);
    } catch (error) {
      return {};
    }
  })();
  const parsedPrivacy = (() => {
    try {
      return JSON.parse(privacyJson);
    } catch (error) {
      return {};
    }
  })();

  const sealSrc = (parsedSeal.src || '//privacy-policy.truste.com/privacy-seal/seal?rid=d3f53dd3-a8a0-4f4e-84aa-56378ed8565d')
    .replace(/<[^>]+>/g, '').trim();
  const sealHref = (parsedSeal.href || '//privacy.truste.com/privacy-seal/validation?rid=d3f53dd3-a8a0-4f4e-84aa-56378ed8565d')
    .replace(/<[^>]+>/g, '').trim();
  const sealAlt = (parsedSeal.alt || 'TRUSTe Privacy Certification').replace(/<[^>]+>/g, '').trim();
  const privacyLabel = (parsedPrivacy.label || 'Your Privacy Choices').replace(/<[^>]+>/g, '').trim();
  const privacyHref = (parsedPrivacy.href || 'https://submit-irm.trustarc.com/services/validation/aa9303a8-87ee-42b9-b4db-84819fdef107')
    .replace(/<[^>]+>/g, '').trim();

  block.innerHTML = '';
  block.classList.add('seals-footer', 'color-eggshell');

  const container = document.createElement('div');
  container.className = 'container seals-inner';

  const sealLink = document.createElement('a');
  sealLink.href = sealHref;
  sealLink.target = '_blank';
  sealLink.rel = 'noopener noreferrer';
  sealLink.className = 'truste-seal';
  sealLink.setAttribute('aria-label', sealAlt);
  sealLink.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: 'truste seal' }));

  const img = document.createElement('img');
  img.src = sealSrc.startsWith('//') ? `https:${sealSrc}` : sealSrc;
  img.alt = sealAlt;
  img.width = 126;
  img.height = 50;
  img.loading = 'lazy';
  sealLink.appendChild(img);
  container.appendChild(sealLink);

  const privacy = document.createElement('a');
  privacy.href = privacyHref;
  privacy.target = '_blank';
  privacy.rel = 'noopener noreferrer';
  privacy.className = 'privacy-choices';
  privacy.textContent = privacyLabel;
  privacy.setAttribute('data-track', JSON.stringify({ loc: 'f', nm: 'privacy choice' }));
  container.appendChild(privacy);

  block.appendChild(container);
}
