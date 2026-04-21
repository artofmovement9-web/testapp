import React, { useEffect } from 'react';
import Bio from '../components/Bio';
import About from '../components/About';
import Offerings from '../components/Offerings';
import Sessions from '../components/Sessions';
import Philosophy from '../components/Philosophy';
import Workshops from '../components/Workshops';

const YogaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen font-sans text-muted-black pt-[72px]">
            {/* Yoga Hero */}
            <section className="relative py-24 md:py-32 bg-soft-sage overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-olive/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-olive/5 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
                    <div className="w-10 h-1 bg-olive rounded-full mx-auto mb-8"></div>
                    <h1 className="font-serif text-muted-black text-[2.5rem] md:text-[3.6rem] lg:text-[4.5rem] leading-[1.1] mb-6 tracking-tight">
                        The Art of <span className="italic text-olive">Yoga</span>
                    </h1>
                    <p className="text-muted-black/50 text-lg md:text-xl font-light tracking-[0.3em] uppercase">
                        Breath · Alignment · Mindfulness
                    </p>
                </div>
            </section>

            <main>
                <Bio />
                <About />
                <Offerings />
                <Sessions />
                <Philosophy />
                <Workshops />
            </main>
        </div>
    );
};

export default YogaPage;
// export default YogaPage