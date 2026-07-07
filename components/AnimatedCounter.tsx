"use client";

import { animate, useMotionValue, useTransform, motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    value: number;
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(count, value, {
            duration: 1.8, 
            ease: [0.16, 1, 0.3, 1], 
        });

        return () => controls.stop();
    }, [value, isInView, count]);

    return (
        <span ref={ref} className="tabular-nums">
            <motion.span>{rounded}</motion.span>
        </span>
    );
}
