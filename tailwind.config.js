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
      },
      colors: {
        "lin-grad2":
          "linear-gradient(27deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
      },
    },
  },
  plugins: [],
};
