import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Log environment variables (without exposing the full API key)
    console.log('Environment check:', {
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 7),
      fromEmail: process.env.RESEND_FROM_EMAIL,
      toEmail: process.env.RESEND_TO_EMAIL,
    })

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 },
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 },
      )
    }

    console.log('Attempting to send email via Resend...')

    // Send email using Resend
    const emailData = {
      from:
        process.env.RESEND_FROM_EMAIL ||
        'MSeller Contact <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'your-email@example.com',
      replyTo: email,
      subject: `New Contact Form: ${name}${company ? ` from ${company}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
              .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1f2937; }
              .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 3px; }
              .message { white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${
                  company
                    ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
                `
                    : ''
                }
                ${
                  phone
                    ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                `
                    : ''
                }
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value message">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    const result = await resend.emails.send(emailData)

    console.log('Resend API response:', result)

    if (result.error) {
      console.error('Resend API error:', result.error)
      return NextResponse.json(
        { error: `Failed to send email: ${result.error.message}` },
        { status: 500 },
      )
    }

    console.log('Email sent successfully:', result.data)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
        data: result.data,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 },
    )
  }
}
