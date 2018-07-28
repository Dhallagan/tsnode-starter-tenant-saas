export class Emailer {
    static fromEmail = 'admin@starter.io';
    static fromName = 'ADMIN';

    static welcomeEmail(email: string, username: string, emailVerifyCode: string) {
        console.log('Sending email to ' + email)

    }
}
