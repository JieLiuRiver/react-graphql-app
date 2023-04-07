

## [Relay](https://github.com/facebook/relay/blob/main/website/docs/home.md)

#### Relay Compiler

Relay Compiler converts GraphQL queries into client-side JavaScript code, and is a very important tool that helps us improve the performance and maintainability of GraphQL applications. It can perform static type checking at compile time, optimize queries to reduce data transfer, and generate cacheable queries

#### usePreloadedQuery + useQueryLoader

In React-Relay, data is usually fetched through queries. When a query is triggered, Relay automatically sends a network request to fetch data. However, in some cases, this way of automatically triggering queries can affect performance. For example, if a user switches between different pages, each page automatically triggers a query, which can lead to redundant network requests and slow response times.

To solve this problem, React-Relay provides two hooks: useQueryLoader and usePreloadedQuery. These two hooks can be used together to optimize the loading and rendering of data.

The useQueryLoader hook can be used to delay loading queries and cache query results. When the component is first rendered, useQueryLoader returns an empty query reference and starts loading query data. When the data is loaded, the query reference is updated and the component is re-rendered. The next time the component is rendered, the query data will be fetched directly from the cache without re-triggering the query. This reduces redundant network requests and improves application performance.

usePreloadedQuery hook can be used to use previously loaded query data. It receives a query reference as a parameter and returns query data. This avoids retriggering queries, reduces network requests and improves performance.

In conclusion, useQueryLoader and usePreloadedQuery hooks can help us optimize data loading and rendering in React-Relay. Their combination can improve application performance and reduce redundant network requests


### Fragment
- [fragments](https://github.com/facebook/relay/blob/main/website/docs/tutorial/fragments-1.md)
- [use-fragment](https://github.com/facebook/relay/blob/main/website/docs/api-reference/hooks/use-fragment.md)
  