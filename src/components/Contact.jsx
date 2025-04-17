import React, { useState } from "react";
import emailjs from "emailjs-com";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [sending, setSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");
    const { width, height } = useWindowSize();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                () => {
                    setSending(false);
                    setIsSent(true);
                    setError("");
                    setFormData({ name: "", email: "", message: "" });

                    setTimeout(() => setIsSent(false), 5000);
                },
                (err) => {
                    setError("Failed to send. Try again.");
                    console.error(err);
                    setSending(false);
                }
            );
    };

    return (
        <div
            id="contact"
            className="flex justify-center items-center min-h-screen p-6 bg-transparent relative"
        >
            {isSent && <Confetti width={width} height={height} numberOfPieces={200} />}

            <div className="w-full max-w-lg bg-backgroundLight-500 text-textLight-500 dark:bg-gray-900 dark:text-textDark-500 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Contact Me 📬
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-3 mt-1 border rounded-lg bg-backgroundLight-500 text-textLight-500 dark:bg-transparent dark:text-textDark-500 focus:ring-2 focus:ring-primaryLight-500 dark:focus:ring-primaryDark-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-3 mt-1 border rounded-lg bg-backgroundLight-500 text-textLight-500 dark:bg-transparent dark:text-textDark-500 focus:ring-2 focus:ring-primaryLight-500 dark:focus:ring-primaryDark-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Say something nice! 😊"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-5 py-3 mt-1 border rounded-lg bg-backgroundLight-500 text-textLight-500 dark:bg-transparent dark:text-textDark-500 focus:ring-2 focus:ring-primaryLight-500 dark:focus:ring-primaryDark-500 outline-none"
                            rows="5"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-primaryLight-500 text-white font-semibold rounded-lg shadow-md hover:brightness-110 transition-all duration-200 ease-in-out flex items-center justify-center"
                        disabled={sending}
                    >
                        {sending ? (
                            <span className="animate-spin mr-2">⏳</span>
                        ) : (
                            "Send Message 🚀"
                        )}
                    </button>

                    {isSent && (
                        <p className="text-green-500 text-center mt-3">
                            Message sent successfully! ✅
                        </p>
                    )}
                    {error && (
                        <p className="text-red-500 text-center mt-3">{error}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
