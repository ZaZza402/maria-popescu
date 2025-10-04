import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [phase, setPhase] = useState<'initial' | 'breathing' | 'emerging' | 'complete'>('initial');

  useEffect(() => {
    // Reset states for new page
    setIsVisible(false);
    setIsLoaded(false);
    setPhase('initial');

    // Phase 1: Initial pause (like taking a deep breath)
    const breathTimer = setTimeout(() => {
      setPhase('breathing');
      setIsLoaded(true);
    }, 100);

    // Phase 2: Gentle emergence (like mindful awareness)
    const emergingTimer = setTimeout(() => {
      setPhase('emerging');
    }, 300);

    // Phase 3: Full presence (content fully visible)
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
      setPhase('complete');
    }, 600);

    return () => {
      clearTimeout(breathTimer);
      clearTimeout(emergingTimer);
      clearTimeout(visibilityTimer);
    };
  }, [children]);

  // Therapeutic transition states
  const getTransitionClasses = () => {
    switch (phase) {
      case 'initial':
        return 'opacity-0 scale-98 blur-md';
      case 'breathing':
        return 'opacity-30 scale-99 blur-sm';
      case 'emerging':
        return 'opacity-70 scale-100 blur-xs';
      case 'complete':
        return isVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-70 scale-100 blur-xs';
      default:
        return 'opacity-0 scale-98 blur-md';
    }
  };

  return (
    <div 
      className={`transition-all duration-1000 ease-in-out ${getTransitionClasses()} ${
        isLoaded ? '' : 'invisible'
      }`}
      style={{
        transformOrigin: 'center center',
        willChange: 'transform, opacity, filter',
        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', // Calm, therapeutic easing
        backfaceVisibility: 'hidden', // Smooth rendering
        perspective: '1000px', // 3D smoothness
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;