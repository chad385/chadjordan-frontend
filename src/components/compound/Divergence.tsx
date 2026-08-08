'use client';

import { useEffect, useRef } from 'react';

/**
 * The compounding divergence — ported from the standalone oxide/Fraunces mockup
 * to the navy/gold/Bricolage system. Rent (dim bone) climbs as accumulating cost
 * to "own nothing"; the Compound (gold) is one build to "own it all". The widening
 * gap is the argument. Colours come from tokens via inline CSS vars; the effect
 * only mutates geometry.
 */
export default function Divergence() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const q = <T extends Element>(id: string) => el.querySelector(`#${id}`) as T;

    const RENT0 = 500, ESC = 0.06, BUILD = 18000, STAND = 150, MONTHS = 120;
    const rentCum = (m: number) => {
      let t = 0;
      for (let k = 0; k < m; k++) t += RENT0 * Math.pow(1 + ESC, Math.floor(k / 12));
      return t;
    };
    const compCum = (m: number) => BUILD + STAND * m;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const svg = q<SVGSVGElement>('dv-svg');
    let W = 920, H = 470, X0 = 64, X1 = 850, Y0 = 410, Y1 = 40, maxV = 1, portrait = false;
    const px = (m: number) => X0 + (X1 - X0) * (m / MONTHS);
    const py = (v: number) => Y0 - (Y0 - Y1) * (v / maxV);

    let be = MONTHS;
    for (let m0 = 0; m0 <= MONTHS; m0++) {
      if (rentCum(m0) >= compCum(m0)) { be = m0; break; }
    }

    const NS = 'http://www.w3.org/2000/svg';
    function layout() {
      portrait = window.innerWidth < 640;
      W = portrait ? 380 : 920;
      H = portrait ? 520 : 470;
      X0 = 64; X1 = W - 70; Y0 = H - 60; Y1 = 40;
      maxV = Math.max(rentCum(MONTHS), compCum(MONTHS)) * 1.04;
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

      const set = (id: string, a: Record<string, number>) => {
        const n = q<SVGElement>(id);
        for (const k in a) n.setAttribute(k, String(a[k]));
      };
      set('dv-axX', { x1: X0, y1: Y0, x2: X1, y2: Y0 });
      set('dv-axY', { x1: X0, y1: Y1, x2: X0, y2: Y0 });

      const grid = q<SVGGElement>('dv-grid'); grid.innerHTML = '';
      for (let g = 0; g <= 4; g++) {
        const gy = Y1 + (Y0 - Y1) * (g / 4);
        const ln = document.createElementNS(NS, 'line');
        ln.setAttribute('x1', String(X0)); ln.setAttribute('y1', String(gy));
        ln.setAttribute('x2', String(X1)); ln.setAttribute('y2', String(gy));
        ln.setAttribute('stroke', 'var(--border-hairline)'); ln.setAttribute('stroke-width', '1');
        grid.appendChild(ln);
      }
      const xl = q<SVGGElement>('dv-xlabels'); xl.innerHTML = '';
      const step = portrait ? 5 : 2;
      for (let yr = 0; yr <= 10; yr += step) {
        const gx = px(yr * 12);
        const tx = document.createElementNS(NS, 'text');
        tx.setAttribute('x', String(gx)); tx.setAttribute('y', String(Y0 + 22));
        tx.setAttribute('text-anchor', 'middle');
        tx.setAttribute('fill', 'var(--text-muted)');
        tx.setAttribute('font-family', 'var(--font-mono)');
        tx.setAttribute('font-size', '12');
        tx.textContent = yr + 'y'; xl.appendChild(tx);
      }

      let rd = '', cd = '';
      for (let m = 0; m <= MONTHS; m++) {
        rd += (m === 0 ? 'M' : 'L') + px(m).toFixed(1) + ' ' + py(rentCum(m)).toFixed(1) + ' ';
        cd += (m === 0 ? 'M' : 'L') + px(m).toFixed(1) + ' ' + py(compCum(m)).toFixed(1) + ' ';
      }
      q<SVGPathElement>('dv-rent').setAttribute('d', rd);
      q<SVGPathElement>('dv-comp').setAttribute('d', cd);

      const beX = px(be);
      set('dv-beLine', { x1: beX, y1: Y1, x2: beX, y2: Y0 });
      const beLab = q<SVGTextElement>('dv-beLabel');
      beLab.setAttribute('x', String(beX)); beLab.setAttribute('y', String(Y1 - 8));
      beLab.textContent = 'break-even · yr ' + (be / 12).toFixed(1);

      let gpts = '';
      for (let a = be; a <= MONTHS; a++) gpts += px(a).toFixed(1) + ',' + py(rentCum(a)).toFixed(1) + ' ';
      for (let b = MONTHS; b >= be; b--) gpts += px(b).toFixed(1) + ',' + py(compCum(b)).toFixed(1) + ' ';
      q<SVGPolygonElement>('dv-gap').setAttribute('points', gpts);

      const re = q<SVGTextElement>('dv-rentEnd'), ce = q<SVGTextElement>('dv-compEnd');
      re.setAttribute('x', String(X1)); re.setAttribute('y', String(py(rentCum(MONTHS)) - 8)); re.setAttribute('text-anchor', 'end');
      ce.setAttribute('x', String(X1)); ce.setAttribute('y', String(py(compCum(MONTHS)) + 18)); ce.setAttribute('text-anchor', 'end');
    }

    const head = q<SVGLineElement>('dv-head'), dotR = q<SVGCircleElement>('dv-dotR'), dotC = q<SVGCircleElement>('dv-dotC');
    const rentVal = q<HTMLElement>('dv-rentVal'), compVal = q<HTMLElement>('dv-compVal'), compOwn = q<HTMLElement>('dv-compOwn');
    const yrEl = q<HTMLElement>('dv-yr'), range = q<HTMLInputElement>('dv-range');
    const money = (n: number) => '$' + Math.round(n).toLocaleString();
    function render(m: number) {
      const hx = px(m), rv = rentCum(m), cv = compCum(m);
      head.setAttribute('x1', String(hx)); head.setAttribute('y1', String(Y1)); head.setAttribute('x2', String(hx)); head.setAttribute('y2', String(Y0));
      dotR.setAttribute('cx', String(hx)); dotR.setAttribute('cy', String(py(rv)));
      dotC.setAttribute('cx', String(hx)); dotC.setAttribute('cy', String(py(cv)));
      rentVal.textContent = money(rv); compVal.textContent = money(cv);
      yrEl.textContent = 'Year ' + (m / 12).toFixed(m % 12 ? 1 : 0);
      compOwn.textContent = m >= be ? 'own 100% — now cheaper than renting' : 'invested · you own 100%';
    }
    range.addEventListener('input', () => render(+range.value));

    layout();
    render(0);

    let played = false;
    function sweep() {
      if (played) { render(120); range.value = '120'; return; }
      played = true;
      if (reduce) { range.value = '120'; render(120); return; }
      let start: number | null = null; const dur = 1900;
      function stepFn(ts: number) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3); const m = 120 * e;
        range.value = String(Math.round(m)); render(m);
        if (p < 1) requestAnimationFrame(stepFn);
      }
      requestAnimationFrame(stepFn);
    }

    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((es) => {
        es.forEach((e) => { if (e.isIntersecting) { sweep(); io?.disconnect(); } });
      }, { threshold: 0.35 });
      io.observe(svg);
    } else { sweep(); }

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { layout(); render(+range.value); }, 150); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); io?.disconnect(); };
  }, []);

  const mono = { fontFamily: 'var(--font-mono)' } as const;

  return (
    <div ref={root}>
      <div
        className="mt-7 p-2 hairline is-round"
        style={{ background: 'var(--surface-card)', border: '0.5px solid var(--border-hairline)' }}
      >
        <svg id="dv-svg" role="img" style={{ display: 'block', width: '100%', height: 'auto' }}
          aria-label="Cumulative cost over ten years: rented platforms keep climbing while a one-time Compound stays flat and is owned outright.">
          <g id="dv-grid" />
          <line id="dv-axX" style={{ stroke: 'var(--border-hairline)', strokeWidth: 1 }} />
          <line id="dv-axY" style={{ stroke: 'var(--border-hairline)', strokeWidth: 1 }} />
          <polygon id="dv-gap" points="" style={{ fill: 'var(--brand-accent)', opacity: 0.1 }} />
          <path id="dv-rent" d="" style={{ fill: 'none', stroke: 'var(--text-muted)', strokeWidth: 2.5, strokeLinecap: 'round' }} />
          <path id="dv-comp" d="" style={{ fill: 'none', stroke: 'var(--brand-accent)', strokeWidth: 2.5, strokeLinecap: 'round' }} />
          <line id="dv-beLine" style={{ stroke: 'var(--text-muted)', strokeWidth: 1, strokeDasharray: '3 3', opacity: 0.5 }} />
          <text id="dv-beLabel" textAnchor="middle" style={{ ...mono, fill: 'var(--text-muted)', fontSize: 12, letterSpacing: '0.06em' }}>break-even</text>
          <line id="dv-head" style={{ stroke: 'var(--text-primary)', strokeWidth: 1, opacity: 0.4 }} />
          <circle id="dv-dotR" r="4.5" style={{ fill: 'var(--text-muted)' }} />
          <circle id="dv-dotC" r="4.5" style={{ fill: 'var(--brand-accent)' }} />
          <text id="dv-rentEnd" style={{ ...mono, fill: 'var(--text-muted)', fontSize: 13 }}>own nothing</text>
          <text id="dv-compEnd" style={{ ...mono, fill: 'var(--brand-accent)', fontSize: 13 }}>own it all</text>
          <g id="dv-xlabels" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="p-4 hairline" style={{ border: '0.5px solid var(--border-hairline)' }}>
          <div style={{ ...mono, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Renting</div>
          <div id="dv-rentVal" style={{ ...mono, fontSize: 'clamp(22px,6vw,30px)', marginTop: 8 }}>$0</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>paid out · you own $0</div>
        </div>
        <div className="p-4 hairline" style={{ border: '0.5px solid var(--border-hairline)' }}>
          <div style={{ ...mono, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand-accent)' }}>The Compound</div>
          <div id="dv-compVal" style={{ ...mono, fontSize: 'clamp(22px,6vw,30px)', marginTop: 8, color: 'var(--brand-accent)' }}>$0</div>
          <div id="dv-compOwn" style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>invested · you own 100%</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <label style={{ ...mono, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>Yr 0</label>
        <input id="dv-range" type="range" min={0} max={120} defaultValue={0} step={1} aria-label="Years elapsed"
          className="dv-range is-round" style={{ flex: 1 }} />
        <span id="dv-yr" style={{ ...mono, fontSize: 13, color: 'var(--text-primary)', minWidth: 64, textAlign: 'right' }}>Year 0</span>
      </div>
      <p style={{ ...mono, fontSize: 11, color: 'var(--text-muted)', marginTop: 16, lineHeight: 1.5 }}>
        Illustrative. Rent shown at $500/mo across a typical stack, rising 6% a year; Compound as one build plus light upkeep. Your numbers, your asset.
      </p>
    </div>
  );
}
