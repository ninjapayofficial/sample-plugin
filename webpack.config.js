// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js', // Output file name
    path: path.resolve(__dirname), // Output directory: plugin root
    libraryTarget: 'commonjs2', // For Node.js module compatibility
  },
  target: 'node', // Since we're running in Node.js
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // If you're using Babel
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  externals: {
    // Exclude dependencies that are available in the main app
    sequelize: 'commonjs sequelize',
    express: 'commonjs express',
  },
};
