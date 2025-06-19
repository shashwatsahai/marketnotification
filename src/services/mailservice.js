const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'helene.botsford94@ethereal.email',
        pass: 'kFE9tQJnDWCRkHvHeF'
    }
});

async function SendMail(data){
    try{
        const info = await transporter.sendMail({
            from: '"helene botsford94" <helene.botsford94@ethereal.email>',
            to: "ssahai97@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?", // plain‑text body
            html: data
        });
        console.log("Message sent:", info.messageId);
    } catch(e) {
        console.error("ERROR::SendMail",e);
    }  
}

module.exports = SendMail;