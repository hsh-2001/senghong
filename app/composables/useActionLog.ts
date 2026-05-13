export default function useActionLog() {
    const getDeviceInfo = () => {
        const ua = navigator.userAgent;
        let device = 'Unknown';
        if (/mobile/i.test(ua)) {
            device = 'Mobile';
        } else if (/tablet/i.test(ua)) {
            device = 'Tablet';
        } else if (/iPad|Macintosh/i.test(ua) && 'ontouchend' in document) {
            device = 'Tablet';
        } else if (/iPhone/i.test(ua)) {
            device = 'Mobile';
        } else if (/Android/i.test(ua)) {
            device = 'Mobile';
        } else if (/Windows/i.test(ua)) {
            device = 'Desktop';
        } else if (/Macintosh/i.test(ua)) {
            device = 'Desktop';
        }
        return device;
    };

    const logAction = async (action: string) => {
        const device = getDeviceInfo();
        const agent = navigator.userAgent;
        const ip = await $fetch('/api/get-ip');
        await $fetch('/api/log', {
            method: 'POST',
            body: { action, ip, device, agent },
        });
    }

    const getLogs = async () => {
        const response = await $fetch('/api/log');
        return response?.logs || [];
    }

    return { logAction, getLogs };
};