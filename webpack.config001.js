const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";

// all pages 
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
// get the html page name
let htmlFileName = htmlPageNames.map(htmlPage=> htmlPage.pageName);

// convert the page into array to concatinate in pulgin
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `${name.pageName}`, 
        title: name.title,
        template: path.resolve(__dirname, `src/${name.pageName}`),
    })
});
module.exports = (env, argv) => ({
    entry:{
        // entery for main file
        main:path.resolve(__dirname, 'src/js/index.ts'),
    },
    output:{
        // output for dist folder
        path: path.resolve(__dirname, 'dist'),
        filename:'./js/[name].[contenthash].js',
        clean:true,
        // options:{
        //     // name: '[name][ext]',
        //     outputPath :'./js/'
        // }
        // assetModuleFilename: '[name].[ext]'
    },
    devtool: 'source-map',
    devServer:{
        static: path.resolve(__dirname, 'src'),
        port: 5001,
        open: true,
        hot: true,
        // compress: true,
        // historyApiFallback: true,
    },
    // loaders
    module:{
        
        rules:[
            //css
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"], 
            },
            //images
            {
                test: /\.(svg|png|jpg|webp|ico|jpeg)$/,
                type: 'asset/resource',
                
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
            // filename: devMode ? "[name].css" : "./css/scss/[name].[contenthash].css",
            filename: devMode ? "./css/scss/[name].[contenthash].css" : "[name].css",
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