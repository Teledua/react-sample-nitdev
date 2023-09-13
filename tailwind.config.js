/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wetWeather:
          "url('https://media.istockphoto.com/id/503284599/photo/rainy-weather.webp?b=1&s=170667a&w=0&k=20&c=lgzp0sKUeq04Hzd_8iAKDi21ovnbRk02zGF9CXKhngk=')",
        dryWeather: "url('https://clipart-library.com/img/1719883.jpg')",
      },
    },
  },
  plugins: [],
};
