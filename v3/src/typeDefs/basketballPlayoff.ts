import { gql } from "apollo-server"

const typeDefs = gql`
  type BasketballPlayoff {
    team: String
    opponent: String
    game: Int
    totalScore: Int
    won: Boolean
  }
`

export default typeDefs