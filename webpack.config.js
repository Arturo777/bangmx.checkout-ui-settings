const path = require("path");

const outputDir = "./checkout-ui-custom";


module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, outputDir),
      filename: "checkout6-custom.js",
    },
    devtool: !isProduction && 'source-map',
    watch: !isProduction,
    module: {
      rules: [
        {
          test: /\.css/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      ]
    }
  }
}
