import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function Home() {
    const { theme } = useTheme();
    return (
        <div className={`relative min-h-screen ${theme.background} ${theme.text}`}>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-32">
                {/* Hero Section */}
                <section
                    id="home"
                    className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-screen overflow-hidden"
                >
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent animate-pulse blur-3xl"></div>

                    {/* Floating glow orbs */}
                    <div className="absolute w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
                    <div className="absolute w-72 h-72 bg-lime-400/30 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>

                    {/* Hero Content */}
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
                        Hi, I’m <span className="text-white dark:text-emerald-300">Rahul Binu</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
                        A passionate <span className="text-emerald-500 font-semibold">Java Developer</span> crafting
                        clean, efficient, and scalable applications — blending logic with elegant design.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold shadow-lg hover:shadow-emerald-500/40 hover:scale-105 transition-transform duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full border border-emerald-400 text-emerald-500 dark:text-emerald-300 font-semibold hover:bg-emerald-400/10 transition-colors duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Decorative wave or line */}
                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-emerald-500/20 to-transparent blur-2xl"></div>
                </section>


                {/* About Section */}
                <section id="about" className="px-4 py-32 min-h-screen">
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="max-w-3xl leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                    </p>
                </section>

                {/* Projects Section */}
                <section id="projects" className="px-4 py-32 min-h-screen">
                    <h2 className="text-4xl font-bold mb-6">Projects</h2>
                    <p className="max-w-3xl leading-relaxed">
                        Showcase of my portfolio projects...
                    </p>
                </section>

                {/* Contact Section */}
                <section id="contact" className="px-4 py-32 min-h-screen">
                    <h2 className="text-4xl font-bold mb-6">Contact</h2>
                    <p className="max-w-3xl leading-relaxed">
                        Get in touch via email or social media...
                    </p>
                </section>
                <section id="home" className={`min-h-screen flex items-center ${theme.background} ${theme.subtleNoise ? theme.subtleNoise : ""}`}>
                    <div className="container mx-auto px-6 py-20">
                        <div className={`${theme.sectionBg} p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up`}>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r animate-gradient-x" style={{ backgroundImage: `linear-gradient(90deg, rgba(16,185,129,1), rgba(34,197,94,1))` }}>
                                Build. Ship. Inspire.
                            </h2>
                            <p className="text-sm md:text-base text-gray-100/90 mb-6">
                                Clean code, real projects, and a design language that speaks for itself.
                            </p>

                            <div className="flex gap-4">
                                <a className={theme.button} href="#projects">See Projects</a>
                                <a className="px-4 py-2 rounded-lg border border-emerald-200/20 text-sm" href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
