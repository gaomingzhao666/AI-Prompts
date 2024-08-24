<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![Release][release-shield]][release-url]

<br />
<div align="center">
  <a href="https://github.com/gaomingzhao666/AI-Prompts">
    <img src="/static/favicon.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">AI Prompts</h3>

  <p align="center">
    ⭐ 一个用于列举实用AI提示词的迅速轻量的Web应用程序 ⭐
    <br />
    <br />
    <a href="https://github.com/gaomingzhao666/AI-Prompts/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/AI-Prompts/blob/master/README-CN.md">简体中文</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/AI-Prompts/blob/master/README-JA.md">日本語</a>
  </p>
</div>

<details open>
  <summary>目录</summary>
  <ul>
    <li><a href="#关于此项目">关于此项目</a></li>
    <li><a href="#技术栈">技术栈</a></li>
    <li><a href="#前置要求">前置要求</a></li>
    <li><a href="#开始">开始</a></li>
    <li><a href="#参考文献">参考文献</a></li>
    <li><a href="#贡献者">贡献者</a></li>
    <li><a href="#开源协议">开源协议</a></li>
  </ul>
</details>

## 关于此项目

<p align="center">
    <img src="/SCREENSHOT/index-mockup.png">
    <img src="/SCREENSHOT/prompts-mockup.png">
</p>

> 上方是适用于平板设备尺寸的 index 页面截图, [点击此处](https://github.com/gaomingzhao666/AI-Prompts/tree/main/SCREENSHOT) 可查看更多详细截图

AI-Prompts是一个快速且轻量级的 Web 应用，列出了实用和受欢迎的AI提示词。每个人都可以通过修改 `prompts.json` 中的内容并提交 `Pull Request` 为此开源项目做出贡献。

<p align="right">(<a href="#readme-top">返回顶层</a>)</p>

## 技术栈

- Svelte
- SvelteKit
- TailwindCSS
- Magic UI
- Localize with svelte-i18n
- Typescript with ES6+ syntax
- Dockerfile

<p align="right">(<a href="#readme-top">返回顶层</a>)</p>

## 前置要求

- NodeJS LTS 20+

<p align="right">(<a href="#readme-top">返回顶层</a>)</p>

## 开始

### 克隆此项目

```sh
$ https://github.com/gaomingzhao666/AI-Prompts.git # 克隆
$ cd AI-Prompts
$ npm install # 安装所需依赖
$ npm run dev # 运行
```

### 使用 Docker

1. 克隆或者下载此项目.
2. 确保电脑中已安装 `Docker Desktop`.
3. Install the `Docker extension` in your `VScode`.
4. 右击 `Dockerfile` 并选择 `Build Image` 选项.
5. 打开 `Docker Desktop` 启动此容器.

<p align="right">(<a href="#readme-top">返回顶层</a>)</p>

## 如何给此项目贡献提示词

你可以通过访问 `prompts.json` 文件并遵循已存在的数据结构添加内容，然后提交 `Pull Request` 即可

## 参考文献

<p align="left">https://github.com/sveltejs/svelte/issues/9287</p>
<p align="left">https://kit.svelte.dev/docs/configuration#alias</p>
<p align="left"> https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/</p>
<p align="left"> https://github.com/orgs/vercel/discussions/5208</p>

<p align="right">(<a href="#readme-top">返回顶层</a>)</p>

## 贡献者

此项目由 gaomingzhao666@Nano 开发

<p align="right">(<a href="#readme-top">返回顶层</a>)</p>

## 开源协议

[MIT License](https://github.com/gaomingzhao666/AI-Prompts/blob/main/LICENSE)

<p align="right">(<a href="#readme-top">返回顶层</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/AI-Prompts?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/AI-Prompts/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/AI-Prompts/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/AI-Prompts?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/AI-Prompts/releases
