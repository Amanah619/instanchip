(function () {
  const root = document.getElementById('cuan-home');
  if (!root) return;

  /* =========================================================
   * 1. DATA MENU (KONFIGURASI)
   * =======================================================*/

  // --- SETTING GAMBAR GAME (Satu Link untuk Semua) ---
  const GLOBAL_GAME_ICON = 'https://cdn-icons-png.flaticon.com/128/18164/18164980.png';

  // --- E-WALLET (bottom sheet) ---
  const EWALLET_ITEMS = [
    // ... (Data e-wallet tetap sama persis)
    { href: 'https://zaptop.digitalshop.id/digital/366992', label: 'Bebas Nominal', brandClass: 'free', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'Bebas Nominal' },
    { href: 'https://zaptop.digitalshop.id/digital/369581', label: 'Dana', brandClass: 'dana', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'DANA' },
    { href: 'https://zaptop.digitalshop.id/digital/369582', label: 'Ovo', brandClass: 'ovo', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'OVO' },
    { href: 'https://zaptop.digitalshop.id/digital/369727', label: 'Maxim', brandClass: 'maxim dark', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'Maxim' },
    { href: 'https://zaptop.digitalshop.id/digital/369917', label: 'Gopay Driver', brandClass: 'gopay', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'GoPay Driver' },
    { href: 'https://zaptop.digitalshop.id/digital/371062', label: 'Shopeepay', brandClass: 'spay', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'ShopeePay' },
    { href: 'https://zaptop.digitalshop.id/digital/371182', label: 'Gopay Customer', brandClass: 'gopay', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'GoPay Customer' },
    { href: 'https://zaptop.digitalshop.id/digital/371292', label: 'Link aja', brandClass: 'linkaja', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'LinkAja' },
    { href: 'https://zaptop.digitalshop.id/digital/371296', label: 'Isaku', brandClass: 'isaku', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'i.Saku' },
    { href: 'https://zaptop.digitalshop.id/digital/371313', label: 'grab', brandClass: 'grab', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'Grab' },
    { href: 'https://zaptop.digitalshop.id/digital/371328', label: 'grab driver', brandClass: 'grab', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'Grab Driver' },
    { href: 'https://zaptop.digitalshop.id/digital/371329', label: 'shope driver', brandClass: 'spay', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'Shopee Driver' },
    { href: 'https://zaptop.digitalshop.id/digital/371331', label: 'kaspro', brandClass: 'kaspro', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'KasPro' },
    { href: 'https://zaptop.digitalshop.id/digital/371332', label: 'Astrapay', brandClass: 'astrapay', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'AstraPay' },
    { href: 'https://zaptop.digitalshop.id/digital/371343', label: 'doku', brandClass: 'doku', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'DOKU' },
    { href: 'https://zaptop.digitalshop.id/digital/371614', label: 'indriver', brandClass: 'indriver', icon: 'https://cdn-icons-png.flaticon.com/128/12882/12882185.png', alt: 'inDriver' }
  ];

  // --- GAME (bottom sheet game - HANYA TOPUP) ---
  const GAME_ITEMS = [
    { href: 'https://zaptop.digitalshop.id/digital/371617', label: 'Mobile Legends', alt: 'Mobile Legends' },
    { href: 'https://zaptop.digitalshop.id/digital/372227', label: 'Free Fire', alt: 'Free Fire' },
    { href: 'https://zaptop.digitalshop.id/digital/372763', label: 'Honor of Kings', alt: 'Honor of Kings' },
    { href: 'https://zaptop.digitalshop.id/digital/372243', label: 'PUBG Mobile', alt: 'PUBG Mobile' },
    { href: 'https://zaptop.digitalshop.id/digital/372811', label: 'Genshin Impact', alt: 'Genshin Impact' },
    { href: 'https://zaptop.digitalshop.id/digital/372813', label: 'Arena Breakout', alt: 'Arena Breakout' },
    { href: 'https://zaptop.digitalshop.id/digital/372815', label: 'Valorant', alt: 'Valorant' },
    { href: 'https://zaptop.digitalshop.id/digital/378141', label: 'Roblox', alt: 'Roblox' },
    { href: 'https://zaptop.digitalshop.id/digital/380835', label: 'VCR Gemschool', alt: 'gemschool' },
    { href: 'https://zaptop.digitalshop.id/digital/378143', label: 'Call of Duty: Mobile', alt: 'Call of Duty: Mobile' },
    { href: 'https://zaptop.digitalshop.id/digital/380834', label: 'Clash of Clans', alt: 'Clash of Clans' },
    { href: 'https://zaptop.digitalshop.id/digital/379967', label: 'Clash Royale', alt: 'Clash Royale' },
    { href: 'https://zaptop.digitalshop.id/digital/380836', label: 'Marvelsuperwar', alt: 'Marvelsuperwar' },
    { href: 'https://zaptop.digitalshop.id/digital/381422', label: 'Magic Chees', alt: 'Magic Chees' },
    { href: '#', label: 'Subway Surfers', alt: 'Subway Surfers' },
    { href: '#', label: 'Candy Crush Saga', alt: 'Candy Crush Saga' },
    { href: '#', label: 'eFootball', alt: 'eFootball' },
    { href: '#', label: 'EA SPORTS FC Mobile', alt: 'EA SPORTS FC Mobile' },
    { href: '#', label: '8 Ball Pool', alt: '8 Ball Pool' },
    { href: '#', label: 'Honkai: Star Rail', alt: 'Honkai: Star Rail' },
    { href: '#', label: 'Honkai Impact 3', alt: 'Honkai Impact 3' },
    { href: '#', label: 'Pokemon UNITE', alt: 'Pokemon UNITE' },
    { href: '#', label: 'Rise of Kingdoms', alt: 'Rise of Kingdoms' },
    { href: '#', label: 'Lords Mobile', alt: 'Lords Mobile' },
    { href: '#', label: 'Ragnarok X: Next Generation', alt: 'Ragnarok X: Next Generation' },
    { href: '#', label: 'Ragnarok M: Eternal Love', alt: 'Ragnarok M: Eternal Love' }
  ];

  // --- VOUCHER (TAMBAHAN BARU KHUSUS TAB VOUCHER) ---
  const VOUCHER_ITEMS = [
    {
      href: 'https://zaptop.digitalshop.id/digital/381424',
      label: 'Google Play',
      alt: 'Google Play'
    }

    {
      href: 'https://zaptop.digitalshop.id/digital/381436',
      label: 'Garena',
      alt: 'Garena'
  }
    // Nanti Mas Adi bisa tambahin voucher lain di sini (seperti Voucher Garena, Steam Wallet, dll)
  ];

  // --- MENU "LAINNYA" (sheet utama) ---
  const LAINNYA_ITEMS = [
    { href: '#', label: 'Telepon Pascabayar', iconName: 'ring_volume' },
    { href: '#', label: 'PBB', iconName: 'home' },
    { href: '#', label: 'Bayar Tagihan', iconName: 'request_quote' }
  ];


  /* =========================================================
   * 2. FUNGSI RENDER TILE
   * =======================================================*/

  function renderEwalletMenu() {
    const grid = root.querySelector('#wallet-grid');
    if (!grid) return;
    grid.innerHTML = '';

    EWALLET_ITEMS.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href || '#';
      a.className = 'tile';
      a.title = item.label || '';

      const spanBrand = document.createElement('span');
      spanBrand.className = 'brand-ic ' + (item.brandClass || '');

      const img = document.createElement('img');
      img.src = item.icon;
      img.alt = item.alt || item.label || '';

      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = item.label || '';

      spanBrand.appendChild(img);
      a.appendChild(spanBrand);
      a.appendChild(label);
      grid.appendChild(a);
    });
  }

  function renderGameMenu() {
    const grid = root.querySelector('#game-grid');
    if (!grid) return;
    grid.innerHTML = '';

    GAME_ITEMS.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href || '#';
      a.className = 'tile';
      a.title = item.label || '';

      const ic = document.createElement('span');
      ic.className = 'ic';

      const img = document.createElement('img');
      img.className = 'cuan-op';
      img.src = GLOBAL_GAME_ICON; 
      img.alt = item.alt || item.label || '';

      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = item.label || '';

      ic.appendChild(img);
      a.appendChild(ic);
      a.appendChild(label);
      grid.appendChild(a);
    });
  }

  // --- FUNGSI BARU: RENDER VOUCHER ---
  function renderVoucherMenu() {
    const grid = root.querySelector('#voucher-grid');
    if (!grid) return;
    grid.innerHTML = '';

    VOUCHER_ITEMS.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href || '#';
      a.className = 'tile';
      a.title = item.label || '';

      const ic = document.createElement('span');
      ic.className = 'ic';

      const img = document.createElement('img');
      img.className = 'cuan-op';
      img.src = GLOBAL_GAME_ICON; 
      img.alt = item.alt || item.label || '';

      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = item.label || '';

      ic.appendChild(img);
      a.appendChild(ic);
      a.appendChild(label);
      grid.appendChild(a);
    });
  }

  function renderLainnyaMenu() {
    const grid = root.querySelector('#lainnya-grid');
    if (!grid) return;
    grid.innerHTML = '';

    LAINNYA_ITEMS.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href || '#';
      a.className = 'tile';

      const ic = document.createElement('span');
      ic.className = 'ic';

      const iconSpan = document.createElement('span');
      iconSpan.className = 'material-symbols-rounded';
      iconSpan.textContent = item.iconName || 'more_horiz';

      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = item.label || '';

      ic.appendChild(iconSpan);
      a.appendChild(ic);
      a.appendChild(label);
      grid.appendChild(a);
    });
  }

  // Eksekusi render semua menu
  renderEwalletMenu();
  renderGameMenu();
  renderVoucherMenu(); // Memanggil render voucher
  renderLainnyaMenu();

  /* =========================================================
   * 3. LOGIKA PERILAKU (saldo, sheet, search, popup, ripple)
   * =======================================================*/

  function softVibrate() {
    try {
      if (navigator && typeof navigator.vibrate === 'function') {
        navigator.vibrate(20);
      }
    } catch (e) {
      console.warn('[HAPTIC] Error vibrate:', e);
    }
  }

  /* --- Saldo & Refresh --- */
  const amtEl = root.querySelector('#wallet-amount');
  const refreshBtn = root.querySelector('#refreshSaldo');

  function formatIDR(n) {
    return 'Rp' + Number(n).toLocaleString('id-ID', { maximumFractionDigits: 0 });
  }

  if (amtEl) {
    const raw = (amtEl.textContent || '').trim();
    const num = parseInt((raw || '').replace(/[^\d]/g, ''), 10);
    if (!isNaN(num)) amtEl.textContent = formatIDR(num);
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      window.location.href = 'https://zaptop.digitalshop.id/refresh_saldo';
    });
  }

  /* --- Bottom sheet: Lainnya --- */
  const ovl      = root.querySelector('#ovl');
  const sheet    = root.querySelector('#sheet');
  const btnClose = root.querySelector('#close');

  function openSheet() {
    if (!ovl || !sheet) return;
    softVibrate();
    ovl.classList.add('show');
    sheet.classList.add('show');
    document.body.style.overflow = 'hidden';
    const more = root.querySelector('.more');
    if (more) more.setAttribute('aria-expanded', 'true');
  }

  function closeSheet() {
    if (!ovl || !sheet) return;
    ovl.classList.remove('show');
    sheet.classList.remove('show');
    document.body.style.overflow = '';
    const more = root.querySelector('.more');
    if (more) more.setAttribute('aria-expanded', 'false');
  }

  /* --- Bottom sheet: E-Wallet --- */
  const ovlW         = root.querySelector('#ovl-w');
  const sheetW       = root.querySelector('#sheet-wallet');
  const btnCloseW    = root.querySelector('#close-w');
  const openWalletBtn = root.querySelector('.open-wallet');

  function openWallet() {
    if (!ovlW || !sheetW) return;
    softVibrate();
    ovlW.classList.add('show');
    sheetW.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (openWalletBtn) openWalletBtn.setAttribute('aria-expanded', 'true');
  }

  function closeWallet() {
    if (!ovlW || !sheetW) return;
    ovlW.classList.remove('show');
    sheetW.classList.remove('show');
    document.body.style.overflow = '';
    if (openWalletBtn) openWalletBtn.setAttribute('aria-expanded', 'false');
  }

  /* --- Bottom sheet: Game --- */
  const ovlG        = root.querySelector('#ovl-g');
  const sheetG      = root.querySelector('#sheet-game');
  const btnCloseG   = root.querySelector('#close-g');
  const openGameBtn = root.querySelector('.open-game');

  const gameSearchInput = root.querySelector('#game-search-input');
  
  // Ambil data tile dari kedua tab untuk pencarian
  let allGameTiles = [];

  function openGame() {
    if (!ovlG || !sheetG) return;
    softVibrate();
    ovlG.classList.add('show');
    sheetG.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (openGameBtn) openGameBtn.setAttribute('aria-expanded', 'true');

    if (gameSearchInput) {
      setTimeout(() => gameSearchInput.focus(), 220);
    }
  }

  function closeGame() {
    if (!ovlG || !sheetG) return;
    ovlG.classList.remove('show');
    sheetG.classList.remove('show');
    document.body.style.overflow = '';
    if (openGameBtn) openGameBtn.setAttribute('aria-expanded', 'false');

    if (gameSearchInput) {
      gameSearchInput.value = '';
    }
    
    // Kembalikan semua pencarian saat pop-up ditutup
    allGameTiles = Array.from(root.querySelectorAll('#game-grid .tile, #voucher-grid .tile'));
    if (allGameTiles && allGameTiles.length) {
      allGameTiles.forEach(t => {
        t.style.display = 'flex';
      });
    }
  }

  // --- LOGIKA PENCARIAN GABUNGAN (Game & Voucher) ---
  if (gameSearchInput) {
    gameSearchInput.addEventListener('input', function () {
      const q = (this.value || '').trim().toLowerCase();

      // Selalu update list tile dari kedua wadah
      allGameTiles = Array.from(root.querySelectorAll('#game-grid .tile, #voucher-grid .tile'));

      if (!q) {
        allGameTiles.forEach(t => { t.style.display = 'flex'; });
        return;
      }

      allGameTiles.forEach(t => {
        const lblEl = t.querySelector('.label');
        const title = (t.getAttribute('title') || '').toLowerCase();
        const text  = (lblEl ? lblEl.textContent : '').toLowerCase();
        const hay   = title + ' ' + text;
        t.style.display = hay.indexOf(q) !== -1 ? 'flex' : 'none';
      });
    });
  }

  /* --- Dev popup --- */
  const devOvl = root.querySelector('#dev-ovl');
  const devPop = root.querySelector('#dev-pop');
  const devOk  = root.querySelector('#dev-ok');
  let devTimer = null;

  function showDev() {
    if (!devOvl || !devPop) return;
    devOvl.classList.add('show');
    devPop.classList.add('show');
    clearTimeout(devTimer);
    devTimer = setTimeout(hideDev, 1700);
  }

  function hideDev() {
    if (!devOvl || !devPop) return;
    devOvl.classList.remove('show');
    devPop.classList.remove('show');
    clearTimeout(devTimer);
  }

  /* --- Delegated clicks (semua klik tile) --- */
  root.addEventListener('click', e => {
    const trgMore   = e.target.closest('.more');
    const trgWallet = e.target.closest('.open-wallet');
    const trgGame   = e.target.closest('.open-game');

    if (trgMore) {
      e.preventDefault();
      openSheet();
      return;
    }
    if (trgWallet) {
      e.preventDefault();
      openWallet();
      return;
    }
    if (trgGame) {
      e.preventDefault();
      openGame();
      return;
    }

    const anchor = e.target.closest('a[href]');
    if (
      anchor &&
      (anchor.getAttribute('href') === '#' ||
       anchor.getAttribute('href').trim() === '')
    ) {
      e.preventDefault();
      showDev();
    }
  });

  /* --- Close handlers & ESC --- */
  if (ovl)      ovl.addEventListener('click', closeSheet);
  if (btnClose) btnClose.addEventListener('click', closeSheet);

  if (ovlW)      ovlW.addEventListener('click', closeWallet);
  if (btnCloseW) btnCloseW.addEventListener('click', closeWallet);

  if (ovlG)      ovlG.addEventListener('click', closeGame);
  if (btnCloseG) btnCloseG.addEventListener('click', closeGame);

  if (devOvl) devOvl.addEventListener('click', hideDev);
  if (devOk)  devOk.addEventListener('click', hideDev);

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSheet();
      closeWallet();
      closeGame();
      hideDev();
    }
  });

  /* --- Ripple effect --- */
  function makeRipple(e) {
    const el = e.target.closest('.tile');
    if (!el) return;

    el.classList.add('is-pressed');

    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    const r = document.createElement('span');
    r.className = 'ripple';
    r.style.width = r.style.height = size + 'px';

    const x = (e.clientX || rect.left + rect.width / 2) - rect.left - size / 2;
    const y = (e.clientY || rect.top + rect.height / 2) - rect.top - size / 2;
    r.style.left = x + 'px';
    r.style.top  = y + 'px';

    el.appendChild(r);
    r.addEventListener('animationend', () => r.remove());
  }

  root.addEventListener('pointerdown', makeRipple, { passive: true });

  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => {
    root.addEventListener(ev, () => {
      root.querySelectorAll('.tile.is-pressed')
        .forEach(t => t.classList.remove('is-pressed'));
    });
  });

})();
