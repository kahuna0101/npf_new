"use server"

import nodemailer from "nodemailer"

export async function SendContactFormMail(data:any) {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${data.firstName} ${data.lastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${data.subject}`,
      text: `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.number}

Message:
${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);

   
    return {
        success: true,
        message: "Message sent successfully!"
    }
    } catch (error) {
       return {
        success: false,
        error: "error occured"
    }  
    }
}

export async function SendNewsletterMail(data:any) {
    try {

      const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"NEW SUBSCRIBER" <${process.env.EMAIL_USER}>`, 
      to: process.env.EMAIL_TO,
      subject: `New Newsletter Form Submission:`,
      text: `
        Email: ${data.email}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
        success: true,
        message: "Message sent successfully!"
    }
    } catch (error) {
       return {
        success: false,
        error: "error occured"
    }  
    }
}