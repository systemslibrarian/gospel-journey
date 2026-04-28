import React from 'react';

export function ProgressIndicator({ current, total, label }: { current: number; total: number; label?: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem 0',
      fontSize: '1.1rem', color: 'var(--color-gold)', fontWeight: 600
    }}>
      <span>Step {current} of {total}</span>
      {label && <span style={{ marginLeft: '0.75rem', color: 'var(--color-cream)', fontWeight: 400 }}>{label}</span>}
    </div>
  );
}
