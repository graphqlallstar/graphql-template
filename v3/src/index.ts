import { ApolloServer, gql } from "apollo-server"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"

// You have to initialise the GraphQL Server with two parameters: 
// Your schema definitions and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// Now launch a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`)
})