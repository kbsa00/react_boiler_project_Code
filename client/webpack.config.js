const path = require("path");

module.exports = {
    entry: ['./src/index.js'],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel'
        },

        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      filename: "bundle.js"
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
};
  
