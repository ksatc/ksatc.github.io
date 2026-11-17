# ksatc.github.io

ksatc のアプリ公式サイト（https://ksatc.github.io/）。リポジトリ全体を **1つの Jekyll サイト**としてビルドし、GitHub Pages にデプロイする。

## 構成

```
/
├── _config.yml            # サイト共通設定（テーマ・プラグイン・ディレクトリごとの defaults）
├── _data/apps.yml         # アプリごとの設定（サイト名・説明・OGP画像・ヘッダーナビ）
├── _layouts/default.html  # masthead/footer の include_cached にアプリごとのキャッシュキーを渡す
├── _includes/             # minimal-mistakes のオーバーライド（masthead / seo / footer）
├── index.md               # トップページ（アプリ一覧）
├── circleScope/           # CircleScope（Mac）
├── circlecheck/           # CircleCheck（iPhone）
├── circlemap/             # CircleMap（iPad・旧版）
├── circlemap2/            # CircleMap2（iPad）
├── kantimer/              # 艦隊たいまー（Bootstrap の静的 HTML。Jekyll はそのままコピーする）
├── app-ads.txt
└── Gemfile
```

- テーマは [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)。プラグインは jekyll-seo-tag と jekyll-sitemap。
- 各アプリのディレクトリには `app: <キー>` が `_config.yml` の `defaults` で割り当てられ、`_includes/` のオーバーライドが `_data/apps.yml` の該当アプリの設定（マストヘッドのタイトルとナビ、`<title>` の区切り、description、OGP 画像、author）を使う。

## ローカル開発

```bash
bundle install
bundle exec jekyll serve --livereload
```

http://localhost:4000/ でトップページ、http://localhost:4000/circlemap2/ などで各アプリのページを確認できる。`_config.yml` を変更したらサーバーを再起動すること。

## ページの追加

アプリのディレクトリに `.markdown` を作り、`permalink` にはアプリのディレクトリ名を含めて書く。

```markdown
---
layout: single
title: CircleMap2 – 新しいページ
permalink: /circlemap2/new-page/
---
```

ヘッダーナビに出したいときは `_data/apps.yml` の該当アプリの `nav` に追加する。

## アプリを追加するとき

1. ディレクトリを作る（例 `newapp/`）
2. `_data/apps.yml` に `newapp:` を追加する（title / title_separator / description / home / og_image / author / nav）
3. `_config.yml` の `defaults` に `path: "newapp"` → `app: newapp` を追加する
4. `index.md` のアプリ一覧に追加する

## デプロイ

`master` への push で `.github/workflows/jekyll-pages.yml` がルートで `jekyll build` を実行し、`_site/` を GitHub Pages にデプロイする。

## 注意事項

- **プライバシーポリシーの URL は変えないこと**（App Store Connect に登録済み）。
  - `/circlecheck/privacy.html`、`/circlemap/privacy.html`
  - `/circlemap2/privacy/`、`/circleScope/privacy/`
- 本文中のリンクや画像は `/circlemap2/assets/...` のように、アプリのディレクトリから始まる絶対パスで書く。
