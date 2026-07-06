# Kyomenjinse

鏡面人世（きょうめんじんせ）公式サイト  
江戸視点で現世を奏でる音楽プロジェクト。

---

## ファイル構成

```
/
├── index.html        トップページ
├── songs.html        楽曲一覧
├── song.html         楽曲詳細（?id= で動的表示）
├── albums.html       アルバム一覧
├── admin.html        楽曲管理フォーム（noindex）
├── data.js           楽曲・アルバム・サイト情報のデータソース
├── main.js           共通JavaScript
├── style.css         共通スタイル
├── sitemap.xml       サイトマップ（自動生成）
├── robots.txt        クローラー設定
├── CNAME             カスタムドメイン設定
├── package.json      npm スクリプト定義
├── scripts/
│   └── generate-sitemap.js   サイトマップ自動生成スクリプト
└── images/
    ├── albums/       アルバムアートワーク
    └── songs/        楽曲ジャケット画像
```

---

## sitemap.xml の生成方法

### 前提

- Node.js 16 以上がインストールされていること
- `data.js` の `SITE_INFO.siteUrl` に正しいURLが設定されていること

### 生成コマンド

```bash
# npm 経由（推奨）
npm run sitemap

# または直接実行
node scripts/generate-sitemap.js
```

実行するとリポジトリ直下の `sitemap.xml` が上書き生成されます。

### 出力例

```
✅ sitemap.xml を生成しました → /path/to/sitemap.xml
   登録URL数: 18
   - https://kyomenjinse.com/
   - https://kyomenjinse.com/albums.html
   - https://kyomenjinse.com/song.html?id=01
   ...
```

---

## 新しい曲を追加したときの手順

1. `data.js` の `SONGS` 配列に曲データを追記する
2. `npm run sitemap` を実行して `sitemap.xml` を再生成する
3. `data.js` と `sitemap.xml` の両方を GitHub へプッシュする

---

## sitemap.xml の仕様

| 項目 | 内容 |
|---|---|
| フォーマット | UTF-8・XML宣言付き |
| 準拠規格 | Sitemaps.org Protocol |
| Google Search Console | 対応 |
| 重複URL | 自動除外 |
| ソート順 | URL 辞書順 |

### priority と changefreq

| ページ種別 | priority | changefreq |
|---|---|---|
| トップページ | 1.0 | daily |
| 楽曲一覧・アルバム一覧 | 0.9 / 0.8 | weekly |
| 楽曲詳細 | 0.7 | monthly |

---

## サイトマップへの新ページ種別追加方法

`scripts/generate-sitemap.js` 内の `PAGE_GENERATORS` 配列に関数を追加するだけです。

```js
// 例：playlist.html?id= を追加する場合
function generatePlaylistUrls() {
  PLAYLISTS.forEach(pl => {
    addUrl(
      `${BASE_URL}/playlist.html?id=${encodeURIComponent(pl.id)}`,
      toISO(pl.updatedAt),
      'weekly',
      '0.75'
    );
  });
}
// PAGE_GENERATORS 配列に追加するだけで反映される
```

---

## Google Search Console への登録

1. [Google Search Console](https://search.google.com/search-console) を開く
2. プロパティに `https://kyomenjinse.com` を追加する
3. 左メニュー「サイトマップ」→ `https://kyomenjinse.com/sitemap.xml` を送信する
