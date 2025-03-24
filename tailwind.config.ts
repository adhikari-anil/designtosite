import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      //   colors: {
      //     background: "var(--background)",
      //     foreground: "var(--foreground)",
      //     light: {
      //       bg: "#FFFFFF",
      //       text: "#000000",
      //       textHover: "#B22222",
      //       bgHover: "#F7F7F7",

      //       heading: "#455024",
      //       accent: "rgba(161, 113, 65, 0.4)", // A17141 at 40%
      //       muted: "#828282",

      //       cardBg: "#7A0D14",

      //       buttonText: "#7A0D14",
      //       buttonBg: "rgba(122, 13, 20, 0.07)", // 7A0D14 at 7%
      //       buttonTextHover: "#5A0A0F",
      //       buttonBgHover: "rgba(122, 13, 20, 0.15)",

      //       highlight: "#FEA30A",
      //       highlightHover: "#E59209",

      //       success: "rgba(18, 167, 121, 0.3)", // 12A779 at 30%
      //       successHover: "rgba(18, 167, 121, 0.4)",

      //       warning: "rgba(254, 163, 10, 0.3)", // FEA30A at 30%
      //       warningHover: "rgba(254, 163, 10, 0.4)",

      //       info: "#008B72",
      //       infoHover: "#007A63",

      //       link: "rgba(67, 125, 218, 0.3)", // 437DDA at 30%
      //       linkHover: "rgba(67, 125, 218, 0.4)",

      //       danger: "rgba(161, 17, 26, 0.3)", // A1111A at 30%
      //       dangerHover: "rgba(161, 17, 26, 0.4)",
      //     },

      //     dark: {
      //       bg: "#1E1E1E",
      //       text: "#D3D3D3",
      //       textHover: "#FFA500",
      //       bgHover: "#333333",

      //       heading: "#FEA30A",
      //       accent: "rgba(161, 113, 65, 0.4)", // A17141 at 40%
      //       muted: "#828282",

      //       cardBg: "#7A0D14",

      //       buttonText: "#FFFFFF",
      //       buttonBg: "rgba(130, 130, 130, 0.2)", // 828282 at 20%
      //       buttonTextHover: "#F0F0F0",
      //       buttonBgHover: "rgba(130, 130, 130, 0.3)",

      //       highlight: "#FEA30A",
      //       highlightHover: "#E59209",
      //       success: "rgba(18, 167, 121, 0.3)", // 12A779 at 30%
      //       successHover: "rgba(18, 167, 121, 0.4)",
      //       warning: "rgba(33, 98, 175, 0.3)", // 2162AF at 30%
      //       warningHover: "rgba(33, 98, 175, 0.4)",
      //       info: "#2162AF",
      //       infoHover: "#1B539A",
      //       link: "#008B72",
      //       linkHover: "#007A63",
      //     },
      //   },
      //   fontFamily: {
      //     montserrat: ["Montserrat"],
      //     quando: ["Quando"],
      //     malliya: ["Malliya Signature"],
      //   },
      screen: {
        "2xl": "1920px",
        "xl": "1440px",
        "lg": "1152px",
        "md": "768px",
        "sm": "320px",
      },
    },
  },
  plugins: [],
};

export default config;
