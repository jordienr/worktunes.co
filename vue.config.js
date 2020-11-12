module.exports = {
    lintOnSave: false,
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "@/assets/scss/styles.scss";`
        }
      }
    },
    pwa: {
      name: 'Worktunes',
      themeColor: '#1a212d',
      msTileColor: '#1a212d',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: '#1a212d',
    }
  }
  