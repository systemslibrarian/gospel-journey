import React, { useState } from 'react';

export type TimelineStopData = {
  title: string;
  reference: string;
  whatHappened: string;
  promise: string;
  pointsToJesus: string;
  meaning: string;
};

export function TimelineStop({ stop }: { stop: TimelineStopData }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div style={{
      borderLeft: '4px solid var(--color-crimson)',
      margin: '2rem 0',
      padding: '1.5rem 1.5rem 1.5rem 2rem',
      background: 'var(--color-bg-alt)',
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--shadow-soft)',
      position: 'relative',
    }}>
      <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '1.1rem' }}>{stop.title}</div>
      <div style={{ color: 'var(--color-muted)', fontSize: '1rem', marginBottom: '0.5rem' }}>{stop.reference}</div>
      <div style={{ marginBottom: '0.5rem' }}><strong>What happened?</strong> {stop.whatHappened}</div>
      <div style={{ marginBottom: '0.5rem' }}><strong>Promise:</strong> {stop.promise}</div>
      <button
        className="button"
        style={{ margin: '0.5rem 0', background: 'var(--color-crimson)', color: 'var(--color-cream)' }}
        onClick={() => setRevealed(v => !v)}
        aria-expanded={revealed}
        aria-controls={`pointsToJesus-${stop.title}`}
      >
        {revealed ? 'Hide how this points to Jesus' : 'Reveal how this points to Jesus'}
      </button>
      {revealed && (
        <div id={`pointsToJesus-${stop.title}`} style={{ margin: '0.5rem 0', color: 'var(--color-cream)', background: 'rgba(168,50,50,0.12)', borderRadius: 8, padding: '0.75rem' }}>
          <strong>How this points to Jesus:</strong> {stop.pointsToJesus}
        </div>
      )}
      <div style={{ marginTop: '0.5rem', color: 'var(--color-cream)' }}><strong>What does this mean for me?</strong> {stop.meaning}</div>
    </div>
  );
}
