import React from 'react';

export function Hero({ onStart, onWhoIsJesus }: { onStart?: () => void; onWhoIsJesus?: () => void }) {
  return (
    <section style={{
      background: 'linear-gradient(120deg, #181a1b 60%, #23272a 100%)',
      color: 'var(--color-cream)',
      padding: '3.5rem 1.5rem 2.5rem 1.5rem',
      borderRadius: 'var(--border-radius)',
      boxShadow: 'var(--shadow-soft)',
      textAlign: 'center',
      margin: '2rem 0',
    }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>The Gospel Journey</h1>
      <h2 style={{ fontWeight: 400, fontSize: '1.3rem', color: 'var(--color-cream)', marginBottom: '1.5rem' }}>
        Walk through Scripture and discover the good news of Jesus Christ.
      </h2>
      <p style={{ maxWidth: 540, margin: '0 auto 2rem auto', color: 'var(--color-muted)', fontSize: '1.1rem' }}>
        From creation to the cross, from the empty tomb to a personal response, Gospel Journey helps you understand who Jesus is, why He came, and what it means to trust Him as Savior.
      </p>
      <div style={{ margin: '1.5rem 0' }}>
        <button className="button" style={{ marginRight: '1rem' }} onClick={onStart}>Start the Journey</button>
        <button className="button" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-gold)', border: '1px solid var(--color-gold)' }} onClick={onWhoIsJesus}>Who Is Jesus?</button>
      </div>
      <div style={{ margin: '2.5rem 0 0 0', color: 'var(--color-gold)', fontWeight: 600, fontSize: '1.1rem' }}>
        Created for God &rarr; Separated by Sin &rarr; Promised a Savior &rarr; Jesus Came &rarr; Jesus Died &rarr; Jesus Rose &rarr; Respond by Faith
      </div>
    </section>
  );
}
