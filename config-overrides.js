/* eslint-disable import/no-extraneous-dependencies */
const {
  override,
  addWebpackAlias,
  addWebpackExternals,
  addBabelPlugins,
  addLessLoader,
} = require('customize-cra')
const path = require('path')
const { theme } = require('./package.json')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addWebpackExternals({
    BMap: 'BMap',
  }),
  ...addBabelPlugins(
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['import', { libraryName: 'antd-mobile', style: true }],
  ),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
  }),
)
