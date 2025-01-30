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

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");
    const { width, height } = useWindowSize(); // Get screen size for confetti

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                () => {
                    setIsSent(true);
                    setError("");
                    setFormData({ name: "", email: "", message: "" });

                    // Remove confetti effect after 5 seconds
                    setTimeout(() => setIsSent(false), 5000);
                },
                (err) => {
                    setError("Failed to send. Try again.");
                    console.error(err);
                }
            );
    };

    return (
        <div id="contact" className="flex justify-center items-center min-h-screen p-6 bg-transparent relative">
            {isSent && <Confetti width={width} height={height} numberOfPieces={200} />}

            <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 dark:text-white">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your amazing name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:text-white"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 dark:text-white">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:text-white"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700 dark:text-white">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Don't be hesitate, let's chat 😊!"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:text-white"
                            rows="4"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                    >
                        Just Hit! 🚀
                    </button>

                    {isSent && <p className="text-green-500 mt-2">Message sent successfully! ✅</p>}
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
