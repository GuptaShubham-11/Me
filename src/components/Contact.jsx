import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div id="contact" className="flex justify-center items-center min-h-screen p-6 sm:p-8 lg:p-12 bg-transparent">
            <motion.div
                className="w-full max-w-lg sm:max-w-md bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white text-center mb-6 sm:mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Me
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                        <motion.label
                            htmlFor="name"
                            className="block text-gray-700 dark:text-white text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Full Name
                        </motion.label>
                        <motion.input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 sm:py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            placeholder="Your Name"
                            required
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 250 }}
                        />
                    </div>

                    <div>
                        <motion.label
                            htmlFor="email"
                            className="block text-gray-700 dark:text-white text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Email Address
                        </motion.label>
                        <motion.input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 sm:py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            placeholder="Your Email"
                            required
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 250 }}
                        />
                    </div>

                    <div>
                        <motion.label
                            htmlFor="message"
                            className="block text-gray-700 dark:text-white text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Message
                        </motion.label>
                        <motion.textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 sm:py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            placeholder="Don't worry, just say 😊."
                            rows="4"
                            required
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 250 }}
                        />
                    </div>

                    <motion.button
                        type="submit"
                        className="w-full py-2 sm:py-3 px-6 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 250 }}
                    >
                        Just Hit! 🚀
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
