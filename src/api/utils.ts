/*
第一种（也是最常用的一种，满足大多数场景，首选这种写法哦）：
比如后端使用 spring cloud 微服务架构，不同服务可能会部署在不同机器上，
这时候前端必定产生跨域，推荐部署前端项目首选 nginx，
可以利用 nginx 的代理转发功能来解决跨域问题
 */
export const baseUrlApi = (url: string) => `/api/${url}`;
// 第二种：前端打包直接丢给后端，放到后端项目里一起部署，协议、主机、端口都相同了，就没有跨域问题
// export const baseUrlApi = (url: string) =>
//   process.env.NODE_ENV === "development"
//     ? `/api/${url}`
//     : `http://127.0.0.1:3000/${url}`;
