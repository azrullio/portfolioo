"use strict";
/* =========================================================
   app.ts — aplikasi Vue 3 (template ada di index.html)
   Navigasi satu halaman, filter proyek, galeri & detail proyek,
   salin email.
   ========================================================= */
(() => {
    const AZ = window.AZ;
    if (typeof Vue === 'undefined' || !AZ || !AZ.data)
        return;
    const { createApp, nextTick } = Vue;
    createApp({
        data() {
            return {
                d: AZ.data,
                filter: 'all',
                active: 'beranda',
                scrolled: false,
                menuOpen: false,
                gallery: null,
                toast: '',
            };
        },
        computed: {
            // angka di beranda dihitung otomatis dari daftar proyek
            stats() {
                const ps = this.d.projects;
                return [
                    { value: String(ps.length), label: 'Proyek' },
                    { value: String(ps.filter((p) => p.demo).length), label: 'Demo live' },
                    { value: String(ps.filter((p) => p.cats.includes('ai')).length), label: 'Proyek AI & data' },
                ];
            },
            socials() { return this.d.socials.filter((s) => !!s.url); },
        },
        watch: {
            gallery(v, old) {
                document.documentElement.style.overflow = v ? 'hidden' : '';
                if (v && !old) {
                    // pindahkan fokus ke dalam galeri, kembalikan saat ditutup
                    this._lastFocus = document.activeElement;
                    nextTick(() => { const c = document.getElementById('modal-close'); if (c)
                        c.focus(); });
                }
                else if (!v && old) {
                    const last = this._lastFocus;
                    if (last && typeof last.focus === 'function')
                        last.focus({ preventScroll: true });
                }
            },
        },
        methods: {
            go(id) {
                this.menuOpen = false;
                const el = document.getElementById(id);
                if (!el)
                    return;
                // ukur setelah menu tertutup agar posisi tidak meleset
                nextTick(() => {
                    var _a;
                    const navH = ((_a = document.querySelector('.nav-in')) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 64;
                    const top = id === 'beranda' ? 0 : el.getBoundingClientRect().top + window.scrollY - navH + 8;
                    window.scrollTo({ top: Math.max(0, top), behavior: AZ.reduce ? 'auto' : 'smooth' });
                });
                try {
                    history.replaceState(null, '', '#' + id);
                }
                catch (err) { /* abaikan */ }
            },
            matches(p) { return this.filter === 'all' || p.cats.includes(this.filter); },
            countFor(id) {
                return id === 'all' ? this.d.projects.length : this.d.projects.filter((p) => p.cats.includes(id)).length;
            },
            async setFilter(f) {
                if (f === this.filter)
                    return;
                if (AZ.fx)
                    await AZ.fx.flip(async () => { this.filter = f; await nextTick(); });
                else
                    this.filter = f;
            },
            openProject(p, index) {
                this.gallery = { items: p.shots || [], index, title: p.title, project: p };
            },
            openGallery(items, index, title) {
                if (!items || !items.length)
                    return;
                this.gallery = { items, index, title, project: null };
            },
            closeGallery() { this.gallery = null; },
            stepGallery(dir) {
                if (!this.gallery || !this.gallery.items.length)
                    return;
                const n = this.gallery.items.length;
                this.gallery.index = (this.gallery.index + dir + n) % n;
            },
            showToast(msg) {
                this.toast = msg;
                window.clearTimeout(this._t);
                this._t = window.setTimeout(() => { this.toast = ''; }, 2200);
            },
            copyEmail() {
                const el = document.getElementById('email');
                const select = () => {
                    if (!el)
                        return;
                    const r = document.createRange();
                    r.selectNodeContents(el);
                    const s = window.getSelection();
                    if (s) {
                        s.removeAllRanges();
                        s.addRange(r);
                    }
                    this.showToast('Email terpilih, tekan Ctrl+C');
                };
                try {
                    navigator.clipboard.writeText(this.d.email).then(() => this.showToast('Email disalin'), select);
                }
                catch (err) {
                    select();
                }
            },
        },
        mounted() {
            nextTick(() => {
                var _a, _b;
                (_a = AZ.fx) === null || _a === void 0 ? void 0 : _a.bind();
                (_b = AZ.fx) === null || _b === void 0 ? void 0 : _b.intro();
                const hash = window.location.hash.slice(1);
                if (hash && document.getElementById(hash))
                    window.setTimeout(() => this.go(hash), 50);
            });
            const onScroll = () => {
                this.scrolled = window.scrollY > 8;
                // bagian terakhir (Kontak) pendek: tandai aktif saat sudah di dasar halaman
                const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
                if (atBottom)
                    this.active = this.d.nav[this.d.nav.length - 1].id;
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
            // tandai menu sesuai bagian yang sedang dilihat
            if ('IntersectionObserver' in window) {
                const io = new IntersectionObserver((entries) => {
                    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
                    if (atBottom)
                        return;
                    entries.forEach((e) => { if (e.isIntersecting)
                        this.active = e.target.id; });
                }, { rootMargin: '-45% 0px -50% 0px' });
                this.d.nav.forEach((n) => { const el = document.getElementById(n.id); if (el)
                    io.observe(el); });
            }
            window.addEventListener('keydown', (e) => {
                if (!this.gallery) {
                    if (e.key === 'Escape')
                        this.menuOpen = false;
                    return;
                }
                if (e.key === 'Escape')
                    this.closeGallery();
                if (e.key === 'ArrowRight')
                    this.stepGallery(1);
                if (e.key === 'ArrowLeft')
                    this.stepGallery(-1);
                if (e.key === 'Tab') {
                    // jaga fokus tetap di dalam galeri
                    const card = document.querySelector('.modal-card');
                    if (!card)
                        return;
                    const f = Array.from(card.querySelectorAll('button, a[href], video[controls]')).filter((el) => el.offsetParent !== null);
                    if (!f.length)
                        return;
                    const first = f[0], last = f[f.length - 1];
                    if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                    else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            });
            // tutup menu ponsel saat mengetuk di luar navigasi
            document.addEventListener('click', (e) => {
                if (this.menuOpen && !e.target.closest('.nav'))
                    this.menuOpen = false;
            });
        },
    }).mount('#app');
})();
