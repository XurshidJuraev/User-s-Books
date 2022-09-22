const { fetch, fetchAll } = require('../../utils/postgres')

const ALL_USERS = `
    SELECT * FROM users
`

const USER_BY_ID = `
    SELECT * FROM users WHERE user_id = $1
`

const getUsers = () => fetchAll(ALL_USERS)
const getUserById = UserID => fetch(USER_BY_ID, UserID)

module.exports = {
    getUsers,
    getUserById
}