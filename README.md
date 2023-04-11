
## Set up

```shell
pnpm install

pnpm run start
```

## [Relay](https://github.com/facebook/relay/blob/main/website/docs/home.md)

Relay is a client-side data management library for GraphQL, but use it in a very specific way to get the most out of it.

For best performance, you want your application to make individual requests at the beginning of each screen or page, rather than having individual components make their own requests.

Relay's unique advantage is to avoid this trade-off by having each component declare its own demands for data locally, and then stitching those demands into larger queries. This way you get both performance and maintainability.

Relay does this with a compiler that scans your JavaScript code for fragments of GraphQL, which are then stitched together into a complete query.

#### Relay Compiler

Relay Compiler converts GraphQL queries to client side JavaScript code and is a very important tool to help us improve the performance and maintainability of GraphQL applications, it can perform static type checking at compile time, optimize queries to reduce data transfer, and generate cacheable queries.


#### usePreloadedQuery + useQueryLoader


In React-Relay, data is usually obtained through a query. When a query is triggered, Relay automatically sends a network request to fetch data. However, in some cases, this way of automatically triggering queries can affect performance. For example, if a user switches between different pages, each page automatically triggers a query, which results in redundant network requests and slow response times.

To solve this problem, React-Relay provides two hooks: useQueryLoader and usePreloadedQuery. These two hooks can be used together to optimize the loading and rendering of data.

The useQueryLoader hook can be used to lazy load queries and cache query results. When the component is first rendered, useQueryLoader returns an empty query reference and starts loading query data. When the data is loaded, the query reference is updated and the component is re-rendered. The next time the component is rendered, the query data will be fetched directly from the cache without re-triggering the query. This reduces redundant network requests and improves application performance.

The usePreloadedQuery hook can be used to use previously loaded query data. It receives query references as parameters and returns query data. This avoids retrieving queries, reduces network requests and improves performance.

UseQueryLoader and usePreloadedQuery hooks can help us optimize data loading and rendering in React-Relay. Their combination can improve application performance and reduce redundant network requests


### Useful links
- [fragments](https://github.com/facebook/relay/blob/main/website/docs/tutorial/fragments-1.md)
- [use-fragment](https://github.com/facebook/relay/blob/main/website/docs/api-reference/hooks/use-fragment.md)
- [relay-environment-provider](https://relay.dev/docs/api-reference/relay-environment-provider/)
- [Relay Environment](https://relay.dev/docs/v10.1.3/relay-environment/)
