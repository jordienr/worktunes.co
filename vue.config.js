module.exports = {
    lintOnSave: false,
    css: {
      loaderOptions: {
        scss: {
          prependData: `
            @import "@/assets/scss/_colors.scss";
            @import "@/assets/scss/_typography.scss";
            `
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
  