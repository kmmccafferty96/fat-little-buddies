// tailwind.config.js
module.exports = {
  important: true,
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      screens: {
        xs: '475px'
      },
      maxWidth: {
        '95pct': '95%',
        '25rem': '25rem',
        '62rem': '62rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true
  }
};
