---
layout: splash
author_profile: false
read_time: false
comments: false
title: 艦隊たいまー – 艦これの待ち時間を一括管理するiPhoneアラームアプリ
description: 艦隊たいまーは、艦これの遠征・建造などの待ち時間をまとめて管理できるiPhone用アラームアプリです。
feature_row_top:
  - image_path: /kantimer/img/app_top.png
    alt: "艦隊たいまー TOP画面"
    title: '全部<span class="kt-particle">の</span>タイマー<span class="kt-particle">を</span>一括チェック！'
    excerpt: "トップ画面に全てのタイマーが並ぶので、アプリを開けば残り時間がひと目でわかります。"
feature_row_list:
  - image_path: /kantimer/img/app_list.png
    alt: "艦隊たいまー 遠征・建造リスト"
    title: '遠征<span class="kt-particle">と</span>建造<span class="kt-particle">を</span>即登録'
    excerpt: "全ての遠征と建造の所要時間をあらかじめ用意。一覧から選んでタップするだけでタイマーをセットできます。"
feature_row_input:
  - image_path: /kantimer/img/app_input.png
    alt: "艦隊たいまー テンキー入力"
    title: '細かい時間<span class="kt-particle">は</span>テンキー<span class="kt-particle">で</span>入力'
    excerpt: "遠征・建造・入渠のどれでも、専用のテンキーで時・分・秒を直接入力できます。ゲームに表示された時間をそのまま打ち込むだけです。"
feature_row_widget:
  - image_path: /kantimer/img/app_widget.webp
    alt: "艦隊たいまー ホーム画面のウィジェット"
    title: 'ホーム画面<span class="kt-particle">で</span>残り時間<span class="kt-particle">を</span>チェック'
    excerpt: |
      ウィジェットに対応。アプリを開かなくても、ホーム画面で残り時間を確認できます。サイズは小・中・大の3種類から選べます。

      <small class="kt-note">※ウィジェットの利用には、サブスクリプションへの登録が必要です。</small>
---

<div class="kt-hero">
  <div class="kt-hero__inner">
      <img src="/kantimer/img/app-icon.png" alt="艦隊たいまー アプリアイコン" class="kt-hero__icon">
      <h1 class="kt-hero__title">艦隊たいまー</h1>
      <p class="kt-hero__lead">艦これ<span class="kt-particle">の</span>待ち時間<span class="kt-particle">を</span>一括管理</p>
      <a href="https://apps.apple.com/us/app/%E8%89%A6%E9%9A%8A%E3%81%9F%E3%81%84%E3%81%BE%E3%83%BC-for-%E8%89%A6%E3%81%93%E3%82%8C/id829519168?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&amp;releaseDate=1394064000&h=4f0096e7451c08769c16ea1ce2bd8973" alt="App Storeからダウンロード" style="border-radius: 13px; width: 250px; height: 83px;"></a>
  </div>
</div>

<style>
  /* ページの最大幅：テーマ標準（最大 1280px）より狭くする。ナビ・本文・フッター・緑ヘッダーの中身で揃える */
  :root { --kt-max-width: 880px; }
  #main,
  .masthead__inner-wrap,
  .page__footer footer,
  .kt-hero__inner { max-width: var(--kt-max-width); margin-left: auto; margin-right: auto; }

  /* ヘッダー：緑背景を画面幅いっぱいに広げ、中身は中央揃え。
     緑は白文字とのコントラスト比が 4.5:1 以上になる濃さにしている */
  .kt-hero {
    width: 100vw;
    /* 下の余白は 0 にし、直後の機能紹介の行の上余白（2.5em）だけで区切る */
    margin: -2em calc(50% - 50vw) 0;
    background: #2a7f63;
    color: #fff;
  }
  .kt-hero__inner { padding: 2em 1em; text-align: center; }
  .kt-hero__icon { width: 80px; height: auto; border-radius: 18px; display: block; margin: 0 auto; }
  .kt-hero__title { color: #fff; font-size: 3em; font-weight: 300; margin: 0.3em 0 0.2em; border: 0; }
  .kt-hero__lead { font-size: 1.25em; margin: 0 0 1em; }
  @media (max-width: 47.9em) {
    .kt-hero__inner { padding: 1.5em 1em; }
    .kt-hero__icon { width: 64px; border-radius: 14px; }
    .kt-hero__title { font-size: 2.25em; }
    .feature__wrapper .feature__item--left .archive__item-teaser,
    .feature__wrapper .feature__item--right .archive__item-teaser { max-width: 220px; }
  }
  body { overflow-x: hidden; }

  /* キャッチコピー・見出しの助詞（の・を・と など）を小さくしてキーワードを目立たせる。
     スマホでも読めるよう 13px を下限にする */
  .kt-particle { font-size: max(0.8em, 13px); }

  /* 日本語フォント：OS 標準の日本語ゴシックを優先（Web フォントは読み込まない） */
  body, h1, h2, h3, h4,
  .masthead, .greedy-nav a, .page__footer,
  .archive__item-title {
    font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP",
      "Yu Gothic UI", "Yu Gothic", Meiryo, -apple-system, BlinkMacSystemFont, sans-serif;
  }
  .page__content p, .page__content li { line-height: 1.8; }

  /* 機能紹介の文字：テーマ標準（小さめ）より大きく・濃くする */
  .archive__item-title { font-size: 1.4em; color: #222; line-height: 1.4; word-break: auto-phrase; }
  .archive__item-excerpt,
  .archive__item-excerpt p { font-size: 1rem; color: #333; line-height: 1.8; }
  /* 右寄せの行も文章は左揃えにする（日本語の複数行は右揃えだと読みにくい） */
  .feature__item--right .archive__item-body { text-align: left; }

  /* 機能紹介の行：区切り線をやめて余白で区切り、右寄せの行だけ薄いグレーの帯を画面幅いっぱいに敷く */
  .feature__wrapper { border-bottom: 0; margin-bottom: 0; padding: 2.5em 0; }
  .feature__wrapper:has(.feature__item--right) {
    background: #f6f7f7;
    box-shadow: 0 0 0 100vmax #f6f7f7;
    clip-path: inset(0 -100vmax);
  }

  /* 但し書き（有料機能の条件など）：本文より小さく薄く。スマホでも読めるよう 13px を下限にする */
  .kt-note { font-size: max(0.8em, 13px); color: #595959; }

  /* ウィジェットの画像は iPhone の枠がない切り抜きなので、角を丸めて影を付ける */
  .archive__item-teaser img[src$="app_widget.webp"] {
    border-radius: 24px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  /* 機能紹介：スクリーンショットが縦長なので画像の列の幅を抑える */
  .feature__item--left .archive__item-teaser,
  .feature__item--right .archive__item-teaser { max-width: 260px; margin: 0 auto; }
</style>

{% include feature_row id="feature_row_top" type="left" %}

{% include feature_row id="feature_row_list" type="right" %}

{% include feature_row id="feature_row_input" type="left" %}

{% include feature_row id="feature_row_widget" type="right" %}



---

## ダウンロード {#store}

<a href="https://apps.apple.com/us/app/%E8%89%A6%E9%9A%8A%E3%81%9F%E3%81%84%E3%81%BE%E3%83%BC-for-%E8%89%A6%E3%81%93%E3%82%8C/id829519168?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&amp;releaseDate=1394064000&h=4f0096e7451c08769c16ea1ce2bd8973" alt="App Storeからダウンロード" style="border-radius: 13px; width: 250px; height: 83px;"></a>

---

## サポート

ご意見・バグなどは[こちらのフォーム](https://docs.google.com/forms/d/e/1FAIpQLSdOeNdTRjGcAoQMHkb81oYGBQm2uUeBdLIOqsXURd2MPtk1yQ/viewform?usp=sf_link){:target="_blank" rel="noopener"}へお寄せください。
