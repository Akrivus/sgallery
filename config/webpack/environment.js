const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    Popper: ['popper.js', 'default'],
    $: 'jquery',
    jQuery: 'jquery'
  })
)
environment.alias = {
  'popper': 'popper.js/dist/popper.js',
  'jquery': 'jquery/dist/jquery.js',
  'jquery-ui': 'jquery-ui-bundle/jquery-ui.js'
}
module.exports = environment
