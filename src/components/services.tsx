import Yin from "../images/yin-yang-logo.png"
import Stab from "../images/stab-des-asklepios.png"

export default function Services() {
    return (
        <div id="services" className="bg-gray-100 py-16 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="container mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-8">Unsere
                    Leistungen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-600"><h3
                            className="text-2xl font-bold  text-center">Schulmedizin</h3>

                            <div className="flex items-center justify-center py-3">
                                <img className="h-12 w-12" src={Stab} alt="Asklepsios Stab"/>
                            </div>

                            <p className={"italic text-sm px-1 text-center"}>"Die wissenschaftlich fundierte Heilkunde,
                                die
                                moderne Diagnostik und bewährte Therapien vereint."</p>


                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-600">
                            <h3 className="text-2xl font-bold  text-center">Komplementärmedizin</h3>
                            <div className="flex items-center justify-center py-3">
                                <img className="h-12 w-12" src={Yin} alt="Yin Yang Logo"/>
                            </div>
                            <p className={"italic text-sm px-1 text-center"}>"Natürliche Heilmethoden als Ergänzung zur
                                Schulmedizin für ganzheitliches Wohlbefinden."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

