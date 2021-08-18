// 提示信息仅在开发环境生效
import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  zh: {
    message: {
      hello: '你好 世界'
    }
  }
}

const i18n = createI18n({
  locale:localStorage.lang || 'zh',
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})


export default i18n