const { fetchAll } = require('../../utils/postgres')

const ALL_BOOKS = `
    SELECT * FROM books WHERE book_user_id = $1
`

const getBooks = UserID => fetchAll(ALL_BOOKS, UserID)

module.exports = {
    getBooks
}