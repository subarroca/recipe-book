var path = require('path');


module.exports = {
 entry: './src/index.ts',
 output: {
   filename: 'bundle.js',
   path: path.resolve(__dirname, 'dist')
 },
 module: {
   rules: [
     {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },
     {
       enforce: 'pre',
       test: /\.ts$/,
       loader: 'ts-loader'
     }
   ]
 },
 resolve: {
   extensions: [ ".ts", ".js"]
 },
 devtool: 'inline-source-map',
 target: "node"
};
