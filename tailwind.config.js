/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      screens: {
        desktop: { max: "64em" },
        tablet: { max: "56.25em" },
        mobile: { max: "43.75em" },
        mobileSmall: { max: "31.25em" },
      },
      backgroundImage: {
        "lin-grad":
          "linear-gradient(27deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
        fb: "linear-gradient(27deg, #63AFDB 0%, #6028F1 100%)",
        yt: "linear-gradient(0deg, #D3205A 0%, #FF5A5A 100%)",
        x: "linear-gradient(27deg, #65FFEB 0%, #27718A 100%)",
        pin: "linear-gradient(27deg, #F6C683 0%, #DE3838 100%)",
        ig: "linear-gradient(27deg, #FFC593 0%, #BC7198 51.945%, #5A77FF 100%)",
      },
    },
  },
  plugins: [],
};
