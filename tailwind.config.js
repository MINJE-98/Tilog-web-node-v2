const disabledCss = {
  "code::before": false,
  "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  "pre > code": false,
  "code > span": {
    color: "#b6b6b6",
  },
  h1: false,
  h2: { "line-height": "0.4" },
  h3: { "line-height": "0.6" },
  h4: { "line-height": "0.6" },
  h5: false,
  h6: false,
  hr: false,
  span: false,
  code: {
    "font-size": "85%",
    padding: ".2em .4em",
    color: "#262626",
    backgroundColor: "#cfcfcf",
    "border-radius": "3px",
    margin: "1px",
  },
  p: {
    "line-height": "0.4",
  },
};

module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screen: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
      },
      aspectRatio: {
        "2/1": "2 / 1",
      },
      fontSize: {
        "5xl": [
          "3rem",
          {
            lineHeight: "1.5",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "1.3",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "1.2",
          },
        ],
      },
      colors: {
        Javascript: "#f1DD35",
        Typescript: "#3178c6",
        HTML: "#e44b23",
        React: "#61DBFB",
        Nestjs: "#e0234e",
        AWS: "#FF9900",
        CSS: "#264de4",
        Python: "#3572A5",
        Java: "#b07219",
        Go: "#375eab",
        Cpp: "#f34b7d",
        C: "#555555",
        Csharp: "#178600",
        Ruby: "#701516",
        Rust: "#dea584",
        Shell: "#89e051",
        Kotlin: "#F18E33",
        PHP: "#4F5D95",
        Scala: "#DC322F",
      },
    },
  },
  variants: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
