import { useState, useEffect } from 'react';
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
} from 'react-icons/ai';
import { BiCodeBlock, BiBriefcase } from 'react-icons/bi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('body')) {
        toggleSidebar();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggleSidebar]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      icon: <AiOutlineHome />,
      label: 'Home',
      onClick: () => scrollToSection('home'),
    },
    {
      icon: <BiBriefcase />,
      label: 'Projects',
      onClick: () => scrollToSection('project'),
    },
    {
      icon: <BiCodeBlock />,
      label: 'Skills',
      onClick: () => scrollToSection('skill'),
    },
    {
      icon: <AiOutlineMail />,
      label: 'Contact',
      onClick: () => scrollToSection('contact'),
    },
  ];

  return (
    <div className="z-50">
      {/* Toggle Button */}
      <button
        className="fixed cursor-pointer top-20 right-6 flex items-center justify-center w-10 h-10 bg-accentLight text-textLight dark:text-textDark rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50 focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-20 right-20 h-fit w-40 bg-[#F2F3F4] text-[#374151] dark:bg-[#1B1B1B] dark:text-[#E5E7EB] rounded-xl shadow-xl 
                transform ${isOpen ? 'translate-x-0' : 'translate-x-60'}
                transition-transform duration-700  ease-in-out`}
      >
        <nav className="flex flex-col py-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={item.onClick}
                  className="group flex items-center cursor-pointer gap-3 px-4 py-3 hover:bg-[#E9FFDB] dark:hover:bg-[#2F4F4F]  transition-colors duration-300 w-full text-left"
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
