/* ======================================
   鏡面人世 - 共通JavaScript
   ====================================== */

// ── ナビゲーション ───────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');

  // スクロールでナビ背景変更
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  });

  // ハンバーガーメニュー
  burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  });

  // モバイルリンククリックで閉じる
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger?.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // 現在のページをアクティブに
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── フェードインアニメーション ──────────
function initFadeIn() {
  // まだvisibleでない要素を全て表示する（フォールバック用）
  const forceShow = () => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      el.classList.add('visible');
    });
  };

  // IntersectionObserver非対応環境（一部WebView）は即時表示
  if (!('IntersectionObserver' in window)) {
    forceShow();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.01,
    rootMargin: '0px 0px 0px 0px'  // マージンをなくして確実に発火
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // WebViewでObserverが発火しない場合のフォールバック（400ms後に強制表示）
  setTimeout(forceShow, 400);
}

// ── 楽曲カード生成 ───────────────────
function createSongCard(song, showAlbum = false) {
  const albumData = ALBUMS.find(a => a.id === song.album);
  const card = document.createElement('a');
  card.href = `song.html?id=${song.id}`;
  card.className = 'song-card fade-in';

  // tags・descriptionが未定義の場合も安全に処理
  const tagsHtml = Array.isArray(song.tags)
    ? song.tags.map(t => `<span class="tag">${t}</span>`).join('')
    : '';
  const desc = song.description || '';

  card.innerHTML = `
    <div class="song-card-track">
      ${showAlbum && albumData ? (albumData.titleJa || albumData.title) + ' — ' : ''}Track ${song.track}
    </div>
    <div class="song-card-title">${song.title}</div>
    <div class="song-card-reading">${song.reading || ''}</div>
    <div class="song-card-desc">${desc}</div>
    <div class="song-card-tags">${tagsHtml}</div>
  `;

  return card;
}

// ── フッター生成 ─────────────────────
function renderFooter() {
  const footer = document.querySelector('.footer');
  if (!footer || typeof SITE_INFO === 'undefined') return;

  footer.innerHTML = `
    <div class="footer-logo">${SITE_INFO.artistName}</div>
    <nav class="footer-links">
      <a href="index.html">Home</a>
      <a href="songs.html">Songs</a>
      <a href="albums.html">Albums</a>
    </nav>
    <p class="footer-copy">© 2024 ${SITE_INFO.artistName}. All rights reserved.</p>
  `;
}

// ── ページロード時に初期化 ──────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFadeIn();
  renderFooter();
});

// ── URLパラメータ取得 ─────────────────
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}
