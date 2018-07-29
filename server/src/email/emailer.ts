import * as nodemailer from 'nodemailer'

export class Emailer {
    
    static fromEmail = 'XXXXXX@XXXXX.XXX';
    static fromName = 'XXXXX';


    static welcomeEmail(email: string, username: string, emailVerifyToken: string) {
        console.log('Sending welcome email to ' + email)

        const mailData = {
            to: email,
            from: Emailer.fromEmail,
            subject: 'Welcome to TS-Node-Starter',
            html: "<p>Welcome to TS-Node-Starter.  To finish registration please click or paste this link into your browser to complete the process. </p>" +
                  "<p><a href='http://localhost:3000/api/verify/" + emailVerifyToken + "'>http://localhost:3000/api/verify/" + emailVerifyToken + "</a> </p>"
        };

        Emailer.send(mailData)
    }





    static forgotPasswordRequestEmail(email: string, passwordResetToken: string) {
        console.log('Sending reset password email to ' + email)

        const mailData = {
            to: email,
            from: Emailer.fromEmail,
            subject: 'Reset your TS-Node-Starter password',
            html: "<p>We have received your request to reset your password. Please click the link below to complete the reset:</p>" +
                  "<p><a href='http://localhost:3000/api/reset/" + passwordResetToken + "'>http://localhost:3000/api/reset/" + passwordResetToken + "</a> </p>"
        };

        Emailer.send(mailData)
    }





    static passwordResetSuccessEmail(email: string) {
        console.log('Sending reset password email to ' + email)

        const mailData = {
            to: email,
            from: Emailer.fromEmail,
            subject: 'Your TS-Node-Starter password has been reset.',
            html: "<p>The password for your account has been successfully reset.  If you didn’t make this change or if you believe an unauthorized person has accessed your account, go to TS-Node-Starter to reset your password immediately.</p>" +
                  "<br><p>If you need additional help, contact TS-Node-Starter support.</p>" + 
                  "<br><br><p>TS-Node-Starter Support</p>"
        };

        Emailer.send(mailData)
    }




    static send(mailData: any) {
        let smtpConfig = {
            service: 'gmail',
            secure: false,
            auth: {
                user: 'XXXXXX@XXXXX.XXX',
                pass: 'XXXXXX'
            }
        };

        let transporter = nodemailer.createTransport(smtpConfig)

        transporter.sendMail(mailData)
    }
}
