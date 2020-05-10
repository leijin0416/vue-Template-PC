## 前端优化

#### 1、gzip 压缩：

[压缩实践](https://juejin.im/post/5eb2243e51882555d8457833#heading-12)

- （1）、用 `CompressionPlugin` 来处理 gzip 压缩。配合 nginx 开启 `gzip_static on;`，开启之后 Nginx 会优先使用我们的 gz 文件。

- （2）、处理结果：浏览器文件请求的请求头包含字段 `Accept-Encoding: gzip` 代表浏览器支持 gzip 压缩文件。

- （3）、处理结果：文件响应头包含字段 `Content-Encoding: gzip` 代表返回的是压缩文件。

#### 2、CDN 加速引入外部文件：

[加速优化](https://juejin.im/post/5b97b84ee51d450e6c7492f6)

CDN 的全称是 Content Delivery Network，即**内容分发网络**。CDN 是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，**使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率**。

##### CDN 存在的意义：为了不让网络拥塞成为互联网发展的障碍。

[CDN意义](https://juejin.im/post/5d1385b25188253dc975b577)