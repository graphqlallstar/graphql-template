const basketballPlayoffs = [
  {
    team: "New Orleans Pelicans",
    opponent: "Phoenix Suns",
    game: 1,
    totalScore: 53,
    won: false
  },
  {
    team: "Boston Celtics",
    opponent: "Brooklyn Nets",
    game: 3,
    totalScore: 51,
    won: true
  }
]

const nbaPlayers = [
  {
    fullName: "Daniel Theis",
    birthday: "April 4, 1992",
    age: 30,
    height: 6.8,
    weight: 245,
    team: "Boston Celtics",
  },
  {
    fullName: "Nic Claxton",
    birthday: "April 17, 1999",
    age: 22,
    height: 6.11,
    weight: 215,
    team: "Boston Celtics",
  },
]

const nbaRosters = [
  {
    nbaPlayer: nbaPlayers[0],
    position: "C"
  },
  {
    nbaPlayer: nbaPlayers[1],
    position: "C-F"
  }
]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves Basketball playoffs, NBA players and their rosters from the arrays above.
const resolvers = {
  Query: {
    basketballPlayoffs: () => basketballPlayoffs,
    nbaRosters: () => nbaRosters
  },
}

export default resolvers