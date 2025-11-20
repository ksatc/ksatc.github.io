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

### GitHub Pages（GitHub Actions使用）

このサイトはサブディレクトリ構成のため、GitHub Actionsを使用してデプロイします。

#### 初回セットアップ

1. GitHubリポジトリの **Settings** → **Pages** に移動
2. **Source** を `GitHub Actions` に設定
3. 完了（ワークフローファイルは既に `.github/workflows/jekyll-circlescope.yml` に配置済み）

#### デプロイ手順

1. 変更をコミット
   ```bash
   git add .
   git commit -m "Update CircleScope site"
   ```

2. `master` ブランチにプッシュ
   ```bash
   git push origin master
   ```

3. GitHub Actionsが自動的にビルド・デプロイを実行
   - GitHubリポジトリの **Actions** タブで進捗を確認可能
   - ビルドには2-3分程度かかります

4. デプロイ完了後、https://ksatc.github.io/circleScope/ でアクセス可能

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
