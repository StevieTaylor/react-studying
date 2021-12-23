/*
 * @Author: Stevie
 * @Date: 2021-08-08 20:49:21
 * @LastEditTime: 2021-12-23 14:42:55
 * @LastEditors: Stevie
 * @Description:
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		createProxyMiddleware('/djapi', {
			target: 'https://danjuanfunds.com',
			changeOrigin: true
		})
	)
}
