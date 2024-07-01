import React from 'react';
import Portrait1 from '../images/portraits/johanneskaestle.png'; //Pfad zu Ihrem Porträtbild
import Portrait2 from '../images/Logo.png'; //Pfad zu Ihrem Porträtbild
import Portrait3 from '../images/Logo.png'; //Pfad zu Ihrem Porträtbild

export default function History() {
    return (
        <div id="history" className="bg-gray-100 py-16 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Unsere Historie</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-600">
                        <h3 className="text-2xl font-bold text-center">Dr. Johannes Kaestle</h3>
                        <div className="flex items-center justify-center py-3">
                            <img src={Portrait1} alt="Portrait 1" className="w-12 h-12 rounded-full object-cover" />
                        </div>
                        <p className="italic text-sm px-1 text-center">Amtsarzt in Wangen von 19xx bis 1920</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-600">
                        <h3 className="text-2xl font-bold text-center">Dr. Hans Kaestle</h3>
                        <div className="flex items-center justify-center py-3">
                            <img src={Portrait2} alt="Portrait 2" className="w-12 h-12 rounded-full object-cover" />
                        </div>
                        <p className="italic text-sm px-1 text-center">"Natürliche Heilmethoden als Ergänzung zur Schulmedizin für ganzheitliches Wohlbefinden."</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-slate-600">
                        <h3 className="text-2xl font-bold text-center">Dr. Hans Joachim Kaestle</h3>
                        <div className="flex items-center justify-center py-3">
                            <img src={Portrait3} alt="Portrait 3" className="w-12 h-12 rounded-full object-cover" />
                        </div>
                        <p className="italic text-sm px-1 text-center">Selbstständiger Allgemeinmediziner seit 1993</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
