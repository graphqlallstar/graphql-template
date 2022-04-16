import { gql } from "apollo-server"

const typeDefs = gql`
  type NBARoster {
    nbaPlayer: NBAPlayer
    position: String
  }
`

export default typeDefs