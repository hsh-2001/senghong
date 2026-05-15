type GeoPayload = {
    latitude: number
    longitude: number
    mapUrl: string
    accuracy: number | null
    altitude: number | null
    altitudeAccuracy: number | null
    heading: number | null
    speed: number | null
    timestamp: number
}

type ActionLogResponse = {
    logs?: Record<string, unknown>[]
}

const createGoogleMapUrl = (latitude: number, longitude: number) => {
    return `https://www.google.com/maps?q=${latitude},${longitude}`
}

export default function useActionLog() {
    const getCurrentGeo = () => {
        if (!import.meta.client || !('geolocation' in navigator)) {
            return Promise.resolve(null)
        }

        return new Promise<GeoPayload | null>((resolve) => {
            navigator.geolocation.getCurrentPosition(
                ({ coords, timestamp }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        mapUrl: createGoogleMapUrl(coords.latitude, coords.longitude),
                        accuracy: coords.accuracy ?? null,
                        altitude: coords.altitude ?? null,
                        altitudeAccuracy: coords.altitudeAccuracy ?? null,
                        heading: coords.heading ?? null,
                        speed: coords.speed ?? null,
                        timestamp
                    })
                },
                () => resolve(null),
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 60000
                }
            )
        })
    }

    const logAction = async () => {
        const geo = await getCurrentGeo()

        await $fetch('/api/log', {
            method: 'POST',
            body: { geo },
        });
    }

    const log = ref();
    const getLogs = async () => {
        try {
            const response = await $fetch<ActionLogResponse>('/api/log');
            log.value = response.logs || [];
        } catch (error) {
            console.error('Failed to fetch logs:', error);
        }
    }

    return { logAction, getLogs, log };
};
