/* eslint-disable no-useless-computed-key */
/*
 * @Author: Stevie
 * @Date: 2021-03-01 23:27:48
 * @LastEditors: Stevie
 * @LastEditTime: 2021-09-16 16:25:10
 * @Description: file content
 */
const path = require('path')
const {
	override,
	addDecoratorsLegacy,
	disableEsLint,
	addLessLoader,
	useBabelRc,
	addWebpackAlias,
	overrideDevServer,
	watchAll,
	addWebpackResolve
} = require('customize-cra')

const lessLoaderOptions = {
	javascriptEnabled: true,
	// - 修改变量的值
	modifyVars: {
		'@primary-menu-color': '#7638ff',
		'@primary-menu-background-color': 'rgba(118, 56, 255, 0.05)',
		'@darker-color': 'rgba(0,0,0,0.85)',
		'@dark-color': 'rgba(0,0,0,0.65)',
		'@light-color': 'rgba(0,0,0,0.45)',
		'@layout-header-background': '#FFFFFF',
		'@font-family': 'PingFang SC',
		'@card-shadow': '0px 10px 20px 0px rgba(151,151,151,0.12)',
		'@border': 'solid 1px rgba(0,0,0,0.1)',
		'@border-radius-base': '4px'
	}
}

// - 配置webpack devServer
const devServerOptions = () => (config) => {
	return {
		...config,
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 2333
	}
}

module.exports = {
	webpack: override(
		// - 让.babelrc文件能被使用，可以重写CRA的babel配置
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useBabelRc(),
		// - 使用装饰器babel插件
		addDecoratorsLegacy(),
		// - 在webpack中禁用eslint
		disableEsLint(),
		// - 添加less loader
		addLessLoader(lessLoaderOptions),
		// - 添加别名
		addWebpackAlias({
			['@']: path.resolve(__dirname, './src'),
			['@pages']: path.resolve(__dirname, './src/pages'),
			['@components']: path.resolve(__dirname, './src/components'),
			['@entity']: path.resolve(__dirname, './src/entity'),
			['@store']: path.resolve(__dirname, './src/store'),
			['@images']: path.resolve(__dirname, './src/assets/images'),
			['@styles']: path.resolve(__dirname, './src/styles'),
			['@utils']: path.resolve(__dirname, './src/utils')
		}),
		addWebpackResolve({
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less']
		})
	),
	devServer: overrideDevServer(watchAll(), devServerOptions())
}
