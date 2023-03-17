const path = require('path');
// let HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// __webpack_base_uri__ = 'http://localhost:9000';


let conf ={
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    entry: ['./src/index.tsx'],
    output: {
      path:path.resolve(__dirname,'./dist'),
      filename: "[name].[hash].js",
      publicPath: process.env.ASSET_PATH
    },
    devServer: {
        static: {
            directory: path.join(__dirname, ''),
        },
        client: {   
            overlay: true,
        },
         port:9000,
         historyApiFallback: true

    },
    module: {
        rules: [

          // {
          //   test: /\.(js|jsx)$/,
          //   exclude: /node_modules/,
          //   use: ["babel-loader"],
          // },
          // {
          //   test: /\.(ts|tsx)$/,
          //   loader: "ts-loader",
          // },

        //   {
        //     test: /\.js$/,
        //     use: {
        //         loader:"babel-loader",
        //         options:{
        //             presets:["@babel/preset-env"]
        //         }
        //     },
        //     exclude: '/node_modules/'
        // },
        // {
        //     test: /\.jsx$/,
        //     use: {
        //         loader:"babel-loader",
        //         options:{
        //             presets:["@babel/preset-react","@babel/preset-env"]
        //         }
        //     },
        //     exclude: '/node_modules/'
        // },
          {
            test: /(?<!\.d)\.tsx?$/,
            loader: 'ts-loader',
            exclude: '/node_modules/'
        },
         {
              test: /\.ts$/,
              use: {
                  loader:"babel-loader",
                  options:{
                      presets:["@babel/preset-env", "@babel/preset-typescript"]
                  }
              },
              exclude: '/node_modules/'
          },
        // {
        //   test: /\.(ts)x?$/,    // add |ts
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'ts-loader',
        //   },
        // },

          
        //   {
        //     test: /\.less$/,
        //     use: MiniCssExtractPlugin.extract({
        //       use: ['css-loader', 'less-loader'],
        //       fallback: 'style-loader'
        //     })
        // },
            {
                test: /\.(css|less)$/,
                use:["style-loader",
                "css-loader",
                "less-loader"], 

            },
            {
                test:/\.(jpg|png|svg|jpeg)/,
                use:["file-loader"]
            }
        ]
    },
    plugins: [

      new HtmlWebpackPlugin({template: path.join(__dirname, "public", "index.html")}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};

module.exports = (env, options) => {
    let isProd = options.mode === 'production';
    conf.devtool = isProd
                    ? false
                    : 'eval-cheap-module-source-map'
    ;
    return conf;
};
