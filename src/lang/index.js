import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import zh from '../../lang/zh.json'
import en from '../../lang/en.json'
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  // .use(
  //   resourcesToBackend((language, namespace) => {
  //     console.log('language', language, namespace)
  //     import(`./${language}/${namespace}.json`)
  //   })
  // )
  .init({
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    },
    // lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    saveMissing: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    fallbackLng: 'zh', //默认当前环境的语言
    detection: {
      order: ['querystring', 'navigator', 'localStorage'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'lang',
      lookupSessionStorage: 'lang'
    }
  })
export default i18n
