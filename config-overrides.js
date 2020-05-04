const { override, fixBabelImports, addLessLoader, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
  babelInclude([path.resolve('src'), path.resolve(__dirname, '../src')]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#ff6600',
      '@success-color': '#107B00',
      '@warning-color': '#FFA90D',
      '@error-color': '#A90016',
      '@layout-body-background': '#F2F2F1',
      '@layout-header-background': '#FFFFFF',
      '@primary-1': '#F2F2F2',
    },
  })
);
