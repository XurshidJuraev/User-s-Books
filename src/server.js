const { ApolloServer } = require('apollo-server')
const modules = require('./modules')

const server = new ApolloServer({
    modules
})

server.listen(4030, console.log(4030 + server.graphqlPath))