import React from 'react';

export function TruthCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'var(--color-parchment)',
      color: '#2d2d2d',
      borderLeft: '6px solid var(--color-gold)',
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--shadow-soft)',
      padding: '1.2rem 1.5rem',
      margin: '1.5rem 0',
      fontFamily: 'var(--font-serif)',
      fontSize: '1.1rem',
      fontWeight: 500
    }}>
      {children}
    </div>
  );
}
