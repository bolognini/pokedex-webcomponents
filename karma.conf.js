const createDefaultConfig = require('@open-wc/testing-karma/default-config.js')
const merge = require('webpack-merge')
const projectConfig = require('./webpack.config.js')

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        {
          pattern: config.grep ? config.grep : 'src/**/*.spec.js',
          type: 'module'
        }
      ],
      webpack: {
        module: {
          ...projectConfig.module
        }
      }
    })
  )
  return config
}