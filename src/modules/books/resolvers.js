const model = require('./model')
const UsersModel = require('../users/model')

module.exports = {
    Query: {
        books: async(_, { UserID }) => await model.getBooks(UserID)
    },
    Books: {
        id: global => global.book_id,
        title: global => global.book_title,
        author: global => global.book_author,
        // users: async global => await UsersModel.getUsers(global.user_id)
    }
}