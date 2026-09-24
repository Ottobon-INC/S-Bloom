import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  className?: string;
  threshold?: number; // 0.0 to 1.0 (percentage of element visible before triggering)
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once revealed, we don't need to observe it anymore
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const style: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={domRef}
      className={`reveal-wrapper ${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
