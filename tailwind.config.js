 // tailwind.config.js
 module.exports = {
    theme: {
      extend: {
        backgroundImage: theme => ({
         'hero-pattern': "url('/img/hero-pattern.svg')",
         'footer-texture': "url('/img/footer-texture.png')",
        })
      }
    }
  }