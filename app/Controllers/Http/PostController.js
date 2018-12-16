'use strict'

class PostController {
    index() {
        return 'list'
    }
    delete() {
        return '删除资源数据.';
    }
    edit() {
        return '编辑资源数据数据';
    }
}

module.exports = PostController;