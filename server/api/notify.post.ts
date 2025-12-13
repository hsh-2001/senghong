export default defineCachedEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const telegramBotToken = config.telegramBotToken;
  const telegramChatId = config.telegramChatId;

  // Get request headers
  const userAgent = getHeader(event, 'user-agent') || 'Unknown';
  const ip =
    getHeader(event, 'x-forwarded-for') ||
    event.node.req.socket.remoteAddress ||
    'Unknown';

  const message = `
🆕 *New Access*
📱 *User-Agent:* ${userAgent}
🌍 *IP:* ${ip}
`;

  try {
    await $fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'Markdown',
      },
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message',
    });
  }
});
