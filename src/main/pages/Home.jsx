import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function Home() {
    const { theme } = useTheme();
    const myProjects = [
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio built with React and Tailwind CSS to showcase my work and skills.",
            tech: ["React", "Tailwind", "Vite"],
            link: "#",
        },
        {
            title: "Task Manager API",
            description:
                "A RESTful API built using Spring Boot and MySQL for managing daily tasks.",
            tech: ["Spring Boot", "MySQL"],
            link: "#",
        },
        {
            title: "Media Sharing App",
            description:
                "A full-stack app where users can share photos and videos with personalized albums.",
            tech: ["Java", "Spring", "Electron"],
            link: "#",
        },
    ];

    return (
        <div className={`relative min-h-screen ${theme.background} ${theme.text}`}>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section
                id="home"
                className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-screen overflow-hidden"
            >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent animate-pulse blur-3xl"></div>

                {/* Floating glow orbs */}
                {/* <div className="absolute w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-lime-400/30 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div> */}

                {/* Hero Content */}
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
                    Hi, I’m Rahul Binu
                </h1>

                <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                    A passionate <span className="text-emerald-500 font-semibold">Java Developer</span> crafting
                    clean, efficient, and scalable applications — blending logic with elegant design.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 mt-4">
                    <a
                        href="#projects"
                        className={`px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 font-semibold shadow-lg ${theme.hover} transition-transform duration-300`}
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className={`px-6 py-3 rounded-full border border-emerald-400 font-semibold  ${theme.hover} transition-colors duration-300`}
                    >
                        Contact Me
                    </a>
                </div>
            </section>



            {/* About Section */}
            <section
                id="about"
                className="relative px-6 py-32 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
            >
                {/* subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent blur-3xl"></div>

                {/* content */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="max-w-3xl text-lg leading-relaxed space-y-4">
                    <p>
                        I don’t just write code — I build ideas into something people can touch,
                        see, and use. I enjoy the quiet satisfaction of a clean solution and the
                        rush of making something come alive.
                    </p>

                    <p>
                        Outside of development, I love exploring design, experimenting with
                        minimal UI concepts, and constantly learning how technology can be both
                        powerful and elegant.
                    </p>

                    <p className="italic text-emerald-300/90">
                        “Clean code, calm mind, and a cup of coffee — that’s my debugging ritual.”
                    </p>
                </div>

                {/* small floating accent or icon */}
                <div className="absolute bottom-10 right-10 text-emerald-400/60 text-2xl animate-pulse">
                    ✦
                </div>
            </section>


            {/* Projects Section */}
            <section id="projects" className="px-6 py-32 min-h-screen bg-gray-50/5 backdrop-blur-md">
                <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {myProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
                        >
                            <h3 className="text-2xl font-semibold mb-3 transition">
                                {project.title}
                            </h3>
                            <p className="mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-sm bg-white/10 px-3 py-1 rounded-full border"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </section>


            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
