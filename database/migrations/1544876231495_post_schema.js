'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
    up() {
        // 数据表名字是posts
        this.create('posts', (table) => {
            table.increments()
            table.string('title')
            table.text('content', 'longtext')
            table.timestamps()
        })
    }

    down() {
        // 删除数据表
        this.drop('posts')
    }
}

module.exports = PostSchema