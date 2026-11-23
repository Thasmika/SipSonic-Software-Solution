// Every internal link goes through `to()` so it works both locally (/) and on GitHub Pages (/SipSonic-Software-Solution/).
export const to = (path = '') => import.meta.env.BASE_URL + path.replace(/^\//, '')

// Which page is this? Set on <div id="root" data-page="..."> by scripts/pages.mjs.
const root = typeof document !== 'undefined' ? document.getElementById('root') : null
export const CURRENT_PAGE = root?.dataset.page || 'home'
export const CURRENT_SLUG = root?.dataset.slug || ''
