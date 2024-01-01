/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        tile: "var(--card-tile-color)",
        line: "var(--card-line-color)",
        mblue: "hsl(var(--main-blue))",
        blueForeground: "hsl(var(--blueForeground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        modal: {
          DEFAULT: "hsl(var(--modal))",
          foreground: "hsl(var(--modal-foreground))",
        },
        border3: "hsl(var(--border3))",
        input3: "hsl(var(--input3))",
        background3: "hsl(var(--background3))",
        foreground3: "hsl(var(--foreground3))",
        black3: "hsl(var(--black3))",
        white3: "hsl(var(--white3))",
        muted3: {
          DEFAULT: "hsl(var(--muted3))",
          foreground: "hsl(var(--muted3-foreground))",
        },
        popover3: {
          DEFAULT: "hsl(var(--popover3))",
          foreground: "hsl(var(--popover3-foreground))",
        },
        card3: {
          DEFAULT: "hsl(var(--card3))",
          foreground: "hsl(var(--card3-foreground))",
        },
        table3: {
          DEFAULT: "hsl(var(--table3))",
          foreground: "hsl(var(--table3-foreground))",
        },
      },
      opacity: {
        shine: "var(--card-shine-opacity)",
        background: "var(--card-background-opacity)",
      },
      backgroundImage: {
        shine: "var(--card-shine-gradient)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // plugins: [require("tailwindcss-animate"), nextui()],
  plugins: [require("tailwindcss-animate")],
  // plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};

//For records animation

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/album/**/*.{js,ts,jsx,tsx,mdx}",
//     "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         slideUpEnter: {
//           "0%": {
//             opacity: 0,
//             transform: "translateY(20px)",
//           },
//           "100%": {
//             opacity: 100,
//             transform: "translateY(0px)",
//           },
//         },
//       },
//       animation: {
//         slideUpEnter: "slideUpEnter .3s ease-in-out",
//       },
//     },
//   },
//   plugins: [],
// };
