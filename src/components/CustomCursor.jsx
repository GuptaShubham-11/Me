import { useState, useEffect } from "react";

const EmojiCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const [emoji, setEmoji] = useState("🖱️");

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
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
        <div
            className="fixed text-3xl pointer-events-none z-90"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%)`,
                transition: "transform 0.1s ease-out",
                scale: hovering ? 1.5 : 1,
            }}
        >
            {emoji}
        </div>
    );
};

export default EmojiCursor;
