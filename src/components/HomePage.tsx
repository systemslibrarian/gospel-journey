import React from 'react';

import { Hero } from './Hero';
import { SectionHeader } from './SectionHeader';
import { ScriptureCard } from './ScriptureCard';
import { Footer } from './Footer';
import { GOSPEL_CLARITY_CARDS } from '../data/clarityCards';
import { SCRIPTURES } from '../data/scriptures';

const startWhereYouAre = [
  {
    title: 'I am curious',
    description: 'Explore the big story of the Bible and who Jesus is.',
    href: '/journey.html',
  },
  {
    title: 'I have questions',
    description: 'Find answers about faith, grace, and salvation.',
    href: '/why-saving.html',
  },
  {
    title: 'I want to know Jesus',
    description: 'See who Jesus is and what He has done for you.',
    href: '/who-is-jesus.html',
  },
  {
    title: 'I recently trusted Christ',
    description: 'Discover your next steps as a new believer.',
    href: '/next-steps.html',
  },
];

export function HomePage() {
  const john316 = SCRIPTURES.find(s => s.id === 'john-3-16');
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link" style={{ position: 'absolute', left: '-999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden', zIndex: 1000, background: 'var(--color-gold)', color: '#181a1b', padding: '0.5rem 1rem', borderRadius: 8, fontWeight: 600 }}
        onFocus={e => { e.currentTarget.style.left = '8px'; e.currentTarget.style.top = '8px'; e.currentTarget.style.width = 'auto'; e.currentTarget.style.height = 'auto'; e.currentTarget.style.overflow = 'visible'; }}
        onBlur={e => { e.currentTarget.style.left = '-999px'; e.currentTarget.style.top = 'auto'; e.currentTarget.style.width = '1px'; e.currentTarget.style.height = '1px'; e.currentTarget.style.overflow = 'hidden'; }}
      >Skip to main content</a>
      <Hero
        onStart={() => (window.location.href = '/journey.html')}
        onWhoIsJesus={() => (window.location.href = '/who-is-jesus.html')}
      />
      <main id="main-content" style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
        <SectionHeader
          title="Start Where You Are"
          subtitle="Wherever you are on your journey, there is a next step."
        />
        <section aria-label="Start Where You Are" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {startWhereYouAre.map(card => (
            <a
              key={card.title}
              href={card.href}
              style={{
                background: 'var(--color-bg-alt)',
                color: 'var(--color-cream)',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow-soft)',
                padding: '1.5rem',
                minWidth: 220,
                maxWidth: 260,
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                transition: 'background 0.2s',
                outline: 'none',
                borderLeft: '4px solid var(--color-gold)',
                margin: '0.5rem 0',
                boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
              }}
              tabIndex={0}
              aria-label={card.title}
              onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-gold)'}
              onBlur={e => e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.10)'}
            >
              <div style={{ fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>{card.title}</div>
              <div>{card.description}</div>
            </a>
          ))}
        </section>
        <SectionHeader
          title="The Heart of the Gospel"
          subtitle="God’s love is at the center of the story."
        />
        {john316 && <section aria-label="John 3:16 Scripture" style={{ marginBottom: '2.5rem' }}><ScriptureCard scripture={john316} /></section>}
        <SectionHeader
          title="Gospel Clarity"
          subtitle="What is the Gospel? What is sin? What is grace?"
        />
        <section aria-label="Gospel Clarity Cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {GOSPEL_CLARITY_CARDS.map(card => (
            <div
              key={card.title}
              style={{
                background: 'var(--color-parchment)',
                color: '#2d2d2d',
                borderLeft: '6px solid var(--color-gold)',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow-soft)',
                padding: '1.2rem 1.5rem',
                minWidth: 220,
                maxWidth: 260,
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: 500,
                margin: '0.5rem 0',
                outline: 'none',
                transition: 'box-shadow 0.2s',
              }}
              tabIndex={0}
              aria-label={card.title}
              onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-gold)'}
              onBlur={e => e.currentTarget.style.boxShadow = 'var(--shadow-soft)'}
            >
              <div style={{ fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>{card.title}</div>
              <div>{card.summary}</div>
            </div>
          ))}
        </section>
        <SectionHeader
          title="You Do Not Have to Understand Everything to Come to Jesus"
          subtitle="The Gospel is clear: Christ died for our sins, He rose again, and all who call upon the name of the Lord shall be saved."
        />
      </main>
      <Footer />
    </>
  );
}
