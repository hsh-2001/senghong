export const sendTelegramMessage = async (message: string) => {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
        console.error('Telegram bot token or chat ID is not set')
        return
    }

    try {
        await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            }
        )
    } catch (err) {
        console.error('Failed to send Telegram message:', err)
    } 
}