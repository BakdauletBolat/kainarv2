import { appConfig } from '@appConfig'
import { createI18n } from 'vue-i18n'
import ru from './messages/ru'
import en from './messages/en'
import kz from './messages/kz';

const messages = {
  en,
  ru,
  kz
}

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('app-locale') || appConfig.defaultLocale.value,
  fallbackLocale: 'en',
  messages,
})
