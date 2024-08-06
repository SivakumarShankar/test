// src/AnimatedCard.js

import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../pages/animation.css';

const AnimatedCard = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once
    threshold: 0.1      // Percentage of the element's visibility to trigger the animation
  });

  return (
    <div
      ref={ref}
      className={`card ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
