var generators = require('yeoman-generator');

// var basePath = '../../templates/';
var basePath = './';
var devInstalls = [
  'babel-core',
  'babel-eslint',
  'babel-loader',
  'babel-preset-es2015',
  'babel-preset-react',
  'css-loader',
  'eslint',
  'react-hot-loader',
  'node-sass',
  'sass-loader',
  'style-loader',
];
var saveInstalls = [
  'webpack',
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'webpack-dev-server',
];
var React = generators.Base.extend({
  
  installReact: function() {
    this.npmInstall(devInstalls, {'saveDev': true});
    this.npmInstall(saveInstalls, {'save': true});
  },
  writing: function() {
    this.fs.copyTpl(
      this.templatePath(basePath + 'index.html'),
      this.destinationPath(basePath + 'index.html')
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
  }
});
module.exports = React;
