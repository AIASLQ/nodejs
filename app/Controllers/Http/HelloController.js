'use strict'

class HelloController {
    render({ request, view }) {
        const name = request.input('name');
        return view.render('hello', { name });
        // return `${request.input('name')}`;
    }
}

module.exports = HelloController