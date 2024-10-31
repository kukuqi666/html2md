<h1 align="center">🎉 Html2md 🥳</h1>

<div >

`html2md` 是由 [helloworld开发者社区](https://www.helloworld.net) 开源的一款轻量级功能强大的html转md工具💪🏻，纯前端开发，不需要后端接口（<small> Node是我们前端的</small>😗！），支持多平台，一键将文章链接转换为md，方便大家收藏和保存文章🤪。请勿做其它用途



### 教程，如下图
![html2md教程](./demo.png)


</div>
<br />

## 技术栈

- [vue](https://cn.vuejs.org/) 前端三剑客之一，主张最少，具有高度灵活性的渐进式框架
- [nuxt](https://zh.nuxtjs.org/) 通过利用 Vue.js 和 Node.js最佳实践来构建高性能应用程序
- [express](https://www.expressjs.com.cn/) 基于 Node.js 平台，快速、开放、极简的 Web 开发框架
- [element-ui](https://element.eleme.cn/#/zh-CN) 宇宙第一 Vue 第三方组件库，有不服？
- [js-dom](https://github.com/jsdom/jsdom) 一款可在 Node 环境下模拟浏览器的 API 的库
- [turndown](https://github.com/domchristie/turndown) 使用 JavaScript 将 HTML 转换为 Markdown
- [axios](http://www.axios-js.com/) 易用、简洁且高效的 http库，支持浏览器和 Node 环境。
- [mavon-editor](https://github.com/hinesboy/mavonEditor) 一款基于 Vue 的 markdown 编辑器，支持所见即所得
- [sass](https://www.sass.hk/) 强大的 Css 预处理器之一
# 使用方法

## 本地环境运行

### 第一步：下载
```bash
git clone https://github.com/kukuqi666/html2md.git
cd ./html2md
```
### 第二步：安装
```bash
npm install
或者
yarn install
```
### 第三步：启动
```bash
npm run dev
或者
yarn dev
```
## docker 运行

### 第一步 ：下载

`方法同上`

### 第二步： 编译Dockerfile文件（没有docker - compose先安装）
```bash
docker-compose build
```
### 第三步 ：启动服务
```bash
docker-compose -d up
```
### 访问

READY  Server listening on  `http://you-server-ip:3031`


### 查看docker服务进程（示例）
```
╭─root@hacker ~/html2md  ‹main*›
╰─➤  docker ps -a
CONTAINER ID   IMAGE                                COMMAND                   CREATED        STATUS
 PORTS                                         NAMES
0d489d6fa540   html2md_hello-html2md                "docker-entrypoint.s…"   46 hours ago   Up 3 seconds
0.0.0.0:3031->3031/tcp, :::3031->3031/tcp     html2md-hello-html2md-1
```

### 查看html2md运行状态（示例）
```bash
docker logs 0d489d6fa540
```

### 停止容器（示例）

```bash
docker stop 0d489d6fa540
```


## 从docker hub拉取

### 拉取并启动服务
```bash
docker pull kukuqi/hello-html2md
```
```bash
docker run -d --name html2md -p 3031:3031 hello-html2md
```
### 查看镜像和容器

```bash
docker images
```

```bash
docker ps -a
```

### 启动和停止
```bash
docker start [容器ID]
```

```bash
docker stop [容器ID]
```

### 删除镜像和容器

```bash
docker rmi -f [镜像ID]
```

```bash
docker rm -f [容器ID]
```
### 解决拉取失败的问题


```bash
wget https://github.com/kukuqi666/html2md/releases/download/v1.1.1.1/hello-html2md.tar
```

```bash
docker load -i hello-html2md.tar
```

```bash
docker run -d --name html2md -p 3031:3031 hello-html2md
```


## 使用备注
- **防盗链**：由于各大网站的图片基本都会有防盗链机制，转换出来的 md 里的图片会无法正常预览，这个不慌 😳，把 md 内容复制到 [helloworld开发者社区](https://www.helloworld.net) 的写作文本框中就能正常显示了👌🏻。
- **微信文章**：微信文章内容格式差异性比较大，不能保证 💯% 好使，如果一篇不能解决，那就换下一篇吧😏。




## 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 😃

- 通过 [Issue](https://github.com/kukuqi666/html2md/issues) 报告 bug。
- 提交 [Pull Request](https://github.com/kukuqi666/html2md/pulls) 一起改进。
