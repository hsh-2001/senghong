import { sendTelegramMessage } from '../services/telegramService';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate required fields
  if (!body.name || !body.email || !body.subject || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    });
  }
  const telegramMessage = `
🔔 *New Contact Form Submission*

👤 *Name:* ${body.name}
📧 *Email:* ${body.email}
📌 *Subject:* ${body.subject}

💬 *Message:*
${body.message}

---
_Sent from Portfolio Contact Form_
`;

  try {
    await sendTelegramMessage(telegramMessage);
    return {
      success: true,
      message: 'Message sent successfully',
    };
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message',
    });
  }
});
