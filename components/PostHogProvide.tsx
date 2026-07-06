"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "@posthog/react";

if (
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
) {
    posthog.init(
        process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,
        {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            capture_pageview: true,
            capture_pageleave: true,
            person_profiles: "identified_only",
        }
    );
}

export function CustomPostHogProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PostHogProvider client={posthog}>
            {children}
        </PostHogProvider>
    );
}