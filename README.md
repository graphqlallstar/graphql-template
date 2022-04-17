# GraphQL templates powered by GraphQL All-Star Team
Hello. We are happy to have you exploring our open source GitHub. Here we maintain professional baked GraphQL templates using the newest stable packages of `apollo` and `graphql`.

## Our GraphQL learning content
You can obtain an excellent understanding of GraphQL principles when you subscribe to our blog and YouTube channel. If you want to set up your own GraphQL server then you should continue reading.

## Build your own GraphQL setup
You can easily fork or copy the setup of `v3` subfolder. You must include a copy of our `LICENSE` file.

## Do you have an inquiry?
We're a team of two who work as GraphQL backend developers since 2018. We would be thrilled to help you too. You can send us a message to [GraphQL All-Star](mailto:team@graphqlallstar.com).

## Start the sample GraphQL Server
```bash
cd ./v3
npm run watch # Rerun the build when the code changes.
```

### Hint
> You can open the GraphQL Server in any browser, except Safari because it does not allow to introspect the endpoint in Apollo Studio.

## Sample GraphQL Queries
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

## Enjoy our free and open source GraphQL content and code
MIT License

Copyright (c) 2022 GraphQL All-Star

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.