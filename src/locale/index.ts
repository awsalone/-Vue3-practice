// 提示信息仅在开发环境生效
import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'hello world',
      system:{
        password:'enter password'
      }
    }
  },
  zh: {
    message: {
      hello: '你好 世界',
      system:{
        password:'输入密码'
      }
    }
  }
}

const i18n = createI18n({
  locale:localStorage.lang || 'zh',
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})


export default i18n