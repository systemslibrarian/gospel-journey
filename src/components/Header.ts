import React, { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ width: '100%', background: 'var(--color-bg-alt)', boxShadow: 'var(--shadow-soft)', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 900, margin: '0 auto', padding: '0.75rem 1rem' }}>
        <a href="/index.html" style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '1.3rem', fontFamily: 'var(--font-serif)', textDecoration: 'none' }}>Gospel Journey</a>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', color: 'var(--color-gold)', fontSize: '2rem', cursor: 'pointer', display: 'none', marginLeft: '1rem' }}
          className="mobile-menu-button"
        >
          <span aria-hidden="true">☰</span>
        </button>
        <ul id="main-menu" style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.2rem',
          margin: 0,
          padding: 0,
          alignItems: 'center',
          ...(open ? { display: 'block', position: 'absolute', top: '3.5rem', right: 0, background: 'var(--color-bg-alt)', width: '100%', boxShadow: 'var(--shadow-soft)', zIndex: 200 } : {})
        }}>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/journey.html">Journey</a></li>
          <li><a href="/who-is-jesus.html">Who Is Jesus?</a></li>
          <li><a href="/scarlet-thread.html">Scarlet Thread</a></li>
          <li><a href="/respond.html">Respond</a></li>
          <li><a href="/next-steps.html">Next Steps</a></li>
          <li><a href="/scripture-library.html">Scripture</a></li>
          <li><a href="/journey.html"><button className="button" style={{ fontSize: '1rem', padding: '0.5rem 1rem', margin: 0 }}>Start the Journey</button></a></li>
        </ul>
      </nav>
      <style>{`
        @media (max-width: 700px) {
          .mobile-menu-button { display: block !important; }
          #main-menu {
            display: none !important;
          }
          #main-menu[aria-expanded="true"] {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
