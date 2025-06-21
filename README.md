
> **概览**：
> Azu 的个人博客（smartazu.github.io）是一个基于 [Hexo](https://hexo.io/) 的技术分享平台，主要聚焦于 SRE 运维、云计算与 Docker 等领域；主题采用 Material Design 风格的 [Hexo Theme Fluid](https://www.npmjs.com/package/hexo-theme-fluid)，并通过 GitHub Pages 自动部署，支持本地搜索与多语言等功能。

---

## 目录

* [项目简介](#项目简介)
* [主要功能](#主要功能)

  * [内容组织](#内容组织)
  * [技术栈与主题](#技术栈与主题)
  * [部署与搜索](#部署与搜索)
* [快速开始](#快速开始)

  * [先决条件](#先决条件)
  * [安装与运行](#安装与运行)
* [贡献指引](#贡献指引)
* [许可证](#许可证)
* [联系方式](#联系方式)

---

## 项目简介

Azu 的博客以「分享运维实践与学习笔记」为核心，当前主要系列包括 “SRE-Google 运维解密” 和 “Docker 学习记录” 等，每篇文章均有完整的前言、正文和标签分类，引导读者深入理解运维场景与技术细节。 ([smartazu.github.io][1], [smartazu.github.io][2])

在 “关于” 页面中，Azu 自我介绍为“一个普通的人”，并提供了 GitHub 链接和二维码，简洁而富有人情味。 ([smartazu.github.io][3])

---

## 主要功能

### 内容组织

* **系列化文章**：按专题（如 SRE、云计算、IT支持、网络运维）分类，每个分类下展示对应文章列表，方便系统学习。 ([smartazu.github.io][2])
* **标签云**：支持多维度标签（如 `Docker`、`SRE`、`Google`、`zabbix` 等），帮助读者快速定位感兴趣内容。 ([smartazu.github.io][4])
* **归档检索**：按时间倒序排列历史文章，可通过关键字快速搜索。 ([smartazu.github.io][1])

### 技术栈与主题

* **静态站点生成器**：使用 [Hexo](https://hexo.io/)——一个基于 Node.js 的快速、简单且强大的博客框架。 ([hexo.io][5])
* **博客主题**：采用 [hexo-theme-fluid](https://www.npmjs.com/package/hexo-theme-fluid)（v1.9.x），提供 Material Design 风格、暗色模式、本地搜索、多语言支持等特性。 ([npmjs.com][6], [fluid-dev.github.io][7])
* **前端资源**：自定义 CSS/JS，静态资源统一放置于 `css/`、`js/`、`img/` 等目录。 ([github.com][8])

### 部署与搜索

* **一键部署**：Hexo 支持一条命令 `hexo deploy` 将静态文件推送到 GitHub Pages。 ([hexo.io][5])
* **本地预览**：通过 `hexo server` 在 `http://localhost:4000` 实时预览。 ([hexo.io][5])
* **全文搜索**：集成本地搜索插件，用户可在站内直接进行关键字检索，无需外部服务。 ([github.com][9])

---

## 快速开始

### 先决条件

* 已安装 [Node.js](https://nodejs.org/)（建议 v16+）
* 全局安装 Hexo CLI：

  ````bash
  npm install -g hexo-cli
  ``` :contentReference[oaicite:11]{index=11}
  ````

### 安装与运行

1. 克隆仓库：

   ```bash
   git clone https://github.com/SmartAzu/smartazu.github.io.git
   cd smartazu.github.io
   ```
2. 安装依赖：

   ```bash
   npm install
   ```
3. 安装主题：

   ````bash
   npm install --save hexo-theme-fluid
   ``` :contentReference[oaicite:12]{index=12}  
   ````
4. 配置主题：在根目录 `_config.yml` 中设置：

   ````yaml
   theme: fluid
   ``` :contentReference[oaicite:13]{index=13}  
   ````
5. 本地启动：

   ```bash
   npm start       # 或 hexo server
   # 浏览 http://localhost:4000
   ```
6. 构建并部署：

   ```bash
   hexo clean
   hexo generate
   hexo deploy     # 需在 _config.yml 中配置 deploy: github
   ```

---

## 贡献指引

欢迎提交 Issue 或 Pull Request，共同完善：

1. Fork 本仓库
2. 新建分支 `feature/xxx`
3. 修改并提交
4. 发起 Pull Request，描述改动内容与目的

请遵循项目的代码风格及提交规范。

---

## 许可证

本博客采用 [MIT License](LICENSE) 许可，允许自由复制、修改与分发。

---

## 联系方式

* 博客主页：[https://smartazu.github.io/](https://smartazu.github.io/)
* GitHub 仓库：[SmartAzu/smartazu.github.io](https://github.com/SmartAzu/smartazu.github.io)
* 作者：Azu（阿祖）


