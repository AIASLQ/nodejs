'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/welcome').render('welcome')

Route.resource('posts', 'PostController')
Route.get('posts', 'PostController')

Route.get('/users', ({ request }) => {

    switch (request.format()) {
        case 'json':
            return [
                { name: 'sfsf' },
                { name: 'dvadvdv' }
            ]
        default:
            return `
        --dfsddf
        --sdvds
        `
    }

}).formats(['json', 'html'], true)

// 路由需要共享一些特性 有相同的前缀 域名 中间件
Route.group(() => {
    Route.get('users', () => 'Manage users')
    Route.get('posts', () => 'admin users')
}).prefix('admin')


// 前后端分离 后端只负责接口部分 只为前段提供数据 
Route.any('we', ({ view }) => view.render('welcome'))
Route.any('wes', ({ view }) => view.render('welcome'))