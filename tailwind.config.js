module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       
        sans:['Roboto','sans-serif'],
        general:['Nunito','sans-serif']

      },
      colors:{
        colorText:'#24242C',
        'background': "#F3F3F3",
        'btnColor': "#5C60BF",
        'btnHoverColor': "#2A2F94",
        login:"#5C60BF"
      }
    },
  },
  plugins: [],
}
