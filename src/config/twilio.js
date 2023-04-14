import twilio from "twilio"
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

const twilioClient = twilio(accountSid, authToken);

export const whatsappMessage = async(to, body) =>{
    try {
        await twilioClient.messages.create({
            to: to,
            from: phoneNumber,
            body: body
        })
        .then(message => console.log(message.sid))
    } catch (error) {
        console.error(`error sending msg to: ${to}, your msg: ${body}, ${error}`)
    }
}
