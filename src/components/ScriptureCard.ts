import type { Scripture } from '../data/scriptures';

export function ScriptureCard({ scripture }: { scripture: Scripture }) {
  return (
    <div className="scripture-card" tabIndex={0} aria-label={`Scripture: ${scripture.reference}`}>
      <div style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>
        “{scripture.text}”
      </div>
      <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>— {scripture.reference}</div>
      {scripture.plainMeaning && (
        <div style={{ color: '#6d5c3d', marginBottom: '0.5rem' }}>{scripture.plainMeaning}</div>
      )}
      {scripture.reflectionQuestion && (
        <div style={{ marginTop: '0.5rem', fontSize: '0.95em', color: '#7a6c4f' }}>
          <strong>Reflect:</strong> {scripture.reflectionQuestion}
        </div>
      )}
      {scripture.prayerPrompt && (
        <div style={{ marginTop: '0.5rem', fontSize: '0.95em', color: '#7a6c4f' }}>
          <strong>Pray:</strong> {scripture.prayerPrompt}
        </div>
      )}
    </div>
  );
}
