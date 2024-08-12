<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![Release][release-shield]][release-url]

<br />
<div align="center">
  <a href="https://github.com/gaomingzhao666/AI-Prompts">
    <img src="/public/favicon.ico" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">AI Prompts</h3>

  <p align="center">
    ⭐ 実用的な AI プロンプトを列挙するための迅速で軽量な Web アプリケーション ⭐
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
  <summary>目次</summary>
  <ul>
    <li><a href="#このプロジェクトについて">このプロジェクトについて</a> </li>  
    <li><a href="#技術スタック">技術スタック</a></li>  
    <li><a href="#前提条件">前提環境</a></li>  
    <li><a href="#お始め">お始め</a></li>  
    <li><a href="#参考文献">参考文献</a></li>  
    <li><a href="#貢献者">貢献者</a></li>  
    <li><a href="#オープンソースライセンス">オープンソースライセンス</a></li> 
  </ul>
</details>

## このプロジェクトについて

<p align="center">
    <img src="/SCREENSHOT/index-mockup.png">
</p>

> 上はタブレットデバイスサイズに適したインデックスページのスクリーンショットです。詳細なスクリーンショットは[こちら](https://github.com/gaomingzhao666/AI-Prompts/tree/main/SCREENSHOT)

AI-Prompts は、実用的で人気のある AI プロンプトをリストアップするための迅速で軽量な Web アプリです。誰でも `prompts.json` の内容を変更し、`Pull Request` を提出することで、このオープンソースプロジェクトに貢献できます。

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## 技術スタック

- Svelte
- SvelteKit
- TailwindCSS
- Magic UI
- Localize with svelte-i18n
- Typescript with ES6+ syntax
- Dockerfile

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## 前提環境

- NodeJS LTS 20+

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## お始め

### このプロジェクトをクローンする

```sh
$ https://github.com/gaomingzhao666/AI-Prompts.git # クローン
$ cd AI-Prompts
$ npm install # 必要な依存関係をインストール
$ npm run dev # 実行
```

### Dockerを使用する

1. このプロジェクトをクローンまたはダウンロードしてください。
2. コンピュータに `Docker Desktop` がインストールされていることを確認してください。
3. `VScode` に `Docker extension` をインストールしてください。
4. `Dockerfile` を右クリックし、 `ビルドイメージ` オプションを選択してください。
5. `Docker Desktop` を開いて、コンテナを起動してください。

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## このプロジェクトにプロンプトを貢献する方法

`prompts.json` ファイルにアクセスし、既存のデータ構造に従って内容を追加し、最後は `Pull Request` を提出することで貢献できます。

## 参考文献

<p align="left">https://github.com/sveltejs/svelte/issues/9287</p>
<p align="left">https://kit.svelte.dev/docs/configuration#alias</p>

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## 貢献者

このプロジェクトは gaomingzhao666@Nano に開発されました。

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## オープンソースライセンス

[MIT License](https://github.com/gaomingzhao666/AI-Prompts/blob/main/LICENSE)

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/AI-Prompts?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/AI-Prompts/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/AI-Prompts/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/AI-Prompts?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/AI-Prompts/releases
