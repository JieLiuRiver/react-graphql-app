

## [Relay](https://github.com/facebook/relay/blob/main/website/docs/home.md)

Relay是一个面向GraphQL的客户端数据管理库，但以一种非常具体的方式使用它，从而从中获得最大的好处。

为获得最佳性能，您希望您的应用程序在每个屏幕或页面的开头发出单个请求，而不是让各个组件发出自己的请求。

Relay的独特优势是通过让每个组件在本地声明自己的数据需求，然后将这些需求拼接成更大的查询来避免这种权衡。这样您就可以同时获得性能和可运维性。

Relay使用编译器来执行此操作，该编译器会扫描您的JavaScript代码以查找GraphQL的片段，然后将这些片段拼接成完整的查询。

#### Relay Compiler

Relay Compiler将GraphQL查询转换为客户端JavaScript代码，是一个非常重要的工具，帮助我们提高GraphQL应用程序的性能和可运维性，它可以在编译时执行静态类型检查，优化查询以减少数据搬迁，并生成可缓存查询
#### usePreloadedQuery + useQueryLoader

在React-Relay中，通常通过查询获取数据。当查询被触发时，Relay会自动发送网络请求来获取数据。但是，在某些情况下，这种自动触发查询的方式会影响性能。例如，如果用户在不同页面之间切换，每个页面都会自动触发查询，这会导致冗余的网络请求和缓慢的响应时间。

为了解决这个问题，React-Relay提供了两个钩子：useQueryLoader和usePreloadedQuery。这两个钩子可以一起使用来优化数据的加载和渲染。

useQueryLoader钩子可用于延迟加载查询和缓存查询结果。当组件首次渲染时，useQueryLoader返回一个空的查询引用并开始加载查询数据。当数据加载时，查询引用被更新，组件被重新渲染。下次渲染组件时，查询数据将直接从缓存中获取，而无需重新触发查询。这减少了冗余的网络请求，提高了应用程序性能。

usePreloadedQuery挂钩可用于使用以前加载的查询数据。它接收查询引用作为参数并返回查询数据。这避免了检索查询，减少了网络请求并提高了性能。

总之，useQueryLoader和usePreloadedQuery挂钩可以帮助我们优化React-Relay中的数据加载和渲染。它们的结合可以提高应用程序性能并减少冗余的网络请求


### Fragment
- [fragments](https://github.com/facebook/relay/blob/main/website/docs/tutorial/fragments-1.md)
- [use-fragment](https://github.com/facebook/relay/blob/main/website/docs/api-reference/hooks/use-fragment.md)
  