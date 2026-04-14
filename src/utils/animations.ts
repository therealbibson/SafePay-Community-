// Animation utilities for SafePay

export const animations = {
  // Fade animations
  fadeIn: 'fadeIn 0.3s ease-in-out',
  fadeInUp: 'fadeInUp 0.4s ease-out',
  fadeInDown: 'fadeInDown 0.4s ease-out',
  fadeInLeft: 'fadeInLeft 0.4s ease-out',
  fadeInRight: 'fadeInRight 0.4s ease-out',

  // Slide animations
  slideInUp: 'slideInUp 0.3s ease-out',
  slideInDown: 'slideInDown 0.3s ease-out',
  slideInLeft: 'slideInLeft 0.3s ease-out',
  slideInRight: 'slideInRight 0.3s ease-out',

  // Scale animations
  scaleIn: 'scaleIn 0.3s ease-out',
  scaleOut: 'scaleOut 0.3s ease-out',
  pulse: 'pulse 2s infinite',

  // Bounce animations
  bounce: 'bounce 0.5s ease-out',
  bounceIn: 'bounceIn 0.6s ease-out',

  // Rotate animations
  rotateIn: 'rotateIn 0.4s ease-out',
  spin: 'spin 1s linear infinite',
};

// CSS keyframes to be added to global styles
export const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideInDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes scaleOut {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes rotateIn {
    from {
      transform: rotate(-180deg);
      opacity: 0;
    }
    to {
      transform: rotate(0);
      opacity: 1;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Staggered animations for lists */
  .stagger-in > *:nth-child(1) { animation: fadeInUp 0.3s ease-out 0s both; }
  .stagger-in > *:nth-child(2) { animation: fadeInUp 0.3s ease-out 0.1s both; }
  .stagger-in > *:nth-child(3) { animation: fadeInUp 0.3s ease-out 0.2s both; }
  .stagger-in > *:nth-child(4) { animation: fadeInUp 0.3s ease-out 0.3s both; }
  .stagger-in > *:nth-child(5) { animation: fadeInUp 0.3s ease-out 0.4s both; }
  .stagger-in > *:nth-child(6) { animation: fadeInUp 0.3s ease-out 0.5s both; }

  /* Hover effects */
  .hover-lift {
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  }
  .hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .hover-scale {
    transition: transform 0.2s ease-out;
  }
  .hover-scale:hover {
    transform: scale(1.02);
  }

  /* Loading spinner */
  .spinner {
    animation: spin 1s linear infinite;
  }

  /* Success checkmark animation */
  .checkmark-animate {
    animation: bounceIn 0.6s ease-out;
  }
`;

// Animation delay utilities
export const delays = {
  none: '0s',
  short: '0.1s',
  medium: '0.2s',
  long: '0.3s',
  xl: '0.5s',
};

// Animation duration utilities
export const durations = {
  fast: '0.15s',
  normal: '0.3s',
  slow: '0.5s',
  xl: '0.8s',
};

// Easing functions
export const easings = {
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};
