import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealBlockProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export function RevealBlock({ children, className = '', delayMs = 0 }: RevealBlockProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={`reveal-section ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
