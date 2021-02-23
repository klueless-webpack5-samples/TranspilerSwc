const path = require("path");

// Good resource:
// https://www.valentinog.com/blog/webpack/
// https://survivejs.com/webpack/loading/images/

module.exports = {
  mode: 'development',
  output: { 
    filename: "index.js",
    path: path.resolve(__dirname, './dist'),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "swc-loader" }],
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
