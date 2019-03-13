const { appendWebpackPlugin } = require('@rescripts/utilities')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = [
  // development
  config => {
    if (process.env.NODE_ENV === 'development') {
      config = {
        ...config,
        devtool: 'source-map',
      }
    }

    return config
  },

  // production
  config => {
    if (process.env.NODE_ENV === 'production') {
      config = appendWebpackPlugin(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-report.html',
        }),
        config
      )
    }

    return config
  },
]
