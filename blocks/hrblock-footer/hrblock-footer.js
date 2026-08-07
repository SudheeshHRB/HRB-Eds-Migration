/**
 * H&R Block Footer is a section (resourceType section/v1/section), not a loadable block.
 * Theme CSS lives in styles/styles.css (.section.site-footer / :has(.footer-*)).
 * This file is intentionally empty so EDS does not 404 if the path is requested.
 */
export default function decorate() {
  // no-op: section styles come from section metadata + global CSS
}
