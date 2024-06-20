import { Link as ScrollLink } from "react-scroll";
import Logo from "../images/Logo.png"
export default function HeaderNew() {
    return (
        <header className="dark:bg-gray-800 text-white fixed w-full bg-white rounded-b-lg">
            <nav className="container mx-auto p-4 flex justify-between items-center sticky">
                <div className={"flex items-center space-x-5"}>
                    <div className="text-xl font-bold"><img src={Logo} width={"50px"} alt={"Logo"}/></div>
                    <div className="text-xl font-bold text-black dark:text-white">Praxis Dr. Kaestle</div>
                </div>
                <ul className="flex space-x-4">
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
};

