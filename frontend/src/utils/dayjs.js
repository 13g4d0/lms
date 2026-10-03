import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
import localizedFormat from 'dayjs/esm/plugin/localizedFormat'
import updateLocale from 'dayjs/esm/plugin/updateLocale'
import isToday from 'dayjs/esm/plugin/isToday'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'
import utc from 'dayjs/esm/plugin/utc'
import timezone from 'dayjs/esm/plugin/timezone'
import 'dayjs/esm/locale/ar'
import 'dayjs/esm/locale/he'
import 'dayjs/esm/locale/fa'
import 'dayjs/esm/locale/ur'
import 'dayjs/esm/locale/es'

dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.extend(isToday)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(utc)
dayjs.extend(timezone)

// [taller] Antes el idioma solo se aplicaba a ar/he/fa/ur (y solo con la página de derecha a izquierda): en español,
// «hace 2 horas» salía «2 hours ago». Ahora se aplica el idioma del usuario (o su idioma base: es-MX → es) si dayjs
// lo tiene cargado.
const lang = String(window.lang || '').toLowerCase()
const locale = [lang, lang.split('-')[0]].find((l) => l && dayjs.Ls[l])
if (locale) {
	dayjs.locale(locale)
}

export default dayjs
