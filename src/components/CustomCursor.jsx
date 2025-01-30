import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [hovering, setHovering] = useState(false);
    const [emoji, setEmoji] = useState("🖱️");

    // Use MotionValue for smoother tracking
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth spring animation
    const smoothX = useSpring(cursorX, { stiffness: 150, damping: 20 });
    const smoothY = useSpring(cursorY, { stiffness: 150, damping: 20 });

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = (e) => {
            setHovering(true);
            if (e.target.tagName === "A") setEmoji("👀");
            else if (e.target.tagName === "BUTTON") setEmoji("👆");
            else if (e.target.tagName === "INPUT") setEmoji("⌨️");
            else setEmoji("🔗");
        };

        const handleMouseLeave = () => {
            setHovering(false);
            setEmoji("🖱️");
        };

        window.addEventListener("mousemove", moveCursor);
        document.querySelectorAll("button, a, input").forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.querySelectorAll("button, a, input").forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <motion.div
            className="fixed flex items-center justify-center text-2xl md:text-3xl 
                       pointer-events-none z-60"
            style={{
                x: smoothX,
                y: smoothY,
                transform: "translate(-50%, -50%)",
            }}
            animate={{
                scale: hovering ? 1.2 : 1, // Reduced scale for simplicity
                transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
        >
            {emoji}
        </motion.div>
    );
};

export default CustomCursor;
