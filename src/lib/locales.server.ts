import { csv2json } from 'json-2-csv'
import fs from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// TODO: generate JSON via Vite plugin and generate types

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const path = resolve(__dirname, '../../locales.csv')
const csv = fs.readFileSync(path).toString('utf-8')
const json = csv2json(csv, { trimHeaderFields: true }) as {
  key: string
  en: string
  zh: string
}[]

export const locales = json
