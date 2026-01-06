import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

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
        const { error: emailError } = await resend.emails.send({
            from: 'OC Impulsa Web <contacto@ocimpulsa.cl>',
            to: ['contacto@ocimpulsa.cl'],
            cc: ['molivares@ocimpulsa.cl', 'rolivares@ocimpulsa.cl'],
            subject: `Nuevo Lead: ${name} - ${service || 'Consulta General'}`,
            html: `
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>RUT:</strong> ${rut || 'No especificado'}</p>
        <p><strong>Servicio de interés:</strong> ${service || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message || 'Sin mensaje'}</p>
        <br />
        <p><small>Enviado desde el formulario del Hero Home (Validado por Google Recaptcha v3)</small></p>
      `,
        });

        if (emailError) {
            console.error('Error sending team email:', emailError);
            return NextResponse.json(
                { error: 'Error sending notification email.' },
                { status: 500 }
            );
        }

        // 3. Send Auto-Reply to Client
        await resend.emails.send({
            from: 'OC Impulsa <contacto@ocimpulsa.cl>',
            to: [email],
            subject: 'Hemos recibido tu solicitud - OC Impulsa',
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Hola ${name},</h2>
          <p>Gracias por contactarnos. Hemos recibido tu solicitud correctamente.</p>
          <p>Nuestro equipo de expertos revisará tus requerimientos y te contactará a la brevedad posible para agendar tu diagnóstico.</p>
          <br />
          <p>Saludos cordiales,</p>
          <p><strong>Equipo OC Impulsa</strong></p>
          <p><a href="https://ocimpulsa.cl">www.ocimpulsa.cl</a></p>
        </div>
      `,
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
