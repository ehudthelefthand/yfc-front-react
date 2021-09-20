import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    th: {
        translation: {
            appHeader: {
                give: 'เงินถวาย'
            },
            givePage: {
                form: {
                    amount: 'จำนวนเงิน',
                    baht: '฿',
                    paymentType: 'ช่องทางการถวาย',
                    transfer: 'โอนเงิน',
                    cheque: 'เช็ค',
                }
            },
            supporterPage: {
                from: {
                    addfiles: 'เพิ่มไฟล์',
                }
            },
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