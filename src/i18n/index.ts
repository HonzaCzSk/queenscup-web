import { cs } from './cs'
import { en } from './en'
import { pl } from './pl'

export const languages = { cs, en, pl }
export type Lang = keyof typeof languages

export function getLang(lang: string): Lang {
  if (lang in languages) return lang as Lang
  return 'cs'
}

export function t(lang: Lang) {
  return languages[lang]
}