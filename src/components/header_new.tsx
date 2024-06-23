import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import Logo from "../images/Logo.png";

export default function HeaderNew() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="dark:bg-gray-800 text-white fixed w-full bg-white rounded-b-lg z-10">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <div className="flex items-center space-x-5">
                    <div className="text-xl font-bold"><img src={Logo} width={"50px"} alt={"Logo"} /></div>
                    <div className="text-xl font-bold text-black dark:text-white">Praxis Dr. Kaestle</div>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black dark:text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <li>
                        <ScrollLink to="hero" smooth={true} duration={500}
                                    className="cursor-pointer hover:text-gray-400 shadow text-black px-3 py-2 rounded-2xl dark:text-white dark:bg-gray-700">
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="about" smooth={true} duration={500} offset={-70}
                                    className="cursor-pointer hover:text-gray-400 shadow text-black px-3 py-2 rounded-2xl dark:text-white dark:bg-gray-700">
                            Über uns
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="services" smooth={true} duration={500} offset={-70}
                                    className="cursor-pointer hover:text-gray-400 shadow text-black px-3 py-2 rounded-2xl dark:text-white dark:bg-gray-700">
                            Leistungen
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="meetings" smooth={true} duration={500} offset={-70}
                                    className="cursor-pointer hover:text-gray-400 shadow text-black px-3 py-2 rounded-2xl dark:text-white dark:bg-gray-700">
                            Termine
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-70}
                                    className="cursor-pointer hover:text-gray-400 shadow text-black px-3 py-2 rounded-2xl dark:text-white dark:bg-gray-700">
                            Kontakt
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
