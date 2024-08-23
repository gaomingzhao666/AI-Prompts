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
    ⭐ A fast and lightweight web application that lists useful and favorite AI/GPT prompts ⭐
    <br />
    <br />
    <a href="https://github.com/gaomingzhao666/AI-Prompts/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/AI-Prompts/blob/master/README-CN.md">简体中文</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/AI-Prompts/blob/master/README-JP.md">日本語</a>
  </p>
</div>

<details open>
  <summary>Directory</summary>
  <ul>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#references">References</a></li>
    <li><a href="#contributor">Contributor</a></li>
    <li><a href="#license">LICENSE</a></li>
  </ul>
</details>

## About the Project

<p align="center">
    <img src="/SCREENSHOT/index-mockup.png">
    <img src="/SCREENSHOT/prompts-mockup.png">
</p>

> The image shown here is a index-page for laptop-size, [click here](https://github.com/gaomingzhao666/AI-Prompts/tree/main/SCREENSHOT) to see more detailed screenshot for this application.

AI-Prompts is a fast and lightweight web application that lists useful and favorite AI prompts. Everyone can contribute to this open-source project by add prompts to `prompts.json` file and then making a `Pull Request`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tech Stack

- Svelte
- SvelteKit
- TailwindCSS
- Magic UI
- Localize with svelte-i18n
- Typescript with ES6+ syntax
- Dockerfile

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Prerequisites

- NodeJS LTS 20+

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Clone this project

```sh
$ https://github.com/gaomingzhao666/AI-Prompts.git # clone the project
$ cd AI-Prompts
$ pnpm install # install dependencies that this project needs
$ pnpm dev # run
```

### Use Docker

1. Clone or download this project.
2. Ensure you have `Docker Desktop` installed on your computer.
3. Install the `Docker extension` in your `VScode`.
4. Right-click the `Dockerfile` in this project and select the `Build Image` option.
5. Open `Docker Desktop` and run the container.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How to Contribute

You can access the `prompts.json` file and add prompts by abiding the existed data structure, and then make a `Pull Request` to this repository

## References

<p align="left">https://github.com/sveltejs/svelte/issues/9287</p>
<p align="left">https://kit.svelte.dev/docs/configuration#alias</p>
<p align="left"> https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/</p>
<p align="left"> https://github.com/orgs/vercel/discussions/5208</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributor

The project developed by gaomingzhao666@Nano

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## LICENSE

[MIT License](https://github.com/gaomingzhao666/AI-Prompts/blob/main/LICENSE)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/AI-Prompts?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/AI-Prompts/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/AI-Prompts/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/AI-Prompts?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/AI-Prompts/releases
