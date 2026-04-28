import React from 'react';

export function GospelClarityCard({ title, description, onClick }: { title: string; description: string; onClick?: () => void }) {
  return (
    <div
      className="card"
      tabIndex={0}
      role="button"
      aria-label={title}
      onClick={onClick}
      onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && onClick && onClick()}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        outline: 'none',
        margin: '1rem 0',
        background: 'var(--color-bg-alt)',
        color: 'var(--color-cream)',
        borderLeft: '4px solid var(--color-gold)',
        boxShadow: 'var(--shadow-soft)',
        borderRadius: 'var(--border-radius)',
        padding: '1.2rem 1.5rem',
        transition: 'background 0.2s',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-gold)' }}>{title}</div>
      <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>{description}</div>
    </div>
  );
}
