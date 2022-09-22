const { gql } = require('apollo-server')

module.exports = gql`
    type Books {
        id: ID!
        title: String!
        author: String!
    }

    extend type Query {
        books(UserID: ID!): [ Books! ]!
    }
`