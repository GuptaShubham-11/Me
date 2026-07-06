'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Signature = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

    return (
        <div
            ref={ref}
            className="flex w-full items-center justify-center"
        >
            <motion.svg
                viewBox="0 0 500 120"
                className="
w-full
max-w-md
sm:max-w-lg
md:max-w-xl
h-auto
aspect-5/2
"                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M40 110C120 10 70 0 55 30 40 65 110 60 90 95 75 120 30 110 55 70 30 110 75 120 90 95 110 60 131-7 107 12 104 70 110 60 100 109 104 70 132 47 136 111 165 86 153 28 150 94 152 129 192 96 189 66 177 154 198 90 208 64 234 15 194-34 202 108 239 128 252 72 215 76 227 111 288-5 255 10 250 90 253 48 245 111 250 50 288 61 282 112 384 71 291 49 295 101 303 132 342 116 336 75 322 148 359 116 364 69 367 36 367 36 359 116 369 22 405 85 395 114 395 11 438 85 428 123S397 102 445 94"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="-rotate-2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                        isInView
                            ? { pathLength: 1, opacity: 1 }
                            : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                        pathLength: {
                            duration: 8,
                            ease: "easeInOut",
                        },
                        opacity: {
                            duration: 0.5,
                        },
                    }}
                />
            </motion.svg>
        </div>
    );
};