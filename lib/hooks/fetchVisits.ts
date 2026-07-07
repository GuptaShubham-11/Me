export async function fetchMetric({
    POSTHOG_HOST,
    PROJECT_ID,
    API_KEY
}: {
    POSTHOG_HOST: string;
    PROJECT_ID: string;
    API_KEY: string;
}): Promise<number> {

    const res = await fetch(
        `${POSTHOG_HOST}/api/projects/${PROJECT_ID}/endpoints/visits/run`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            }
        }
    );

    const data = await res.json();
    return data?.results?.[0]?.[0] ?? 0;
}