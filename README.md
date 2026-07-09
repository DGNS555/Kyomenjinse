# Kyomenjinse
---

## 楽曲IDの命名ルール（英字スラッグ）

### ルール

| 項目 | 内容 |
|---|---|
| 文字種 | 英小文字・数字・ハイフン（`-`）のみ |
| 区切り | 単語間はハイフン（`-`）で繋ぐ |
| 長さ | 3〜30文字程度 |
| ベース | 日本語タイトルのローマ字読み（訓令式またはヘボン式）|
| 重複 | 既存スラッグと重複しないこと |

### 例

```
銭の花道  → zeni-no-hanamichi
鬼は内    → oni-wa-uchi
藍傘      → aigasa
```

### 新曲追加時のIDの付け方

1. 曲タイトルを日本語読みでローマ字化する
2. 単語の区切りにハイフンを入れる
3. 既存スラッグと重複していないか確認する
4. `data.js` の `id:` フィールドに設定する
5. `npm run sitemap` を実行して `sitemap.xml` を再生成する

```js
// 例：新曲「春の霞」を追加する場合
{
  id: "haru-no-kasumi",   // ← 英字スラッグ
  title: "春の霞",
  ...
}
```

> `LEGACY_ID_MAP` への追記は不要。新曲は最初から英字スラッグで登録する。

---

## 旧ID → 新スラッグ 対応表（移行履歴）

| 旧ID | 新スラッグ | 曲名 |
|---|---|---|
| 01 | zeni-no-hanamichi | 銭の花道 |
| 02 | oni-wa-uchi | 鬼は内 |
| 03 | yokuse | 欲世 |
| 04 | kage-asobi | 影遊び |
| 05 | kyojitsu-kawaraban | 虚実瓦版 |
| 06 | hiji-chomoku | 飛耳長目 |
| 07 | oedo-daienjo | お江戸大炎上 |
| 08 | komyo-norito | 光網祝詞 |
| 09 | hibi-jojo | 日々上々 |
| 10 | mochitsu-motaretsu | 持ちつ持たれつ |
| 11 | dodo-bushi | 働々節 |
| 12 | komoriheta | 子守下手 |
| 13 | aigasa | 藍傘 |
| 14 | watashibune | 渡し舟 |
| 15 | onmai-joi | 恩毎上位 |

旧URL（`song.html?id=01` 等）へのアクセスは `LEGACY_ID_MAP` により自動転送される。
