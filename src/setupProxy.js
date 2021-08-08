/*
 * @Author: Stevie
 * @Date: 2021-08-08 20:49:21
 * @LastEditTime: 2021-08-08 21:01:05
 * @LastEditors: Stevie
 * @Description:
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		proxy('/api', {
			target: 'http://localhost:5000',
			changeOrigin: true,
			pathRewrite: { '^/api': '' }
		})
	)
}
