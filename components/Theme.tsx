"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { usePostHog } from "posthog-js/react";

export function ThemeToggle() {
  const posthog = usePostHog();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
        posthog.capture("theme_changed", {
          theme: resolvedTheme,
        });
      }}
      className="relative overflow-hidden text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
    >
      <motion.span
        key={resolvedTheme}
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -12, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="block"
      >
        {isDark ? "Light" : "Dark"}
      </motion.span>
    </button>
  );
}