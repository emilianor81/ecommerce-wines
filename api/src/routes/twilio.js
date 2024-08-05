require('dotenv').config();
const client = require('twilio')( process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


async function sendMessage(phone, testMessage) {
        try {
        const message = await client.messages.create({
            body: testMessage,
            from: process.env.TWILIO_PHONE_NUMBER, 
            to: phone
        })
        return message;
    } catch (error) {
        console.log(error)
    }
}

module.exports = { sendMessage }