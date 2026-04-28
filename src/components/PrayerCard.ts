import React from 'react';

export function PrayerCard({ verse, prayer }: { verse: string; prayer: string }) {
  return (
    <div className="card" style={{ background: 'var(--color-parchment)', color: '#2d2d2d', borderLeft: '6px solid var(--color-gold)', fontFamily: 'var(--font-serif)', margin: '1.5rem 0' }}>
      <div style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{verse}</div>
      <div style={{ marginTop: '0.75rem', color: '#7a6c4f', fontWeight: 500 }}><strong>Prayer:</strong> {prayer}</div>
    </div>
  );
}
