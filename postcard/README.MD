# 编写一个简单的Taro入门项目

参考：[aro 小程序开发大型实战（一）：熟悉的 React，熟悉的 Hooks](https://segmentfault.com/a/1190000022091448)

#### 与讲解示例不同的地方：

1. 教程中 Taro 版本为 2.x，而我使用的是 Taro Next
2. 教程中没有使用 Typescript，而我使用了TS
3. 教程中数据管理集中在 index页面中，使用useState管理数据，并通过属性传值方式进行数据管理操作，而我通过 useContext + useReducer 来管理数据
4. 我新增了一个组件 PostsList 用来展示所有 PostCard

#### 项目说明：  
src/components/ 中存放   
PostCard：单独一个帖子  
PostsList：帖子列表  
PostForm：发布帖子的表单  
PostsContext：定义一个全局的数据中心  
src/components/index.tsx：统一对外提供组件引用  
src/components/type.tsx：统一对外提供 TS 数据结构模型  

src/pages/index：用户界面  

tsconfig.json：新增 "paths":{"@/components/*": ["./src/components/*"]}，使用 alias 方便 pages/index 中来引入组件路径  

| 补充说明：  
| 使用 Typescript 编写 useContext + useReducer 时，没有彻底理清 TS 编写思路，在子组件使用 PostsContext 时 暂时通过 as IPostsContext 的形式来解决遇到的一些问题。
