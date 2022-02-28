import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://api.thegraph.com/subgraphs/id/QmYP23nRuFUu8BvCzy6xtX2XPkpf5TwtHBhtpUt3DtKGW1",
  }),
  cache: new InMemoryCache(),
});
