module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "'./public/index.html"
  ],
  theme: {
    extend: {

      color: {
        checke1: 'var(--color-check1)',
        checke2: 'var(--color-check2)',
      },

      backgroundColor: {
        skin: {
          check1: 'var(--color-check1)',
          check2: 'var(--color-check2)',
          main: 'var(--color-main)'
        }
      },
      textColor: {
        skin: {
          filter: 'var(--color-text-filter-active)',
          color1: 'var(--color-text-classic)',
          color2: 'var(--color-text-classic2)',
          color3: 'var(--color-text-classic3)',
          color4: 'var(--color-text-classic4)',
        }
      },
      borderColor: {
        skin: {
          circle: 'var(--color-text-classic)'
        }
      },
      caretColor: {
        skin: {
          caret: 'var(--color-text-filter-active)'
        }
      }
    },
  },
  plugins: [],
}
