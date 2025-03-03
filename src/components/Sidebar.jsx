import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineMail,
} from "react-icons/ai";
import { BiCodeBlock, BiBriefcase } from "react-icons/bi"; // Icons for Projects and Skills

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? "" : "hidden"; // Toggle scrolling
    };

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const menuItems = [
        { icon: <AiOutlineHome />, label: "Home", onClick: () => scrollToSection("home") },
        { icon: <BiBriefcase />, label: "Projects", onClick: () => scrollToSection("project") },
        { icon: <BiCodeBlock />, label: "Skills", onClick: () => scrollToSection("skill") },
        { icon: <AiOutlineMail />, label: "Contact", onClick: () => scrollToSection("contact") },
    ];

    return (
        <div className="z-50">
            {/* Toggle Button */}
            <button
                className="fixed top-20 right-6 flex items-center justify-center w-10 h-10 bg-primaryLight-500 dark:bg-primaryDark-500 text-white rounded shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50 focus:outline-none"
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
            >
                {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-20 right-1 h-fit w-30 bg-[#f9fafb] text-[#374151] dark:bg-[#1f2937] dark:text-[#E5E7EB] rounded-xl shadow-xl 
                transform ${isOpen ? "translate-x-0 mr-5" : "translate-x-full"}
                transition-transform duration-500 ease-in-out`}
            >
                <nav className="flex flex-col py-4">
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={item.onClick}
                                    className="group flex items-center gap-3 px-2 py-2 hover:bg-[#FEF3C7] dark:hover:bg-gray-500 hover:rounded transition-colors duration-300 w-full text-left"
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-sm">{item.label}</span>
                                </button>

                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
