module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,tsx}'
  ],
  content: [],
  theme: {
    colors: {
      primary: {
        200: 'rgb(59, 89, 152)'
      },
      secondary: {
        50: 'rgb(255, 255, 255)',
        100: 'rgb(200, 200, 200)',
        200: 'rgb(75, 75, 75)',
        900: 'rgb(0, 0, 0)'
      }
    },
    extend: {}
  },
  plugins: []
}
