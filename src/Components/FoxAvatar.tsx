import React from 'react';

export const FoxAvatar = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">
      <path d="M50 20 L30 40 L35 45 L50 35 L65 45 L70 40 Z" fill="#f97316" />
      <path d="M35 45 L50 80 L65 45 Z" fill="#fb923c" />
      <circle cx="43" cy="50" r="3" fill="#00f2ff" className="animate-pulse" />
      <circle cx="57" cy="50" r="3" fill="#00f2ff" className="animate-pulse" />
      <path d="M48 60 L50 62 L52 60 Z" fill="#111" />
      <line x1="30" y1="40" x2="20" y2="30" stroke="#00f2ff" strokeWidth="1" />
      <line x1="70" y1="40" x2="80" y2="30" stroke="#00f2ff" strokeWidth="1" />
    </svg>
  </div>
);