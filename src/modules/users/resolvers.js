const model = require('./model')
const bookModel = require('../books/model')

module.exports = {
    Query: {
        users: async() => {
            return await model.getUsers()
        }
    },
    Users: {
        id: global => global.user_id,
        fullName: global => global.user_fullname,
        lastName: global => global.user_lastname,
        age: global => global.user_age,
        isFree: global => global.user_isfree,
        books: async global => await bookModel.getBooks(global.user_id)
    }
}