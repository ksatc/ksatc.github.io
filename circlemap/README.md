# CircleMap サイト

このディレクトリは、CircleMap（iPad用コミケ地図作成アプリ）の公式サイトです。
構成・運用方法は [circleScope](../circleScope/) / [circlemap2](../circlemap2/) を踏襲しています。

## 技術スタック

- **Jekyll**: 静的サイトジェネレーター
- **テーマ**: [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/)
- **プラグイン**: jekyll-feed, jekyll-seo-tag, jekyll-sitemap

## ディレクトリ構成

```
circlemap/
├── _config.yml          # サイト全体の設定ファイル
├── _data/
│   └── navigation.yml   # ヘッダーナビゲーション設定
├── assets/images/        # 画像
├── index.markdown       # トップページ
├── privacy.markdown     # プライバシーポリシー（permalink: /privacy.html で旧URLを維持）
├── Gemfile              # Ruby依存関係
└── README.md            # このファイル
```

## ローカル開発

```bash
cd circlemap
bundle install
bundle exec jekyll serve --livereload
```

`http://localhost:4000/circlemap/` で確認できます。

## デプロイ

`.github/workflows/jekyll-pages.yml` により、`circlemap/**` への push で自動ビルド・デプロイされます（circleScope/circlemap2/circlecheckと同じ統合ワークフロー）。

## 注意事項

- プライバシーポリシーのURLはApp Store Connectに登録されている可能性があるため、`/privacy.html`のまま維持しています（circlemap2の`/privacy/`パターンとは異なります）。
- 旧Bootstrapモーダルによる地図比較（自由レイアウト機能の説明）は、2枚並べた`.image-popup`のlightbox画像に置き換えています。
