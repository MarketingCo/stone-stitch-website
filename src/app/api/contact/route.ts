import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// We initialize Resend with a dummy key, in a real app this should be process.env.RESEND_API_KEY
// The user will need to add this to their Vercel environment variables.
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Simulating successful email send.");
      return NextResponse.json({ success: true, simulated: true });
    }

    const { data, error } = await resend.emails.send({
      from: 'Stone-Stitch Website <onboarding@resend.dev>',
      to: ['info@stone-stitch.co.uk'],
      subject: `New Lead from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
