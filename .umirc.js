// ref: https://umijs.org/config/
const path = require('path')

export default {
  treeShaking: true,
  alias: {
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@styles': path.resolve(__dirname, 'src/styles'),
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'hero',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  publicPath:'./',
  // proxy: {
  //   '/api': {                  
  //     target: 'https://pvp.qq.com/web201605/js/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api' : '' }
  //   }
  // }
};
