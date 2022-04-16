import { gql } from "apollo-server"

const typeDefs = gql`
  type NBAPlayer {
    fullName: String
    birthday: String
    age: Int
    height: Float
    weight: Float
    team: String
  }
`

export default typeDefs