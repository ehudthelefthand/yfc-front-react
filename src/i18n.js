import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    th: {
        translation: {
            givePage: {
                form: {
                    amount: 'จำนวนเงิน'
                }
            }
        }
    },
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'th',
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n