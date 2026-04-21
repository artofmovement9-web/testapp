import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Import all performance photos ─── */
import daqqat1 from '../assets/offerings/200.jpg';
import daqqat2 from '../assets/offerings/201.jpg';
import daqqat3 from '../assets/offerings/202.jpg';

import labo1 from '../assets/offerings/300.jpg';
import labo2 from '../assets/offerings/301.jpg';
import labo3 from '../assets/offerings/302.jpg';
import labo4 from '../assets/offerings/303.jpg';

import dune400 from '../assets/offerings/400.jpg';
import dune401 from '../assets/offerings/401.jpg';
import dune402 from '../assets/offerings/402.jpg';
import dune403 from '../assets/offerings/403.jpg';
import dune404 from '../assets/offerings/404.jpg';
import dune405 from '../assets/offerings/405.jpg';
import dune406 from '../assets/offerings/406.jpg';
import dune407 from '../assets/offerings/407.jpg';
import dune408 from '../assets/offerings/408.jpg';
import dune409 from '../assets/offerings/409.jpg';
import dune410 from '../assets/offerings/410.jpg';
import dune411 from '../assets/offerings/411.jpg';

import side500 from '../assets/offerings/500.jpg';
import side501 from '../assets/offerings/501.jpg';
import side502 from '../assets/offerings/502.jpg';
import side503 from '../assets/offerings/503.jpg';
import side504 from '../assets/offerings/504.jpg';
import side505 from '../assets/offerings/505.jpg';

import conf600 from '../assets/offerings/600.jpg';
import conf601 from '../assets/offerings/601.jpg';
import conf602 from '../assets/offerings/602.jpg';
import conf603 from '../assets/offerings/603.jpg';
import conf604 from '../assets/offerings/604.jpg';
import conf605 from '../assets/offerings/605.jpg';
import conf606 from '../assets/offerings/606.jpg';

/* ─── Performance data ─── */
const performances = [
    {
        name: "La Conférence des Oiseaux",
        subtitle: "Choreographed by Pierre Lamoureux",
        info: "A poetic journey inspired by the conference of birds",
        country: "France / Tunisia",
        images: [conf600, conf601, conf602, conf603, conf604, conf605, conf606],
    },
    {
        name: "Sidewalk Stories",
        subtitle: "Choreography by Company E",
        info: "Urban narratives told through contemporary movement and expression",
        country: "NYC",
        images: [side500, side501, side502, side503, side504, side505],
    },
    {
        name: "Dune: Fragment Tunisien",
        subtitle: "Choreography by Volca Company",
        info: "An evocative fragment inspired by Tunisian landscapes and movement",
        country: "France",
        images: [dune400, dune401, dune402, dune403, dune404, dune405, dune406, dune407, dune408, dune409, dune410, dune411],
    },
    {
        name: "Laboratoire D.A.N.C.E",
        subtitle: "Yvann Alexandre Company",
        info: "A laboratory of dance exploration and creative expression",
        country: "France",
        images: [labo1, labo2, labo3, labo4],
    },
    {
        name: "Daqqat",
        subtitle: "Choreographed by Christina Towle",
        info: "Brought by Association Hayyou Raqs (Tunisia)",
        country: "France / Tunisia",
        images: [daqqat1, daqqat2, daqqat3],
    },
];

const classes = [
    {
        title: "Contemporary Floorbarre",
        description: "Focuses on strength, alignment, and mobility through floor-based exercises inspired by contemporary dance and Pilates, offering a comprehensive full-body conditioning experience.",
    },
    {
        title: "Somatic Movement & Improvisation",
        description: "Exploration through guided movement, encouraging creativity while developing body awareness, sensitivity, and a deeper connection to how you move and feel. (Barre au sol)",
    },
];

/* ─────────────────────────────────────────────
   Photo Gallery — Stacked Card Effect
   ───────────────────────────────────────────── */
const PhotoGallery = ({ images, name }) => {
    const [current, setCurrent] = useState(0);

    const advance = () => setCurrent((c) => (c + 1) % images.length);
    const retreat = () => setCurrent((c) => (c - 1 + images.length) % images.length);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrent((c) => (c + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-[3/2] flex flex-col items-center justify-center py-6 group">
            <div className="relative w-[85%] h-full flex items-center justify-center">
                <AnimatePresence>
                    {images.map((imgSrc, index) => {
                        let distance = index - current;
                        if (distance < 0) distance += images.length;
                        
                        // Only render the top 3 cards for the stack effect
                        if (distance >= 3) return null;

                        return (
                            <motion.img
                                key={imgSrc}
                                src={imgSrc}
                                alt={`${name} — photo ${index + 1}`}
                                className="absolute w-full h-full object-contain object-center rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/60"
                                style={{
                                    zIndex: images.length - distance,
                                    imageRendering: 'auto',
                                }}
                                loading="eager"
                                decoding="async"
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{
                                    opacity: 1 - distance * 0.35,
                                    scale: 1 - distance * 0.05,
                                    y: distance * 20,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -350,
                                    rotate: -15,
                                    scale: 0.8,
                                    transition: { duration: 0.4 }
                                }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Counter badge */}
            <div className="absolute top-2 right-2 md:top-6 md:right-6 bg-white/40 backdrop-blur-md rounded-full px-4 py-1.5 z-50 border border-white/30 shadow-md">
                <span className="text-muted-black text-[12px] font-bold tracking-wide">{current + 1} / {images.length}</span>
            </div>

            {/* Navigation arrows */
            images.length > 1 && (
                <>
                    <button
                        onClick={retreat}
                        className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/70 backdrop-blur-lg text-muted-black flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all duration-300 z-50 border border-white shadow-[0_5px_15px_rgba(0,0,0,0.15)] hover:scale-105"
                        aria-label="Previous photo"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={advance}
                        className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/70 backdrop-blur-lg text-muted-black flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all duration-300 z-50 border border-white shadow-[0_5px_15px_rgba(0,0,0,0.15)] hover:scale-105"
                        aria-label="Next photo"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </>
            )}
        </div>
    );
};

/* ─────────────────────────────────────────────
   Section Number Badge
   ───────────────────────────────────────────── */
const SectionNumber = ({ num }) => (
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-dance-warm/20 text-dance-warm text-sm font-serif mb-6">
        {num}
    </div>
);

/* ─────────────────────────────────────────────
   Main Dance Page
   ───────────────────────────────────────────── */
const DancePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen font-sans text-muted-black">

            {/* ═══════════════ Hero Section ═══════════════ */}
            <section className="relative w-full min-h-[75vh] overflow-hidden pt-[72px] flex items-center">
                <div className="absolute inset-0 w-full h-full z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-dance-cream via-dance-sand to-dance-soft"></div>
                    <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-dance-warm/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-dance-warm/8 rounded-full blur-3xl pointer-events-none"></div>
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="w-10 h-1 bg-dance-warm rounded-full mx-auto mb-8"></div>
                        <h1 className="font-serif text-muted-black text-[2.5rem] md:text-[3.6rem] lg:text-[4.5rem] leading-[1.1] mb-6 tracking-tight">
                            The Art of <span className="italic text-dance-warm">Dance</span>
                        </h1>
                        <p className="text-muted-black/40 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-8">
                            Movement · Expression · Connection
                        </p>
                        <p className="text-muted-black/35 text-sm font-light max-w-lg mx-auto leading-relaxed">
                            Exploring the intersection of contemporary dance, improvisation, and cultural narratives through performances and teaching.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ Performances Intro ═══════════════ */}
            <section className="py-16 bg-white border-b border-dance-warm/8">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[11px] uppercase tracking-[0.5em] text-dance-warm font-bold mb-3">Showcases</h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-muted-black">Performances</h3>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ All Performance Sections ═══════════════ */}
            {performances.map((perf, index) => (
                <section
                    key={perf.name}
                    className={`py-20 md:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-[#faf8f5]'}`}
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-16">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>

                            {/* Gallery */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.9 }}
                                className="w-full lg:w-[58%]"
                            >
                                <PhotoGallery images={perf.images} name={perf.name} />
                            </motion.div>

                            {/* Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.9, delay: 0.1 }}
                                className="w-full lg:w-[42%]"
                            >
                                <SectionNumber num={index + 1} />

                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-muted-black mb-4 leading-tight">
                                    {perf.name}
                                </h3>

                                <div className="w-12 h-[2px] bg-dance-warm/40 rounded-full mb-6"></div>

                                <p className="text-muted-black/70 font-medium text-sm md:text-base mb-2">
                                    {perf.subtitle}
                                </p>
                                <p className="text-muted-black/45 font-light leading-relaxed text-sm md:text-base mb-6">
                                    {perf.info}
                                </p>

                                <div className="flex items-center gap-4 pt-4 border-t border-muted-black/6">
                                    <div className="flex items-center gap-2 text-dance-warm/50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <span className="text-xs font-medium text-muted-black/40 tracking-wide">{perf.country}</span>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ═══════════════ Classes Section ═══════════════ */}
            <section className="py-24 md:py-28 bg-[#301934]">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[11px] uppercase tracking-[0.5em] text-dance-warm-light font-bold mb-3">What We Teach</h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-white">Classes We Offer</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {classes.map((cls, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="flex flex-col items-start p-10 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm hover:bg-white/8 transition-all duration-700 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-dance-warm/15 flex items-center justify-center mb-6 group-hover:bg-dance-warm/25 transition-colors duration-500">
                                    <svg className="w-7 h-7 text-dance-warm-light" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-serif mb-4 text-white">{cls.title}</h4>
                                <p className="text-white/40 font-light leading-relaxed">{cls.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA Section ═══════════════ */}
            <section className="py-24 md:py-28 bg-dance-cream">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-10 h-1 bg-dance-warm rounded-full mx-auto mb-8"></div>
                        <h2 className="text-3xl md:text-5xl font-serif text-muted-black mb-4">
                            Ready to <span className="italic text-dance-warm">express</span>, move, and create?
                        </h2>
                        <p className="text-muted-black/40 font-light mb-10 max-w-md mx-auto">Begin your dance journey today with a personalized session.</p>
                        <a
                            href="https://wa.me/35677418079"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-dance-warm hover:bg-[#6a1b9a] text-white px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 shadow-[0_4px_20px_rgba(123,31,162,0.25)] hover:shadow-[0_8px_30px_rgba(123,31,162,0.35)] hover:-translate-y-0.5"
                        >
                            Contact me on WhatsApp
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DancePage;
