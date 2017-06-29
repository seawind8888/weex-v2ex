var path = require('path')
var webpack = require('webpack')

function getBaseConfig() {
  return {
    entry: {
      app: path.resolve('src', 'entry.js')
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue(\?[^?]+)?$/,
        loaders: []
      }]
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false
      //   }
      // }),
      new webpack.BannerPlugin({
        banner: '// { "framework": "Vue" }\n',
        raw: true
      })
    ]
  }
}

var webConfig = getBaseConfig()
webConfig.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'app.web.js'
}
webConfig.module.rules[1].loaders.push('vue-loader')

var weexConfig = getBaseConfig()
weexConfig.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'app.weex.js'
}
weexConfig.module.rules[1].loaders.push('weex-loader')

module.exports = [webConfig, weexConfig]