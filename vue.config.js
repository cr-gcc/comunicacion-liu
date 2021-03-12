module.exports = {
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Comunicación LIU MX'
      return args
    })
  },
  //
  publicPath: process.env.NODE_ENV === 'production'
    ? '/comunicacion'
    : '/',
}
