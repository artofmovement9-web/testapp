import { motion } from 'framer-motion';
import mouna from '../assets/offerings/monn.jpg';

const Bio = () => {
    return (
        <section id="bio" className="py-28 md:py-40 bg-soft-sage relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-olive/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-olive/5 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start">
                
                {/* Left Column: Heading & Animated Circle */}
                <div className="w-full md:w-5/12 flex flex-col items-center md:items-start space-y-12">
                    {/* Background & Journey Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left w-full md:w-auto"
                    >
                        <div className="w-10 h-1 bg-olive rounded-full mb-6 mx-auto md:mx-0"></div>
                        <h2 className="text-[11px] uppercase tracking-[0.4em] text-olive font-semibold mb-5">Background</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-muted-black leading-tight">
                            My Journey
                        </h3>
                    </motion.div>

                    {/* Animated Circular Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Floating/Pulse Animation Wrapper */}
                        <motion.div
                            animate={{ 
                                y: [0, -10, 0],
                            }}
                            transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            className="relative"
                        >
                            {/* Outer Glow/Ring */}
                            <div className="absolute -inset-4 border border-olive/20 rounded-full animate-pulse-slow"></div>
                            <div className="absolute -inset-8 border border-olive/10 rounded-full animate-pulse-slower"></div>

                            {/* Circular Image Container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                <img 
                                    src={mouna} 
                                    alt="Mouna - Yoga Teacher" 
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                            </div>

                            {/* Name Label */}
                            <div className="mt-8 text-center w-full">
                                <h4 className="text-3xl font-serif text-muted-black tracking-wide">Mona</h4>
                                <div className="w-8 h-[1.5px] bg-olive/40 mx-auto mt-2 underline-offset-8"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Column: Biographical Text */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="md:w-7/12 flex flex-col justify-center space-y-8 pt-4 md:pt-28 text-center md:text-left"
                >
                    <p className="text-lg md:text-xl font-light leading-relaxed text-muted-black/80">
                        With a background in ballet and contemporary dance, I have always been deeply passionate about conscious body movement. My journey into yoga began in 2015, expanding my understanding of movement beyond performance into presence and awareness.
                    </p>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-muted-black/80">
                        I am a certified 200-hour teacher with Yoga Alliance, and I have been practicing and teaching yoga with dedication and the sincere desire to transmit its transformative power.
                    </p>
                    <div className="pl-6 border-l-2 border-olive/30 mt-8 py-2">
                        <p className="text-lg md:text-xl font-serif italic leading-relaxed text-muted-black/90">
                            "My approach blends the grace and fluidity of dance with the depth and mindfulness of yoga. Breath is at the heart of my teaching — I integrate pranayama techniques to help students evolve safely, access deeper postures, and truly feel their inner progress throughout the practice."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Bio;
