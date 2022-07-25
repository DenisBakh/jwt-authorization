const nodemailer = require('nodemailer')

//При проблемах с отправкой писем:
//https://ru.stackoverflow.com/questions/1233265/error-self-signed-certificate-in-certificate-chain-%D0%BF%D1%80%D0%B8-%D0%BE%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B5-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC
//https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer


class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href=${link}>${link}</a>
                    </div>
                `
        })
    }
}

module.exports = new MailService()