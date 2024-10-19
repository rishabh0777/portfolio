/** @type {import('tailwindcss').Config} */
export default { 
    darkMode: 'class',
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lilita: ['Lilita One', 'cursive'],
        majorMono: ['Major Mono Display', 'monospace'],
        novaMono: ['Nova Mono', 'monospace'],
        spicyRice: ['Spicy Rice', 'cursive'],
        forum: ['Forum', 'cursive'],
      },
       screens: {
        'xsm': '360px',  // Extra small screen
        'sm': '640px',   // Small devices like mobile phones
        'md': '768px',   // Medium devices like tablets
        'lg': '1024px',  // Large devices like desktops
        'xlg': '1280px', // Extra large screens
        '2xl': '1536px', // Ultra large screens
      },
       fontWeight: {
        thin: '100',
        extraLight: '200',
        semiBold: '600',
        extraBold: '800',
        ultraBold: '900',
      },
      letterSpacing: {
        tighter: '-0.075em',
        extraTight: '-0.1em',
        extraWide: '0.15em',
        ultraWide: '0.2em',
      },
    },
  },
  plugins: [],
}

