import { Link as ScrollLink } from "react-scroll";
import bgimage from "../images/Wangen_Hero.jpg"

export default function Hero() {
    return (
        <div id="hero" className="bg-cover bg-center h-screen" style={{backgroundImage:`url(${bgimage})`}}>
            <div className="bg-black dark:bg-opacity-85 h-full flex items-center justify-center bg-opacity-50">
                <div className="text-center text-white bg-black bg-opacity-75 py-10 w-full dark:bg-opacity-5">
                    <h1 className="text-5xl font-bold mb-4">Willkommen in der Praxis  <br/>Dr. Kaestle</h1>
                    <p className="text-xl mb-8">Ihr Hausarzt in Wangen </p>
                    <ScrollLink className="bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-700 transition" to={"about"} smooth={true} duration={500}> Über uns</ScrollLink>
                </div>
            </div>
        </div>
    );
};

