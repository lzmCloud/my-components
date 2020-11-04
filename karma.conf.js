var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: ['src/tests/**/*.spec.js'], // 去监控tests文件夹下以.spec.js结尾的所有文件
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    autoWatch: true, // 自动观察文件变化
    webpack: webpackConfig,
    reporters: ['spec'],
    browsers: ['Chrome'] //启动一个看不到界面的浏览器
  })
}