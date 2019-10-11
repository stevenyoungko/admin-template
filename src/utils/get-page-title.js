import defaultSettings from '@/settings'

const title = defaultSettings.title || 'PS-admin'

export default function getPageTitle(pageTitle) {
  // if (pageTitle) {
  //   return `${pageTitle} - ${title}`
  // }
  return `${title}`
}
