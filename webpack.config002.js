const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
// const devMode = process.env.NODE_ENV !== "production";
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// console.log("devMode")
// console.log(devMode)
const htmlPageNames = [
    {
        pageName: 'index.html',
        title: 'Lsdigital gallery'
    }, 
    {
        pageName: 'brand.html',
        title: 'Lsdigital gallery'
    }, 
    {
        pageName: 'category.html',
        title: 'Lsdigital gallery'
    }, 
];
let htmlFileName = htmlPageNames.map(htmlPage=> htmlPage.pageName);
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `${name.pageName}`, 
        title: name.title,
        template: path.resolve(__dirname, `src/${name.pageName}`),
    })
});
// console.log("==========>> multipleHtmlPlugins << =============")
// console.log(multipleHtmlPlugins)
module.exports = (env, argv) => ({
    mode: argv.mode,
    devtool: argv.mode === 'development' ? 'source-map' : false,
    // mode: "development",
    // entry:{
    //     main:path.resolve(__dirname, 'src/js/index.ts'),
    //     style:path.resolve(__dirname, 'src/css/scss/index.scss')
    // },
    entry: [
        './src/js/index.ts',
        // './src/css/scss/index.scss',
      ],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'./js/[name].[contenthash].js',
        clean:true,
        // options:{
        //     // name: '[name][ext]',
        //     outputPath :'./js/'
        // }
        // assetModuleFilename: '[name].[ext]'
    },
    // optimization: {
    //     minimizer: [
    //       new OptimizeCSSAssetsPlugin(),
    //     //   new CopyPlugin({
    //     //     patterns: [{
    //     //       from: 'src/*.html',
    //     //       to: '[name].[ext]',
    //     //     }, {
    //     //       from: 'src/images/*',
    //     //       to: 'images/[name].[ext]',
    //     //     }],
    //     //   }),
    //     ],
    //   },

    // devtool: 'source-map',
    devServer:{
        static: {
            directory: path.join(__dirname, 'src'),
        },
        
        // contentBase: [
        //     // path.join(__dirname, '/src'),
        //     '/src'
        // ],
        // watchContentBase: true,
        port: 5001,
        open: true,
        hot: true,
        // compress: true,
        // historyApiFallback: true,
    },

    // loaders
    
    module:{
        rules:[
            {
                test: /\.(scss)$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  }, {
                    loader: 'css-loader',
                    options: {
                      url: false,
                    },
                  }, {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [
                          ['autoprefixer'],
                        ],
                      },
                    },
                  }, {
                    loader: 'sass-loader',
                    options: {
                      implementation: require('sass'),
                    },
                  },
                ],
            },
            //images
            {
                test: /\.(svg|png|jpg|webp|ico|jpeg)$/,
                use: [
                  {
                      loader: "file-loader",
                      /**
                       * use `name` to specify how and where images should be outputted
                       *
                       * 1. use the image's filepath to set the URL path from which it's served
                       * 2. use the image's filename and contenthash to set its URL filename
                       */
                      options: {
                          name: "[path][name].[contenthash].[ext]",
                          // you may need to set `outputPath` too if you want
                          // to specify how/where images should be outputted
                      },
                  },
                  {
                      loader: 'image-webpack-loader'
                  },
              ],
                
            },
            // js babel
            {   
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        only: ["./src"],
                        // name: '[name][ext]',
                        // outputPath :'./js/'
                    }
                }

            }
            
        ]
    },
   
    //  // Plugins
    plugins:[
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: argv.mode === 'production' ? "[name].css" : "./css/scss/[name].[contenthash].css",
            // filename: devMode ? "./css/scss/[name].[contenthash].css" : "[name].css",
        }),
        new HtmlWebpackPartialsPlugin({
            path:path.join(__dirname,'./src/header.html'),
            location:'header',
            template_filename: htmlFileName
        }),
        new HtmlWebpackPartialsPlugin({
            path:path.join(__dirname,'./src/footer.html'),
            location:'footer',
            template_filename: htmlFileName
        }),
       new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
       // copy asset of dist
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: './assets' },
                { from: "./src/img", to: "./img" },
                { from: "./src/video", to: "./video" },
                { from: "./src/favicon.ico", to: "./favicon.ico" },
            ],
          })
      
    //    new CleanWebpackPlugin(['dist'])
    ].concat(multipleHtmlPlugins)
})