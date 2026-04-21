import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isYogaPage = location.pathname === '/yoga';
    const isDancePage = location.pathname === '/dance';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const yogaSubLinks = [
        { name: "Background", href: "#bio" },
        { name: "Philosophy", href: "#about" },
        { name: "Classes", href: "#classes" },
        { name: "Retreats", href: "#sessions" },
        { name: "Schedule", href: "#workshops" },
    ];

    const handleNavClick = (e, href) => {
        if (href.startsWith('#')) {
            if (!isYogaPage) {
                e.preventDefault();
                window.location.href = '/yoga' + href;
            }
            setIsMenuOpen(false);
        }
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.location.href = '/';
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-black/5'
                : 'bg-white'
                }`}>
                <div className="w-full mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between h-[72px]">
                    {/* Logo + Brand */}
                    <button onClick={scrollToTop} className="flex items-center space-x-3 focus:outline-none group">
                        <img src="/meditation-icon.svg" className="w-8 h-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" alt="Logo" />
                        <div className="flex flex-col text-left">
                            <span className="text-muted-black font-semibold text-base tracking-[0.15em] uppercase leading-tight">Art of Movement</span>
                            <span className="text-olive text-[10px] tracking-[0.25em] uppercase font-medium hidden sm:block">Yoga, Meditation & Dance · Malta</span>
                        </div>
                    </button>

                    {/* Nav Links — Center */}
                    <div className="hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-[0.2em] text-muted-black/60 font-medium">
                        {/* Yoga link */}
                        <Link
                            to="/yoga"
                            className={`relative py-2 transition-colors duration-400 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:transition-all after:duration-500 ${
                                isYogaPage
                                    ? 'text-olive after:w-full after:bg-olive'
                                    : 'hover:text-muted-black after:w-0 after:bg-olive hover:after:w-full'
                            }`}
                        >
                            Yoga
                        </Link>

                        {/* Dance link */}
                        <Link
                            to="/dance"
                            className={`relative py-2 transition-colors duration-400 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:transition-all after:duration-500 ${
                                isDancePage
                                    ? 'text-dance-warm after:w-full after:bg-dance-warm'
                                    : 'hover:text-muted-black after:w-0 after:bg-dance-warm hover:after:w-full'
                            }`}
                        >
                            Dance
                        </Link>

                        {/* Yoga sub-links (only show on yoga page) */}
                        {isYogaPage && (
                            <>
                                <div className="w-px h-4 bg-muted-black/10"></div>
                                {yogaSubLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="relative py-2 hover:text-muted-black transition-colors duration-400 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-olive after:transition-all after:duration-500 hover:after:w-full text-muted-black/40"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </>
                        )}
                    </div>

                    {/* CTA — Right */}
                    <a
                        href="https://wa.me/35677418079"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center bg-olive hover:bg-olive-light text-white px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 shadow-[0_4px_20px_rgba(107,158,120,0.3)] hover:shadow-[0_8px_30px_rgba(107,158,120,0.4)] hover:-translate-y-0.5"
                    >
                        Book a Session
                    </a>

                    {/* Hamburger — Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 group focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-[1.5px] bg-muted-black block transition-all origin-center" />
                        <motion.span animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="w-6 h-[1.5px] bg-muted-black block transition-all" />
                        <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-[1.5px] bg-muted-black block transition-all origin-center" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white backdrop-blur-xl lg:hidden flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-6">
                            {/* Main discipline links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0 }}
                            >
                                <Link
                                    to="/yoga"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-2xl font-light tracking-[0.25em] uppercase transition-colors ${isYogaPage ? 'text-olive' : 'text-muted-black hover:text-olive'}`}
                                >
                                    Yoga
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 }}
                            >
                                <Link
                                    to="/dance"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-2xl font-light tracking-[0.25em] uppercase transition-colors ${isDancePage ? 'text-dance-warm' : 'text-muted-black hover:text-dance-warm'}`}
                                >
                                    Dance
                                </Link>
                            </motion.div>

                            {/* Yoga sub-links if on yoga page */}
                            {isYogaPage && (
                                <>
                                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-muted-black/15 to-transparent my-2"></div>
                                    {yogaSubLinks.map((link, i) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.16 + i * 0.06 }}
                                            className="text-muted-black/60 text-lg font-light tracking-[0.25em] uppercase hover:text-olive transition-colors"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </>
                            )}

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="pt-4">
                                <a
                                    href="https://wa.me/35677418079"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-8 py-3.5 bg-olive text-white rounded-full font-semibold tracking-[0.2em] text-xs uppercase shadow-lg"
                                >
                                    Book a Session
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
