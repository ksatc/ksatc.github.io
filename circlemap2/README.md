# CircleMap2 サイト

このディレクトリは、CircleMap2（コミケ地図作成アプリ）の公式サイトです。
構成・運用方法は [circleScope](../circleScope/) を踏襲しています。

## 技術スタック

- **Jekyll**: 静的サイトジェネレーター
- **テーマ**: [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/)
- **プラグイン**: jekyll-feed, jekyll-seo-tag, jekyll-sitemap

## ディレクトリ構成

```
circlemap2/
├── _config.yml          # サイト全体の設定ファイル
├── _data/
│   └── navigation.yml   # ヘッダーナビゲーション設定
├── assets/images/       # 画像（現状はCircleMap旧アプリ画像の仮置き）
├── index.markdown       # トップページ
├── privacy.markdown     # プライバシーポリシー
├── Gemfile              # Ruby依存関係
└── README.md            # このファイル
```

## ローカル開発

```bash
cd circlemap2
bundle install
bundle exec jekyll serve --livereload
```

`http://localhost:4000/circlemap2/` で確認できます。

## デプロイ

`.github/workflows/jekyll-circlemap2.yml` により、`circlemap2/**` への push で自動ビルド・デプロイされます（`circleScope`用ワークフローと同じ方式）。

## TODO

- [ ] `assets/images/` の画像をCircleMap2の実際のスクリーンショットに差し替える
- [ ] App Store配布リンクを確定させる（現在は準備中のプレースホルダー）
