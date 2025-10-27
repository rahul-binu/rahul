export const themes = {
  light: {
    primary: "from-emerald-500 via-green-500 to-teal-500", // elegant green gradient
    hover: "hover:text-emerald-700",                       // natural hover
    text: "text-gray-900",                                 // main text
    secondaryText: "text-gray-600",                        // subtle text
    background: "bg-gradient-to-br from-green-50 via-emerald-100 to-lime-50", // soft pastel bg
    sectionBg: "bg-white/70 backdrop-blur-md shadow-lg border border-emerald-200/30 rounded-2xl", // clean glassmorphic
    footer: "bg-gradient-to-b from-green-200 via-emerald-300 to-lime-200", // soft footer
    button:
      "bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:shadow-emerald-400/40 transition-all duration-300",
  },

  dark: {
    primary: "from-green-400 via-emerald-500 to-lime-400", // luxurious glow gradient
    hover: "hover:text-lime-300",                          // bright hover
    text: "text-gray-100",                                 // main text
    secondaryText: "text-gray-400",                        // softer text
    background: "bg-gradient-to-br from-gray-950 via-green-950 to-black", // deep, premium dark
    sectionBg:
      "bg-green-900/20 backdrop-blur-md border border-emerald-500/10 rounded-2xl shadow-lg shadow-emerald-900/40", // glowing cards
    footer:
      "bg-gradient-to-b from-green-950 via-emerald-900 to-gray-950 border-t border-emerald-800/30", // elegant footer
    button:
      "bg-gradient-to-r from-lime-400 via-emerald-500 to-green-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/40 hover:shadow-lime-400/40 transition-all duration-300",
  },
};
