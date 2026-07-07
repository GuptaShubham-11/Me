import { useQuery } from "@tanstack/react-query";

const analytics = async () => {
    const response = await fetch("/api/analytics");
    return response.json();
}

export function useAnalytics(options = {}) {
    return useQuery({
        queryKey: ["analytics"],
        queryFn: analytics,
        refetchInterval: 60_000,
        staleTime: 30_000,
        refetchOnWindowFocus: true,
        ...options,
    });
}  