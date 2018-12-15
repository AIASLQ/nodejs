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

Route.on('/').render('welcome')

Route.get('/posts', () => 'List of get posts')

Route.post('/posts', () => 'post moeths has created')

// 路由参数
Route.get('/postsWidthParams/:id', ({ params }) => {
    return `you're watching post ${params.id}.`

})

// patch/put 修改
Route.patch('/postsWidthParams/:id', ({ params }) => {
    return `Post ${params.id}  as been update.`
})

// patch/put 修改
Route.put('/postsWidthParams/:id', ({ params }) => {
    return `Post ${params.id} has been update.`
})

// delete 删除
Route.delete('/postsWidthParams/:id', ({ params }) => {
    return `Post ${params.id} has been delete.`
})