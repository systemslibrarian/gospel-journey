import React from 'react';

export function Footer() {
  return (
    <footer style={{ margin: '3rem 0 1.5rem 0', textAlign: 'center', color: 'var(--color-muted)', fontSize: '1rem' }}>
      <div style={{ fontWeight: 700, color: 'var(--color-gold)', fontSize: '1.1rem' }}>Gospel Journey</div>
      <div style={{ margin: '0.5rem 0 1rem 0' }}>
        An interactive path through Scripture to understand the good news of Jesus Christ.
      </div>
      <nav aria-label="Footer navigation" style={{ marginBottom: '1rem' }}>
        <a href="/index.html">Start the Journey</a> |{' '}
        <a href="/who-is-jesus.html">Who Is Jesus?</a> |{' '}
        <a href="/scarlet-thread.html">The Scarlet Thread</a> |{' '}
        <a href="/respond.html">Ready to Respond</a> |{' '}
        <a href="/next-steps.html">New Believer Next Steps</a> |{' '}
        <a href="/scripture-library.html">Scripture Library</a>
      </nav>
      <div style={{ fontStyle: 'italic', color: 'var(--color-cream)', margin: '1rem 0 0.5rem 0' }}>
        “For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth...”<br />
        <span style={{ color: 'var(--color-gold)' }}>— Romans 1:16</span>
      </div>
    </footer>
  );
}
