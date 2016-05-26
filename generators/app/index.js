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
    writing: function() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    )
  },
  
  installReact: function() {
    this.npmInstall([], {'saveDev': true});
    this.npmInstall([], {'save': true});
  },
  
  paths: function () {
    this.fs.write('src/App.js', '');
  }
});
module.exports = React;
