import { createI18n } from 'vue-i18n';
import zh from '@/locales/zh-TW';
import en from '@/locales/en-US';

const i18n = createI18n({
  legacy: false, // 要把 legacy 設為 false，才可以使用 Composition API
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zh,
    'en-US': en
  }
});

export default i18n;
