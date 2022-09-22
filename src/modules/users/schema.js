const { gql } = require('apollo-server')

module.exports = gql`
    type Users {
        id: ID!
        fullName: String!
        lastName: String!
        age: Int!
        isFree: Boolean!
        books: [ Books! ]!
    }


    extend type Query {
        users: [ Users! ]!
    }
`