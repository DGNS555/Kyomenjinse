/**
 * scripts/generate-sitemap.js
 * =====================================================
 * 鏡面人世 — sitemap.xml 自動生成スクリプト
 *
 * 【使い方】
 *   node scripts/generate-sitemap.js
 *   または
 *   npm run sitemap
 *
 * 【動作】
 *   data.js を読み込み、SONGS・ALBUMS・SITE_INFO を取得して
 *   Sitemaps.org 仕様準拠の sitemap.xml をリポジトリ直下へ出力する。
 *
 * 【新しい曲・アルバムを追加した場合】
 *   data.js を更新してこのスクリプトを実行するだけで sitemap.xml が更新される。
 *
 * 【将来の拡張】
 *   PAGE_GENERATORS 配列に新しいジェネレーター関数を追加するだけで
 *   albums.html?id= / artists.html?id= / playlist.html?id= 等にも対応できる。
 * =====================================================
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─────────────────────────────────────────────────────
// 1. data.js の読み込み
//    ブラウザ向けの const 宣言をそのまま Node.js で評価する。
//    Function コンストラクタで安全にサンドボックス実行し、
//    SONGS / ALBUMS / SITE_INFO を取り出す。
// ─────────────────────────────────────────────────────
const ROOT      = path.resolve(__dirname, '..');          // リポジトリ直下
const DATA_PATH = path.join(ROOT, 'data.js');
const OUT_PATH  = path.join(ROOT, 'sitemap.xml');

if (!fs.existsSync(DATA_PATH)) {
  console.error('[ERROR] data.js が見つかりません:', DATA_PATH);
  process.exit(1);
}

const dataCode = fs.readFileSync(DATA_PATH, 'utf8');

// const/let → var に変換してから Function スコープで評価することで
// Node.js のグローバルスコープを汚染せずに変数を取り出す。
const sandbox = new Function(`
  ${dataCode.replace(/\bconst\b/g, 'var').replace(/\blet\b/g, 'var')}
  return { SONGS, ALBUMS, SITE_INFO };
`);

let SONGS, ALBUMS, SITE_INFO;
try {
  ({ SONGS, ALBUMS, SITE_INFO } = sandbox());
} catch (e) {
  console.error('[ERROR] data.js のパースに失敗しました:', e.message);
  process.exit(1);
}

const BASE_URL = (SITE_INFO && SITE_INFO.siteUrl
  ? SITE_INFO.siteUrl
  : 'https://kyomenjinse.com'
).replace(/\/$/, ''); // 末尾スラッシュを除去

// ─────────────────────────────────────────────────────
// 2. 日付ユーティリティ
// ─────────────────────────────────────────────────────
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

/**
 * "2024.03.21" / "2024.3.21" などを "2024-03-21"（ISO 8601）に変換する。
 * パースできない文字列（"Coming soon" 等）は今日の日付を返す。
 */
function toISO(dateStr) {
  if (!dateStr) return TODAY;
  const m = String(dateStr).match(/^(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
  if (!m) return TODAY;
  const [, y, mo, d] = m;
  return `${y}-${mo.padStart(2, '0')}-${d.padStart(2, '0')}`;
}

// ─────────────────────────────────────────────────────
// 3. URL エントリの定義
//
//    各エントリは { loc, lastmod, changefreq, priority } を持つ。
//    URL の重複除去のために Set で管理する。
// ─────────────────────────────────────────────────────

/** @type {Map<string, {lastmod:string, changefreq:string, priority:string}>} */
const urlMap = new Map(); // key = loc で重複排除

/** URLエントリを登録する（重複は後から来たものを無視） */
function addUrl(loc, lastmod, changefreq, priority) {
  if (!urlMap.has(loc)) {
    urlMap.set(loc, { lastmod, changefreq, priority: String(priority) });
  }
}

// ─────────────────────────────────────────────────────
// 4. 固定ページ
// ─────────────────────────────────────────────────────
addUrl(`${BASE_URL}/`,           TODAY,  'daily',   '1.0');
addUrl(`${BASE_URL}/songs.html`, TODAY,  'weekly',  '0.9');
addUrl(`${BASE_URL}/albums.html`,TODAY,  'weekly',  '0.8');

// ─────────────────────────────────────────────────────
// 5. PAGE_GENERATORS
//    将来的に albums.html?id= / artists.html?id= / playlist.html?id= 等が
//    増えても、ここに関数を追加するだけで対応できる構造にしている。
// ─────────────────────────────────────────────────────

/**
 * 各ジェネレーター関数はデータ配列を受け取り、
 * addUrl() を呼び出して URL を登録する。
 */
const PAGE_GENERATORS = [

  // ── 楽曲ページ ──────────────────────────────────────
  // /song.html?id=曲ID
  // lastmod: releaseDate → updatedAt → 今日の日付 の優先順
  function generateSongUrls() {
    if (!Array.isArray(SONGS)) return;
    SONGS.forEach(song => {
      if (!song.id) return;
      const loc      = `${BASE_URL}/song.html?id=${encodeURIComponent(song.id)}`;
      const lastmod  = toISO(song.updatedAt || song.releaseDate);
      addUrl(loc, lastmod, 'monthly', '0.7');
    });
  },

  // ── アルバム個別ページ（将来用：albums.html#album-01 形式） ──
  // 現在は albums.html のみを固定ページとして登録済み。
  // 将来 /album.html?id= 形式の個別ページができた場合は下記コメントを解除して使う。
  //
  // function generateAlbumUrls() {
  //   if (!Array.isArray(ALBUMS)) return;
  //   ALBUMS.forEach(album => {
  //     if (!album.id) return;
  //     const loc     = `${BASE_URL}/album.html?id=${encodeURIComponent(album.id)}`;
  //     const lastmod = toISO(album.releaseDate || TODAY);
  //     addUrl(loc, lastmod, 'monthly', '0.8');
  //   });
  // },

  // ── アーティストページ（将来用） ──
  // function generateArtistUrls() { ... }

  // ── プレイリストページ（将来用） ──
  // function generatePlaylistUrls() { ... }

];

// ジェネレーターを全て実行
PAGE_GENERATORS.forEach(fn => fn());

// ─────────────────────────────────────────────────────
// 6. URL をソートして XML を組み立てる
//    ソート順：固定ページ（/）→ /songs.html → /albums.html →
//              /song.html?id=... （locの辞書順）
// ─────────────────────────────────────────────────────
const sortedEntries = [...urlMap.entries()].sort(([a], [b]) => a.localeCompare(b));

/**
 * XML 特殊文字をエスケープする。
 * URL に & が含まれる（?id=xxx&foo=bar 等）場合に必要。
 */
function escXml(str) {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&apos;');
}

const urlElements = sortedEntries.map(([loc, { lastmod, changefreq, priority }]) =>
  `  <url>\n` +
  `    <loc>${escXml(loc)}</loc>\n` +
  `    <lastmod>${lastmod}</lastmod>\n` +
  `    <changefreq>${changefreq}</changefreq>\n` +
  `    <priority>${priority}</priority>\n` +
  `  </url>`
).join('\n');

// ─────────────────────────────────────────────────────
// 7. sitemap.xml を出力
//    UTF-8・XML宣言付き・Google Search Console 対応
//    Sitemaps.org (https://www.sitemaps.org/protocol.html) 仕様準拠
// ─────────────────────────────────────────────────────
const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urlElements}

</urlset>
`;

fs.writeFileSync(OUT_PATH, xml, 'utf8');

// ─────────────────────────────────────────────────────
// 8. 完了メッセージ
// ─────────────────────────────────────────────────────
console.log(`✅ sitemap.xml を生成しました → ${OUT_PATH}`);
console.log(`   登録URL数: ${sortedEntries.length}`);
sortedEntries.forEach(([loc]) => console.log(`   - ${loc}`));
