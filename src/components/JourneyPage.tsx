import React, { useState } from 'react';
import { GOSPEL_STEPS } from '../data/gospelJourney';
import { SCRIPTURES } from '../data/scriptures';
import { JourneyStepCard } from './JourneyStepCard';
import { ProgressIndicator } from './ProgressIndicator';
import { SectionHeader } from './SectionHeader';
import { Footer } from './Footer';

export function JourneyPage() {
  // Progress state (persisted in localStorage)
  const [stepIndex, setStepIndex] = useState(() => {
    const saved = localStorage.getItem('gospel-journey-progress-step');
    return saved ? Number(saved) : 0;
  });
  const total = GOSPEL_STEPS.length;
  const step = GOSPEL_STEPS[stepIndex];

  // Map verseIds to scripture objects
  const scriptures = step.verseIds
    .map(id => SCRIPTURES.find(s => s.id === id))
    .filter(Boolean);

  const goNext = () => {
    const next = Math.min(stepIndex + 1, total - 1);
    setStepIndex(next);
    localStorage.setItem('gospel-journey-progress-step', String(next));
  };
  const goPrev = () => {
    const prev = Math.max(stepIndex - 1, 0);
    setStepIndex(prev);
    localStorage.setItem('gospel-journey-progress-step', String(prev));
  };

  return (
    <>
      <SectionHeader title="The Gospel Journey" subtitle="Walk through the 7-step Gospel path in Scripture." />
      <ProgressIndicator current={stepIndex + 1} total={total} label={step.title} />
      <JourneyStepCard
        step={{
          ...step,
          scriptures,
        }}
        onContinue={stepIndex < total - 1 ? goNext : undefined}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 500, margin: '2rem auto' }}>
        <button className="button" onClick={goPrev} disabled={stepIndex === 0} aria-label="Previous step">Previous</button>
        <button className="button" onClick={goNext} disabled={stepIndex === total - 1} aria-label="Next step">Next</button>
      </div>
      <Footer />
    </>
  );
}
