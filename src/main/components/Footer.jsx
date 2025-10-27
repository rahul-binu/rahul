import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
    const { theme } = useTheme();
    return (
        <footer className="footer">
            <div
                className={`h-[60vh] ${theme.footer} flex items-center justify-center`}
            >
                <p className="text-xl text-white/70">
                    End of Page — background continues smoothly 🎨
                </p>
            </div>
        </footer>
    );
}

export default Footer;
