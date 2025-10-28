/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    
    plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         "gradient-x": {
//           "0%": { "background-position": "0% 50%" },
//           "50%": { "background-position": "100% 50%" },
//           "100%": { "background-position": "0% 50%" },
//         },
//         "fade-in-up": {
//           "0%": { opacity: 0, transform: "translateY(8px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         "gradient-x": "gradient-x 8s ease infinite",
//         "fade-in-up": "fade-in-up .6s ease both",
//       },
//       backgroundSize: {
//         "200%": "200% 200%",
//       },
//     },
//   },
//   plugins: [],
// };
