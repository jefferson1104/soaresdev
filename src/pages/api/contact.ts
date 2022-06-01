import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, lastname, email, phone, message } = req.body.values

    const mailData = {
      from: process.env.GMAIL_ADDRESS,
      to: 'jefferson1104junior@gmail.com',
      subject: `contato ${name} ${lastname}`,
      text:
        message +
        ' | Nome: ' +
        email +
        lastname +
        ' | Email: ' +
        email +
        ' | Telefone: ' +
        phone,
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;" >`,
        `<h1>CONTATO DO SITE SOARESDEV</h1>`,
        `<p><strong>Nome:</strong> ${name} ${lastname}</p>`,
        `<p><strong>Telefone:</strong> ${phone}</p>`,
        `<p><strong>Email:</strong> ${email}</p>`,
        `<p><strong>Mensagem:</strong> ${message}</p>`,
        `</div>`
      ].join('\n')
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_ADDRESS,
        clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
        clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
        accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN,
        expires: Number(process.env.GMAIL_OAUTH_TOKEN_EXPIRE)
      },
      secure: true
    })

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err)
        res.status(200).json({ received: false })
      } else {
        console.log(info)
        res.status(200).json({ received: true })
      }
    })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}
