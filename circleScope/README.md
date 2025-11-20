# CircleScope サイト

このディレクトリは、CircleScope（Mac用コミケカタログ閲覧アプリ）の公式サイトです。

## 技術スタック

- **Jekyll**: 静的サイトジェネレーター
- **テーマ**: [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/)
- **プラグイン**:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap

## ディレクトリ構成

```
circleScope/
├── _config.yml          # サイト全体の設定ファイル
├── _data/
│   └── navigation.yml   # ヘッダーナビゲーション設定
├── _site/               # ビルド後の静的ファイル（Gitには含めない）
├── index.markdown       # トップページ
├── faq.markdown         # FAQページ
├── Gemfile             # Ruby依存関係
└── README.md           # このファイル
```

## ローカル開発環境のセットアップ

### 1. 依存関係のインストール

```bash
cd circleScope
bundle install
```

### 2. 開発サーバーの起動

```bash
bundle exec jekyll serve --livereload
```

サイトは `http://localhost:4000/circleScope/` で表示されます。

ファイルを変更すると自動的にリロードされます。

### 3. ビルド

```bash
bundle exec jekyll build
```

ビルド結果は `_site/` ディレクトリに出力されます。

## ページの追加・編集

### 新しいページを追加する

1. ルートディレクトリに `.markdown` ファイルを作成
2. Front Matter（YAML形式）でレイアウトやタイトルを設定

例：
```markdown
---
layout: single
title: "新しいページ"
permalink: /new-page/
---

ページの内容をここに記述
```

3. ナビゲーションに追加する場合は `_data/navigation.yml` を編集

### 既存ページの編集

- `index.markdown`: トップページ
- `faq.markdown`: FAQページ

各ファイルを直接編集してください。

## 設定ファイル

### _config.yml

サイト全体の設定を管理：
- サイト名、説明
- SNSリンク
- テーマ設定
- プラグイン設定
- デフォルトレイアウト

**重要**: `_config.yml` を変更した場合は、Jekyllサーバーを再起動する必要があります。

### _data/navigation.yml

ヘッダーのナビゲーションメニューを設定：
```yaml
main:
  - title: "ホーム"
    url: /circleScope/
  - title: "FAQ"
    url: /circleScope/faq/
```

## デプロイ

GitHub Pagesを使用している場合：
1. 変更をコミット
2. `master` ブランチにプッシュ
3. GitHub Pagesが自動的にビルド・デプロイ

## トラブルシューティング

### Jekyllサーバーが起動しない

- Bundlerで依存関係がインストールされているか確認
- Ruby のバージョンを確認（Gemfile参照）

### _config.yml の変更が反映されない

- Jekyllサーバーを再起動してください
- `_config.yml` はホットリロードされません

### スタイルが崩れる

- `baseurl` と `url` の設定を確認
- ブラウザのキャッシュをクリア

## 参考リンク

- [Jekyll公式ドキュメント](https://jekyllrb.com/docs/)
- [Minimal Mistakes テーマドキュメント](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- [GitHub Pages](https://pages.github.com/)

## メンテナンス

### 定期的な更新

- Gemの更新: `bundle update`
- セキュリティアップデート: `bundle audit`

### バックアップ

重要なファイル：
- `_config.yml`
- `_data/navigation.yml`
- すべての `.markdown` ファイル

これらのファイルは必ずバージョン管理に含めてください。
