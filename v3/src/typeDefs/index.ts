import { gql } from "apollo-server"
import basketballPlayoff from "./basketballPlayoff"
import nbaPlayer from "./nbaPlayer"
import nbaRoster from "./nbaRoster"

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    basketballPlayoffs: [BasketballPlayoff]
    nbaRosters: [NBARoster]
  }

  ${basketballPlayoff}
  ${nbaPlayer}
  ${nbaRoster}
`

export default typeDefs