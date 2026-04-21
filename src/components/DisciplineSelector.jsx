import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DisciplineSelector = () => {
    return (
        <section className="py-24 md:py-36 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-300px] left-[-200px] w-[600px] h-[600px] bg-olive/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-300px] right-[-200px] w-[600px] h-[600px] bg-dance-warm/3 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="w-10 h-1 bg-muted-black/15 rounded-full mx-auto mb-8"></div>
                    <h2 className="text-[11px] uppercase tracking-[0.4em] text-muted-black/40 font-semibold mb-5">Choose Your Practice</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-muted-black">Your Journey Begins Here</h3>
                </motion.div>

                {/* Cards */}
                <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 max-w-6xl mx-auto">

                    {/* ─── Yoga Card — Clean & Serene ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.9 }}
                        className="flex-1"
                    >
                        <Link
                            to="/yoga"
                            className="group relative overflow-hidden rounded-[2rem] bg-soft-sage border border-olive/10 p-10 md:p-14 flex flex-col justify-between min-h-[380px] cursor-pointer transition-all duration-700 hover:shadow-[0_24px_80px_rgba(107,158,120,0.18)] hover:-translate-y-2 block h-full"
                        >
                            {/* Background blurs */}
                            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-olive/5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:bg-olive/10 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-olive/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center mb-8 group-hover:bg-olive/20 transition-colors duration-500">
                                    <svg className="w-7 h-7 text-olive" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-2 .8-2 2s.8 2 2 2 2-.8 2-2-.8-2-2-2zM8 21v-5l-2-3 2-4h8l2 4-2 3v5" />
                                    </svg>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-serif text-muted-black mb-3">
                                    <span className="italic text-olive">Yoga</span>
                                </h3>
                                <p className="text-muted-black/50 font-light leading-relaxed max-w-sm mb-8">
                                    Breath, alignment & mindful movement — find strength and stillness on the mat.
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center text-olive font-semibold text-sm uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
                                Explore
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>

                            <div className="absolute inset-0 rounded-[2rem] border-2 border-olive/0 group-hover:border-olive/20 transition-all duration-700 pointer-events-none"></div>
                        </Link>
                    </motion.div>

                    {/* ─── Dance Card — Elegant Rose & Lavender Glassmorphic ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="flex-1"
                    >
                        <Link
                            to="/dance"
                            className="group relative overflow-hidden rounded-[2rem] min-h-[380px] cursor-pointer transition-all duration-700 hover:-translate-y-2 block h-full shadow-[0_8px_30px_rgba(190,140,200,0.15)] hover:shadow-[0_24px_60px_rgba(190,140,200,0.25)]"
                        >
                            {/* Soft Rose-Lavender Mesh Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#fce4ec] via-[#f3e5f5] to-[#e8eaf6] overflow-hidden rounded-[2rem]">
                                {/* Fluid background blobs */}
                                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#f8bbd0] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-slow"></div>
                                <div className="absolute top-[20%] right-[-20%] w-[80%] h-[80%] bg-[#ce93d8] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
                                <div className="absolute bottom-[-20%] left-[10%] w-[70%] h-[70%] bg-[#b39ddb] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
                            </div>

                            {/* Crisp glass overlay */}
                            <div className="absolute inset-0 bg-white/35 backdrop-blur-[14px] border-2 border-white/50 group-hover:border-white/80 transition-colors duration-700 rounded-[2rem]"></div>
                            
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent opacity-60 rounded-[2rem] pointer-events-none"></div>

                            {/* Content */}
                            <div className="relative z-10 p-10 md:p-14 flex flex-col justify-between h-full">
                                <div>
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                                        <svg className="w-7 h-7 text-[#7b1fa2]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM5.5 21l3-7.5L12 16l3.5-2.5L18.5 21M7 10l5 3 5-3" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-serif text-[#4a1a6b] mb-3 drop-shadow-sm">
                                        <span className="italic">Dance</span>
                                    </h3>
                                    <p className="text-[#5c3a6e]/80 font-medium leading-relaxed max-w-sm mb-8">
                                        Movement, expression & connection — contemporary performances and floor-based classes.
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center">
                                    <div className="flex items-center text-[#4a1a6b] font-bold text-xs md:text-sm uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500 bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/60 shadow-sm">
                                        Explore
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DisciplineSelector;
