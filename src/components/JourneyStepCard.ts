import React from 'react';
import type { JourneyStep } from '../data/gospelSteps';
import { ScriptureCard } from './ScriptureCard';

export function JourneyStepCard({ step, onContinue }: { step: JourneyStep; onContinue?: () => void }) {
  return (
    <section className="card" aria-label={`Gospel Journey Step ${step.step}: ${step.title}`}
      style={{ margin: '2rem 0', padding: '2rem 1.5rem' }}>
      <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        Step {step.step} of 7
      </div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '0.5rem 0' }}>{step.title}</h3>
      <div style={{ color: 'var(--color-cream)', fontSize: '1.1rem', marginBottom: '1rem' }}>{step.mainIdea}</div>
      <div>
        {step.scriptures.map((s, i) => (
          <ScriptureCard key={s.reference + i} scripture={s} />
        ))}
      </div>
      <div style={{ margin: '1.2rem 0', color: 'var(--color-muted)' }}>{step.explanation}</div>
      <div style={{ margin: '1rem 0', fontStyle: 'italic', color: 'var(--color-gold)' }}>
        Reflect: {step.reflection}
      </div>
      <div style={{ margin: '1rem 0', color: 'var(--color-cream)' }}>
        <strong>Prayer:</strong> {step.prayer}
      </div>
      {onContinue && (
        <button className="button" onClick={onContinue} aria-label="Continue to next step">Continue</button>
      )}
    </section>
  );
}
