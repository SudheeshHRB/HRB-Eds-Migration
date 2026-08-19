import { createOptimizedPicture } from '../../scripts/aem.js';
import { keepAuthoredDom, moveInstrumentation } from '../../scripts/scripts.js';

const CARD_STYLES = new Set(['green', 'cream', 'accent']);

/**
 * @param {HTMLImageElement} img
 * @param {string} alt
 */
function pictureFrom(img, alt) {
  const picture = createOptimizedPicture(img.src, alt || img.alt || '', false, [{ width: '400' }]);
  moveInstrumentation(img, picture.querySelector('img'));
  return picture;
}

/**
 * @param {Element} row
 * @returns {string[]}
 */
function plainTexts(row) {
  return [...row.children]
    .filter((cell) => !cell.querySelector('img, picture, a, ul'))
    .map((cell) => cell.textContent.trim())
    .filter(Boolean);
}

/**
 * Nav Panel — top-nav trigger + mega menu panel.
 * @param {Element} block
 */
export default function decorate(block) {
  if (block.querySelector(':scope > .nav-panel-inner')) return;
  if (keepAuthoredDom(block)) {
    const trigger = block.querySelector('a');
    if (trigger) trigger.classList.add('nav-menu-link');
    return;
  }

  const rows = [...block.children];
  if (!rows.length) return;

  let triggerLink = null;
  const contentRows = [];

  rows.forEach((row, index) => {
    const link = row.querySelector('a');
    const list = row.querySelector('ul');
    const img = row.querySelector('img');

    // Model trigger row: first link-only row
    if (!triggerLink && link && !list && !img && (index === 0 || contentRows.length === 0)) {
      triggerLink = link;
      triggerLink.classList.add('nav-menu-link');
      moveInstrumentation(row, triggerLink);
      return;
    }
    contentRows.push(row);
  });

  const mega = document.createElement('div');
  mega.className = 'mega-menu';

  const main = document.createElement('div');
  main.className = 'mega-menu-main';

  const columnsWrap = document.createElement('div');
  columnsWrap.className = 'mega-columns';

  const cardsWrap = document.createElement('div');
  cardsWrap.className = 'mega-cards';

  let exploreSet = false;

  contentRows.forEach((row) => {
    const link = row.querySelector('a');
    const list = row.querySelector('ul');
    const img = row.querySelector('img');
    const texts = plainTexts(row);

    // Promo card: style from text cell / row class, or infer from image presence
    const classStyle = [...row.classList].find((c) => CARD_STYLES.has(c.toLowerCase()));
    const style = texts.find((t) => CARD_STYLES.has(t.toLowerCase())) || classStyle;
    const isCard = Boolean(link && !list && (style || img));
    if (isCard) {
      const cardStyle = (style || 'cream').toLowerCase();
      const paragraphs = [...row.querySelectorAll('p')]
        .map((p) => p.textContent.trim())
        .filter((t) => t && t !== link.textContent.trim()
          && t.toLowerCase() !== cardStyle);
      const [description, disclaimer] = paragraphs.length
        ? paragraphs
        : texts.filter((t) => t.toLowerCase() !== cardStyle
          && t !== link.textContent.trim());

      const card = document.createElement('a');
      card.href = link.href;
      card.className = `mega-card mega-card-${cardStyle}`;
      if (!img) card.classList.add('mega-card-text');
      else card.classList.add('mega-card-media');
      card.setAttribute(
        'aria-label',
        (link.getAttribute('title') || link.textContent || '').trim(),
      );
      if (link.target) card.target = link.target;
      moveInstrumentation(row, card);

      if (img) {
        // Keep SVG / external placeholders as authored; optimize DAM rasters
        try {
          const url = new URL(img.src, window.location.href);
          const isSvg = url.pathname.toLowerCase().endsWith('.svg');
          if (url.origin === window.location.origin && !isSvg) {
            card.append(pictureFrom(img, img.alt || link.textContent.trim()));
          } else {
            const picture = img.closest('picture');
            img.alt = img.alt || link.textContent.trim();
            img.loading = 'lazy';
            card.append(picture || img);
          }
        } catch {
          card.append(img);
        }
      }

      const body = document.createElement('div');
      body.className = 'mega-card-body';
      const title = document.createElement('p');
      title.className = 'mega-card-title';
      title.textContent = link.textContent.trim();
      body.append(title);
      if (description) {
        const desc = document.createElement('p');
        desc.className = 'mega-card-desc';
        desc.textContent = description;
        body.append(desc);
      }
      card.append(body);

      const wrap = document.createElement('div');
      wrap.className = 'mega-card-wrap';
      wrap.append(card);
      if (disclaimer) {
        const disc = document.createElement('p');
        disc.className = 'mega-card-disclaimer';
        disc.textContent = disclaimer;
        wrap.append(disc);
      }
      cardsWrap.append(wrap);
      return;
    }

    // Column: heading + links
    if (list && texts.length) {
      const col = document.createElement('div');
      col.className = 'mega-column';
      moveInstrumentation(row, col);
      const heading = document.createElement('p');
      heading.className = 'mega-column-heading';
      const [headingText] = texts;
      heading.textContent = headingText;
      col.append(heading);
      list.classList.add('mega-column-links');
      col.append(list);
      columnsWrap.append(col);
      return;
    }

    // Primary links list
    if (list) {
      list.classList.add('mega-primary');
      list.querySelectorAll('a').forEach((a) => a.classList.add('mega-primary-link'));
      moveInstrumentation(row, list);
      main.append(list);
      return;
    }

    // Explore heading link (first link-only content row)
    if (link && !exploreSet) {
      link.classList.add('mega-explore');
      moveInstrumentation(row, link);
      main.prepend(link);
      exploreSet = true;
    }
  });

  if (main.children.length) mega.append(main);
  if (columnsWrap.children.length) mega.append(columnsWrap);
  if (cardsWrap.children.length) mega.append(cardsWrap);

  const root = document.createElement('div');
  root.className = 'nav-panel-inner';
  if (triggerLink) root.append(triggerLink);
  if (mega.children.length) {
    root.append(mega);
    block.classList.add('has-mega');
  }

  block.replaceChildren(root);
}
