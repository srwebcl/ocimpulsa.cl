import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

const emailTemplate = (title: string, content: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header { background-color: #202f43; padding: 30px 20px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px; }
    .header span { color: #CCA43B; font-weight: 700; }
    .content { padding: 30px; }
    .field-row { margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 8px; }
    .label { font-weight: bold; color: #555; display: block; margin-bottom: 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
    .value { font-size: 16px; color: #000; }
    .footer { background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eee; }
    .button { display: inline-block; padding: 12px 24px; background-color: #CCA43B; color: #202f43; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>OC <span>IMPULSA</span></h1>
    </div>
    <div class="content">
      <h2 style="color: #202f43; margin-top: 0;">${title}</h2>
      ${content}
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} OC Impulsa. Todos los derechos reservados.</p>
      <p>www.ocimpulsa.cl</p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, rut, service, message, token } = body;

        // 1. Verify Recaptcha Token
        const verifyResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
            { method: 'POST' }
        );
        const verifyData = await verifyResponse.json();

        if (!verifyData.success || verifyData.score < 0.5) {
            console.error('Recaptcha verification failed:', verifyData);
            return NextResponse.json(
                { error: 'Recaptcha validation failed. Suspicious activity detected.' },
                { status: 400 }
            );
        }

        // 2. Send Notification Email to Team
        const teamHtml = emailTemplate(
            'Nuevo Lead Capturado',
            `
            <div class="field-row"><span class="label">Cliente</span><span class="value">${name}</span></div>
            <div class="field-row"><span class="label">Email</span><span class="value"><a href="mailto:${email}" style="color:#202f43">${email}</a></span></div>
            <div class="field-row"><span class="label">Teléfono</span><span class="value"><a href="tel:${phone}" style="color:#202f43">${phone}</a></span></div>
            <div class="field-row"><span class="label">RUT</span><span class="value">${rut || '-'}</span></div>
            <div class="field-row"><span class="label">Servicio de Interés</span><span class="value" style="color: #CCA43B; font-weight:bold;">${service || 'General'}</span></div>
            <div style="margin-top: 20px;">
                <span class="label">Mensaje</span>
                <p style="background: #f4f4f4; padding: 15px; border-radius: 4px; margin-top: 5px; font-style: italic;">${message || 'Sin mensaje'}</p>
            </div>
            `
        );

        const bccList = service === 'digital' ? ['contacto@srweb.cl'] : [];

        const { error: emailError } = await resend.emails.send({
            from: 'OC Impulsa Web <contacto@ocimpulsa.cl>',
            to: ['contacto@ocimpulsa.cl'],
            cc: ['molivares@ocimpulsa.cl', 'rolivares@ocimpulsa.cl'],
            bcc: bccList,
            subject: `🔥 Lead: ${name} - ${service || 'Consulta'}`,
            html: teamHtml,
        });

        if (emailError) {
            console.error('Error sending team email:', emailError);
            return NextResponse.json(
                { error: 'Error sending notification email.', details: emailError },
                { status: 500 }
            );
        }

        // 3. Send Auto-Reply to Client
        const clientHtml = emailTemplate(
            `¡Hola ${name}!`,
            `
            <p>Hemos recibido tu solicitud correctamente.</p>
            <p>En <strong>OC Impulsa</strong> nos tomamos muy en serio tus necesidades contables y tributarias.</p>
            <p>Uno de nuestros asesores expertos está revisando tus datos y te contactará a la brevedad para coordinar tu diagnóstico.</p>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="https://ocimpulsa.cl" class="button">Volver al Sitio Web</a>
            </div>
            `
        );

        await resend.emails.send({
            from: 'OC Impulsa <contacto@ocimpulsa.cl>',
            to: [email],
            subject: 'Hemos recibido tu solicitud - OC Impulsa',
            html: clientHtml,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error.' },
            { status: 500 }
        );
    }
}
