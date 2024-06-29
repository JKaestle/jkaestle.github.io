import Yin from "../images/yin-yang-logo.png"

export default function Services() {
    return (
        <div id="services" className="bg-gray-100 py-16 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Unsere Leistungen</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-600">
                        <h3 className="text-2xl font-bold mb-4 text-center">Schulmedizin</h3>
                        <p className={"italic text-sm px-1 text-center"}>"Die wissenschaftlich fundierte Heilkunde, die moderne Diagnostik und bewährte Therapien vereint."</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-600">
                        <h3 className="text-2xl font-bold mb-4 text-center">Komplementärmedizin</h3>
                        <p className={"italic text-sm px-1 text-center"}>"Natürliche Heilmethoden als Ergänzung zur Schulmedizin für ganzheitliches Wohlbefinden."</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-600">
                        <h3 className="text-2xl font-bold mb-4 text-center">Akupunktur</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

