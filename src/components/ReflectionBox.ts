import React, { useState, useEffect } from 'react';

export function ReflectionBox({ prompt, storageKey }: { prompt: string; storageKey: string }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setValue(saved);
  }, [storageKey]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
    localStorage.setItem(storageKey, e.target.value);
  }

  return (
    <div style={{ margin: '1.5rem 0' }}>
      <label htmlFor={storageKey} style={{ color: 'var(--color-gold)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>{prompt}</label>
      <textarea
        id={storageKey}
        value={value}
        onChange={handleChange}
        rows={4}
        style={{ width: '100%', borderRadius: 8, border: '1px solid #b0a99f', padding: '0.75rem', fontSize: '1rem', fontFamily: 'var(--font-sans)' }}
        aria-label={prompt}
      />
      <div style={{ fontSize: '0.9em', color: 'var(--color-muted)', marginTop: '0.5rem' }}>
        Reflections are stored only in this browser.
      </div>
    </div>
  );
}
