import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
    const { theme } = useTheme();
    return (
        <footer className="footer">
            <section id="contact" className="px-6 py-32 min-h-screen bg-gray-50/5 backdrop-blur-md flex flex-col items-center text-center">
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="max-w-2xl mb-10">
                    Whether you have a question, want to collaborate, or just say hi — my inbox is always open.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="mailto:youremail@example.com"
                        className="px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                        ✉️ Email Me
                    </a>
                    <a
                        href="https://github.com/yourgithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                        💻 GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourlinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                        🔗 LinkedIn
                    </a>
                </div>

                <p className="text-sm mt-10">
                    © {new Date().getFullYear()} Your Name — Built with ❤️ using React & Tailwind
                </p>
            </section>
        </footer>
    );
}

export default Footer;
