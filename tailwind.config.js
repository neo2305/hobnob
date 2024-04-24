/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.jsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f3f4f6",
          "200": "#f0f2f5",
        },
        white: "#fff",
        royalblue: "#2563eb",
        darkgray: {
          "100": "#b2b2b2",
          "200": "#9ca3af",
        },
        lightgray: "#d1d5db",
        dimgray: "#4b5563",
        black: "#000",
        gainsboro: "#e5e7eb",
        gray: {
          "100": "#111827",
          "200": "rgba(0, 0, 0, 0.38)",
          "300": "rgba(0, 0, 0, 0.12)",
          "400": "rgba(0, 0, 0, 0.87)",
        },
        blueviolet: "#4f46e5",
        darkslategray: "#374151",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1550: {
        raw: "screen and (max-width: 1550px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
