const webpack = require("webpack");
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const os = require('os');
const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// 分析打包时间
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

function resolve(dir) { return path.join(__dirname, dir) }

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const isDev = process.env.NODE_ENV;  //当前的环境
const isProduction = process.env.NODE_ENV !== 'development';

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
        'animate': 'animate',
        'video-js': 'VideoJs',
        'vue-i18n': 'VueI18n',
        'iview': 'Iview'
    },
    css: [
        'https://lib.baomitu.com/animate.css/3.7.0/animate.min.css',
        'https://lib.baomitu.com/video.js/7.7.5/video-js.min.css'
    ],
    js: [
        'https://lib.baomitu.com/vue/2.5.7/vue.min.js',
        'https://lib.baomitu.com/vue-router/3.0.1/vue-router.min.js',
        'https://lib.baomitu.com/vuex/3.0.1/vuex.min.js',
        'https://lib.baomitu.com/axios/0.18.0/axios.min.js',
        'https://lib.baomitu.com/video.js/7.7.5/video.min.js',
        'https://lib.baomitu.com/vue-i18n/8.3.2/vue-i18n.min.js',
        'https://lib.baomitu.com/iview/3.5.4/iview.js'
    ]
}

const isDevCS = {
    '/api': {
        target: 'http://114.55.165.42:6100',
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

        // 上产环境时
        if (isDev === 'production') {
            config.plugins.delete('prefetch');
            config.plugins.delete('preload');

            // ============happypack start============
            const jsRule = config.module.rule('js');
            jsRule.uses.clear();
            //把对.js 的文件处理交给id为 babel 的 HappyPack 的实例执行
            jsRule.use('happypack/loader?id=babel', 'thread-loader')
                .loader('happypack/loader?id=babel')
                .end();
            // ============happypack end==============
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
                new HappyPack({
                    id: 'babel',
                    loaders: ['babel-loader?cacheDirectory=true'],
                    threadPool: happyThreadPool,
                    verbose: true
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
