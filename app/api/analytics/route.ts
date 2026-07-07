import { fetchMetric } from "@/lib/hooks/fetchVisits";
import { NextResponse } from "next/server";

const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
const API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;


export async function GET() {

    try {

        if (!POSTHOG_HOST || !PROJECT_ID || !API_KEY) {
            return NextResponse.json(
                { error: "Missing required environment variables" },
                { status: 500 }
            );
        }

        const visits = await fetchMetric({ POSTHOG_HOST, PROJECT_ID, API_KEY });

        return NextResponse.json(
            {
                visits,
                status: 200
            },
        );
    } catch (err) {
        console.error("[analytics] query error:", err);
        return NextResponse.json(
            { error: "Failed to fetch analytics" },
            { status: 500 }
        );
    }
}  