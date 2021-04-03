const webpack = require("webpack");
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 
const CompressionPlugin = require("compression-webpack-plugin");

// 分析打包时间
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

function resolve(dir) { return path.join(__dirname, dir) }

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const isProduction = process.env.NODE_ENV !== 'development';
const isDev = process.env.NODE_ENV;            // 当前的环境

/**
 *  打包时切换成 false
 */
const devNeedCdn = isDev === 'production' ? false : true;
const cdn = {
    externals: {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vue-i18n': 'VueI18n',
        'element-ui': 'Element',
        'animate': 'animate',
        'video-js': 'VideoJs',
    },
    css: [
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.0/theme-chalk/index.css",
        "https://cdn.bootcdn.net/ajax/libs/video.js/7.7.5/video-js.min.css"
    ],
    js: [
        "https://cdn.bootcdn.net/ajax/libs/vue/2.6.8/vue.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.3/vue-router.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js",
        "https://lib.baomitu.com/axios/0.18.0/axios.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vue-i18n/8.9.0/vue-i18n.min.js",
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.0/index.js",
        "https://cdn.bootcdn.net/ajax/libs/video.js/7.7.5/video.min.js",
        "https://cdn.bootcdn.net/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js"
    ]
}

let baseUrl = "";   // 这里是一个默认的url，可以没有
switch (isDev) {
    case 'development':
        baseUrl = "http://192.168.1.101:10091"  // 这里是本地的请求url
        break
    case 'production':
        baseUrl = "http://xxx.100.210.42:10091"   // 生产环境url
        break
}
const isDevCS = {
    '/admin': {
        target: baseUrl,
        changeOrigin: true,
        wx: true,
        pathRewrite: {
            "^/admin": "/"
        }
    }
}

/**
 *  production：生产环境，development：开发环境
    config.mode = process.env.NODE_ENV
 */
module.exports = {
    runtimeCompiler: true,
    productionSourceMap: devNeedCdn,
    lintOnSave: false,
    devServer: {
        open: false,
        https: false,
        proxy: isDevCS
    },
    chainWebpack: (config) => {
        if (isDev === 'production') {
            // 移除 prefetch 插件,解决组件懒加载失效的问题
            config.plugins.delete('prefetch');
            // config.plugins.delete('preload');
        }

        // ============注入cdn start============
        config.plugin('html').tap(args => {
            // 生产环境或本地需要cdn时，才注入cdn
            if (isProduction || devNeedCdn) args[0].cdn = cdn;
            return args
        });
        // ============注入cdn end==============
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets/img'))
            .set('components', resolve('src/components'))

        config
            .plugin('speed-measure-webpack-plugin')
            .use(SpeedMeasurePlugin)
            .end()
        
        // 添加新的svg-sprite-loader处理svgIcon
        // <svg-icon :icon-class="v.meta.icon"></svg-icon>
        config.module
            .rule('svgIcon')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .tap(options => {
                options = {
                    symbolId: 'icon-[name]'
                }
                return options
            })
    
        // 原有的svg图像处理loader添加exclude
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()

    },
    transpileDependencies: [
        'biyi-admin',
    ],
    configureWebpack: config => {
        // 生产环境打包分析体积
        if (isProduction || devNeedCdn) config.externals = cdn.externals;
        if (isDev === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log'];
            config.plugins.push(
                // 压缩代码
                new CompressionPlugin({
                    algorithm: 'gzip',
                    filename: '[path].gz[query]',
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8,
                    deleteOriginalAssets: false
                }),
                // 体积压缩提示
                new BundleAnalyzerPlugin(),
                // 打包进度显示
                new ProgressBarPlugin()
            )
        }
    },
    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require('os').cpus().length > 1,
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        extract: true,
        loaderOptions: {
            sass: {
                data: `
                @import "@/style/mixin.scss";
                @import "@/style/_var.scss";
                `
            }
        }
    },
    // 第三方插件的选项
    pluginOptions: {}
};
