import React from 'react';

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header style={{ margin: '2.5rem 0 1.5rem 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', color: 'var(--color-gold)' }}>{title}</h2>
      {subtitle && <p style={{ color: 'var(--color-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>{subtitle}</p>}
    </header>
  );
}
