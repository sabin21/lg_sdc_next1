const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    })
    return config
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.(glsl|vs|fs|vert|frag)$/,
  //       use: ['raw-loader', 'glslify-loader'],
  //     },
  //   ],
  // },
}