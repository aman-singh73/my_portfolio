export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#f0fdf4', 
        secondary: '#dcfce7',
        accent: '#16a34a',  
        darkAccent: '#15803d', 
        text: '#1e293b' 
      },
        animation: {
          'fade-in-left': 'fadeInLeft 1s ease-out',
          'fade-in-right': 'fadeInRight 1s ease-out',
        },
      },
    },
    plugins: [],
  };