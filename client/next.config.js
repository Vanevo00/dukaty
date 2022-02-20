const config = require('config')
const graphQLEndpoint = `${config.get('graphql.endpoint')}`
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        GRAPHQL_ENDPOINT: JSON.stringify(graphQLEndpoint)
      })
    )
    return config
  },
  cssLoaderOptions: {
    url: false
  }
}
