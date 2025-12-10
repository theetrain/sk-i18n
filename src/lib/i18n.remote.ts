import { query } from '$app/server'
import * as v from 'valibot'
import { locales } from './locales.server'

// TODO: generate param types
export const t = query(v.string(), (key) => {
  console.log('locales are', locales)
  console.log('key is', key)

  // TODO: sanitize parameter
  const localeString = locales.find((el) => {
    return el.key === key
  })

  // TODO: return user-configured locale, fallback to `en`
  return localeString?.en
})
