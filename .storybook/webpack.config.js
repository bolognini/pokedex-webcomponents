const path = require('path')

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          exclude: /(node_modules|bower_components)/,
          use: ['to-string-loader', 'css-loader']
        },
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
      ]
    }
  }
}
