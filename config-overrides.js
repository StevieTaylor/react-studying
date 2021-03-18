/*
 * @Author: Stevie
 * @Date: 2021-03-01 23:27:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-18 18:32:53
 * @Description: file content
 */
const path = require('path');
const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addLessLoader,
    useBabelRc,
    addWebpackAlias,
    overrideDevServer,
    watchAll
} = require("customize-cra");

const lessLoaderOptions = {
    javascriptEnabled: true,
    // - 修改变量的值
    modifyVars: {
        "@primary-menu-color": "#7638ff",
        "@primary-menu-background-color": "rgba(118, 56, 255, 0.05)",
        "@darker-color": "rgba(0,0,0,0.85)",
        "@dark-color": "rgba(0,0,0,0.65)",
        "@light-color": "rgba(0,0,0,0.45)",
        "@layout-header-background": "#FFFFFF",
        "@font-family": "PingFang SC",
        "@card-shadow": "0px 10px 20px 0px rgba(151,151,151,0.12)",
        "@border": "solid 1px rgba(0,0,0,0.1)",
        "@border-radius-base": "4px",
    },
}

const devServerOptions = (config)=>{
   
}

module.exports = {
    webpack: override(
        // - 让.babelrc文件能被使用，可以重写CRA的babel配置
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useBabelRc(),
        // - 允许使用装饰器babel插件
        addDecoratorsLegacy(),
        // - 在webpack中禁用eslint
        disableEsLint(),
        // - 添加less loader
        addLessLoader(lessLoaderOptions),
        // - 添加别名
        addWebpackAlias({
            "@": path.resolve(__dirname, "./src"),
            "@pages": path.resolve(__dirname, "./src/pages")
        })
    ),
    devServer: overrideDevServer(
        watchAll(),
        devServerOptions()
    )
};