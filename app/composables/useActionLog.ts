type GeoPayload = {
    latitude: number
    longitude: number
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

    const getLogs = async () => {
        const response = await $fetch<ActionLogResponse>('/api/log');
        return response?.logs || [];
    }

    return { logAction, getLogs };
};
