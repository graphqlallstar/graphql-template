# Our GraphQL learning content
You can obtain a basic and intermediate understanding of GraphQL principles when you subscribe to our blog and podcast. If you want to set up your own GraphQL server then you should continue reading.
# Build your own GraphQL setup
You can easily fork or copy the setup of `v3` subfolder. You must include a copy of our `LICENSE` file.

# Do you have an inquiry?
We're a team of two who work as GraphQL backend developers since 2018. We would be thrilled to help you too. You can send us a message to [GraphQL All-Star](mailto:team@graphqlallstar.com).

# Start the sample GraphQL Server
```bash
cd ./v3
npm run watch # Rerun the build when the code changes.
```

## Hint
> You can open the GraphQL Server in any browser, except Safari because it does not allow to introspect the endpoint in Apollo Studio.

# Sample GQLs
```
query Playoffs {
  basketballPlayoffs {
    team
    opponent
    game
    totalScore
    won
  }
}
```
```
query Rosters {
  nbaRosters {
    nbaPlayer {
      fullName
      birthday
      age
      height
      weight
      team
    }
    position
  }
}
```

# Copyright (c) 2022 GraphQL All-Star, Germany