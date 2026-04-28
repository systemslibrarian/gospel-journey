import React from 'react';

export function ResponseButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button className="button" style={{ margin: '0.5rem 0.5rem 0.5rem 0', minWidth: 180 }} onClick={onClick} aria-label={label}>
      {label}
    </button>
  );
}
