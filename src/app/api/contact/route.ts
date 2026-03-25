import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    // Backend validation
    if (!name || !/^[A-Za-z\s]+$/.test(name)) {
      return NextResponse.json({ error: 'Name must contain only alphabetic characters and spaces.' }, { status: 400 });
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      return NextResponse.json({ error: 'Phone number must be exactly 10 digits.' }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    // Configure Nodemailer transporter based on .env
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER || 'smtp.gmail.com',
      port: parseInt(process.env.MAIL_PORT || '587'),
      secure: process.env.MAIL_USE_TLS === 'true', 
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
          rejectUnauthorized: false
      }
    });

    const subjectLine = service ? `New Lead: ${name} - ${service}` : `New Lead: ${name} - Consultation Request`;

    // Theme-matched Email Template
    const htmlTemplate = `
      <div style="font-family: 'Arial', sans-serif; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h2 style="color: #27187E; margin: 0; padding-bottom: 12px; border-bottom: 2px solid #758BFD; font-size: 24px;">New Consultation Request</h2>
        </div>
        
        <div style="padding: 15px 0; font-size: 16px; line-height: 1.6;">
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #27187E; text-decoration: none;">${phone}</a></p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${email ? `<a href="mailto:${email}" style="color: #27187E; text-decoration: none;">${email}</a>` : '<span style="color: #6b7280;">Not provided</span>'}</p>
          <p style="margin: 8px 0;"><strong>Service Requested:</strong> ${service || '<span style="color: #6b7280;">General Inquiry</span>'}</p>
        </div>

        <h3 style="color: #27187E; margin-top: 30px; margin-bottom: 15px; font-size: 18px;">Message:</h3>
        <div style="background-color: #F7F7FF; padding: 20px; border-radius: 8px; border-left: 4px solid #AEB8FE;">
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #374151;">${message || '<span style="color: #6b7280; font-style: italic;">No additional message provided.</span>'}</p>
        </div>

        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
          <p style="margin: 0;">This email was automatically generated from the Shree Pragya Insurance website contact form.</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Shree Pragya Portfolio" <${process.env.MAIL_USERNAME}>`,
      to: process.env.MAIL_USERNAME as string,
      replyTo: email || undefined,
      subject: subjectLine,
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send communication. Please check your SMTP settings and try again.' }, { status: 500 });
  }
}
