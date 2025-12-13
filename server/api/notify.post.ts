  import { UAParser } from 'ua-parser-js';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const ua = getHeader(event, 'user-agent') || '';
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'Unknown';

  const parser = new UAParser(ua);
  const result = parser.getResult();

  const deviceType = result.device.type || 'Desktop';
  const deviceModel = result.device.model || 'Unknown';
  const os = `${result.os.name} ${result.os.version}`;
  const browser = `${result.browser.name} ${result.browser.version}`;

  const message = `
🆕 *New Access*
📦 Device: ${deviceType}
📱 Model: ${deviceModel}
💻 OS: ${os}
🌐 Browser: ${browser}
🌍 IP: ${ip}
`;

  await $fetch(`https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`, {
    method: 'POST',
    body: {
      chat_id: config.telegramChatId,
      text: message,
      parse_mode: 'Markdown',
    },
  });

  return { ok: true };
});
