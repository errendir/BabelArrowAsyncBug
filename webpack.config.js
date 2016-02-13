module.exports = {
  context: __dirname,
  entry: {
    babelbug: ['babel-polyfill','./index.js']
  },
  target: "node",
  output: {
    filename: "build/[name].bundle.js",
    chunkFilename: "build/[id].bundle.js",
    library: 'BabelBug',
    libraryTarget: 'umd'
  },
  externals: {},
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','stage-0']
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      }
    ]
  }
};
