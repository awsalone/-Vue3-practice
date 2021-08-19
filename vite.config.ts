import { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { viteMockServe } from 'vite-plugin-mock'
const path = require('path')
// vite.config.js # or vite.config.ts
console.log(path.resolve(__dirname, '/src'))
export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true;
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        watchFiles: true,
        injectCode: `
          import { setupProdMockServer } from '../mockProdServer';
          setupProdMockServer();
        `,
        logger: true,
      }),
      styleImport({
        libs: [{
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }]
      })
    ],
    resolve: {
      alias:{
    // 键必须以斜线开始和结束
    "@": path.resolve(__dirname, "src"),
      }
    },
    // hostname: '127.0.0.1',
    // port: 3000,
    // // 是否自动在浏览器打开
    // open: true,
    // // 是否开启 https
    // https: false,
    // // 服务端渲染
    // ssr: false,
    // /**
    //  * 在生产中服务时的基本公共路径。
    //  * @default '/'
    //  */
    // base: './',
    // /**
    //  * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
    //  * @default 'dist'
    //  */
    // outDir: 'dist',
    // // 反向代理，此处应该特别注意，网上很多教程是直接设置proxy，并没有向官网那样添加 server，可能会导致失败，vite官网：https://vitejs.dev/guide/features.html#async-chunk-loading-optimization
    server:{
      port:3001,
      host:'0.0.0.0',
      open:true,
      proxy: {
        '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/'

        // '/api': {
        //   target: 'https://api.pingping6.com/tools/baidutop/',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, '')
        }

      },
      // fs:{
      //   allow:[]
      // }
    }
  
  }
