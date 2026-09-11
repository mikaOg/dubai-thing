import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const full_name = body.full_name;
    const email = body.email;
    const message = body.message;

    if (!full_name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        from: 'Ethio Contact <onboarding@resend.dev>',
        to: ['thomasn4jackson08@gmail.com'],
        reply_to: email,
        subject: 'New message from ' + full_name,
        html:
          '<div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">' +
          '<h2 style="color: #1a1512;">New contact message</h2>' +
          '<p><strong>From:</strong> ' +
          full_name +
          '</p>' +
          '<p><strong>Email:</strong> <a href="mailto:' +
          email +
          '">' +
          email +
          '</a></p>' +
          '<hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />' +
          '<p style="white-space: pre-wrap;">' +
          message +
          '</p>' +
          '<hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />' +
          '<p style="font-size: 12px; color: #666;">Reply directly to this email to respond to ' +
          full_name +
          '.</p>' +
          '</div>',
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Resend error:', errText);
      return NextResponse.json(
        { error: 'Failed to send', detail: errText },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
