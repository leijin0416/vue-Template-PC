const webpack = require("webpack");
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
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
        'ant-design-vue': 'AntDesignVue',
        'animate': 'animate',
        'video-js': 'VideoJs',
    },
    css: [
        "https://cdn.bootcdn.net/ajax/libs/ant-design-vue/1.7.4/antd.min.css",
        "https://cdn.bootcdn.net/ajax/libs/video.js/7.7.5/video-js.min.css"
    ],
    js: [
        "https://cdn.bootcdn.net/ajax/libs/vue/2.6.8/vue.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.3/vue-router.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js",
        "https://lib.baomitu.com/axios/0.18.0/axios.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vue-i18n/8.9.0/vue-i18n.min.js",
        "https://cdn.bootcdn.net/ajax/libs/ant-design-vue/1.7.4/antd.min.js",
        "https://cdn.bootcdn.net/ajax/libs/video.js/7.7.5/video.min.js",
        "https://cdn.bootcdn.net/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js"
    ]
}

const isDevCS = {
    '/api': {
        target: 'http://192.55.165.42:6100',
        changeOrigin: true,
        wx: true,
        pathRewrite: {
            "^/api": "/"
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

        if (isDev === 'production') {
            config.plugins.delete('prefetch');
            config.plugins.delete('preload');
        }

    },
    transpileDependencies: [
        'biyi-admin',
    ],
    configureWebpack: config => {
        // 生产环境打包分析体积
        if (isProduction || devNeedCdn) config.externals = cdn.externals;
        if (isDev === 'production') {
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
                new ParallelUglifyPlugin({
                    uglifyJS: {
                        output: {
                            beautify: false,
                            comments: false
                        },
                        warnings: false,
                        compress: {
                            reduce_vars: true,
                            drop_debugger: true,
                            drop_console: true
                        }
                    },
                    test: /.js$/g,
                    sourceMap: false
                }),
                // 体积压缩提示
                new BundleAnalyzerPlugin(),
                // 打包进度显示
                new ProgressBarPlugin()
            )
        }
    },
    css: {
        extract: false,
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
