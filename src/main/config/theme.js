export const themes = {
  light: {
    // Cool futuristic glass look
    primary: "from-cyan-500 via-blue-500 to-indigo-500", 
    hover: "hover:text-cyan-700 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300",
    text: "text-gray-900",
    secondaryText: "text-gray-600",
    background: "bg-gradient-to-br from-sky-50 via-indigo-100 to-cyan-100",
    sectionBg:
      "bg-white/60 backdrop-blur-lg shadow-xl border border-cyan-200/40 rounded-2xl",
    footer:
      "bg-gradient-to-b from-indigo-200 via-blue-200 to-cyan-200 border-t border-cyan-300/40",
    button:
      "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300",
    navLink:
      "text-gray-800 hover:text-cyan-700 hover:drop-shadow-[0_0_6px_rgba(6,182,212,0.6)] transition-all duration-300",
  },

  dark: {
    // Cyberpunk / futuristic glow
    primary: "from-cyan-400 via-blue-500 to-purple-500",
    hover: "hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] transition-all duration-300",
    text: "text-gray-100",
    secondaryText: "text-gray-400",
    background: "bg-gradient-to-br from-gray-950 via-indigo-950 to-black",
    sectionBg:
      "bg-gray-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/20",
    footer:
      "bg-gradient-to-b from-indigo-950 via-gray-950 to-black border-t border-cyan-800/30",
    button:
      "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/40 hover:shadow-blue-400/50 hover:scale-105 transition-all duration-300",
    navLink:
      "text-gray-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-300",
  },
};
