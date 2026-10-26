"use strict";
/* =========================================================
   effects.ts — gerak yang halus dan secukupnya
   • GSAP: animasi masuk beranda, muncul saat di-scroll, progres baca
   • GSAP Flip: kartu proyek bergeser rapi saat filter diganti
   • Motion: efek pegas kecil saat kartu disorot
   ========================================================= */
(() => {
    const AZ = (window.AZ = window.AZ || {});
    const reduce = AZ.reduce;
    const hasGsap = typeof gsap !== 'undefined';
    const hasST = typeof ScrollTrigger !== 'undefined';
    const hasFlip = typeof Flip !== 'undefined';
    const hasMotion = typeof Motion !== 'undefined' && typeof Motion.animate === 'function';
    if (hasGsap)
        gsap.registerPlugin(...[hasST ? ScrollTrigger : null, hasFlip ? Flip : null].filter(Boolean));
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    /** Animasi masuk beranda: teks naik berurutan, foto muncul pelan. */
    function intro() {
        if (!hasGsap || reduce)
            return;
        gsap.from('.hero .hx', { y: 26, opacity: 0, duration: 1, stagger: 0.08, ease: 'power3.out', clearProps: 'opacity,transform' });
        gsap.from('.hero-photo img', { y: 30, scale: 0.97, duration: 1.4, ease: 'power3.out', delay: 0.2, clearProps: 'transform' });
    }
    /** Elemen .rv naik sedikit saat masuk layar (hanya geser, isi tetap terlihat). */
    function reveals() {
        if (!hasGsap || !hasST || reduce)
            return;
        $$('.rv').forEach((el) => {
            gsap.from(el, { y: 32, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
        });
    }
    function refresh() { if (hasST)
        ScrollTrigger.refresh(); }
    /** Filter proyek dengan GSAP Flip. */
    async function flip(apply) {
        if (!hasGsap || !hasFlip || reduce) {
            await apply();
            return;
        }
        const state = Flip.getState('.project');
        await apply();
        Flip.from(state, {
            duration: 0.55, ease: 'power3.inOut', absolute: true, stagger: 0.02,
            onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' }),
            onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.94, duration: 0.3 }),
        });
        window.setTimeout(refresh, 700);
    }
    function bind() {
        // progres baca
        const prog = document.getElementById('progress');
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            if (prog)
                prog.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        reveals();
        // kartu sedikit terangkat dengan efek pegas
        if (hasMotion && !reduce && window.matchMedia('(pointer: fine)').matches) {
            const spring = { type: 'spring', stiffness: 300, damping: 24 };
            $$('.lift').forEach((el) => {
                el.addEventListener('pointerenter', () => Motion.animate(el, { y: -6 }, spring));
                el.addEventListener('pointerleave', () => Motion.animate(el, { y: 0 }, spring));
            });
        }
    }
    AZ.fx = { bind, intro, flip, refresh };
})();
