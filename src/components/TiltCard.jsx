import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * A reusable 3D tilt card component that uses Framer Motion.
 * It provides a smooth tilt effect toward the mouse and a subtle glare.
 */
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  // Motion values for mouse position (0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for the values
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-10, 10]);

  // Handle mouse movement over the card
  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    x.set(xPct);
    y.set(yPct);
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  // Create a combined transform for the glare effect
  // Since useTransform currently doesn't support easy multi-value to complex string mapping in this way,
  // we can use a simpler approach or a dedicated motion div for the light effect.
  const glareX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-full transition-shadow duration-500 rounded-2xl ${className}`}
    >
      {/* Content wrapper with transform-z to create depth */}
      <div 
        style={{ 
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d" 
        }}
        className="w-full h-full relative z-20"
      >
        {children}
      </div>

      {/* Glossy glare effect layer */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255,255,255,0.08) 0%, transparent 80%)`,
          '--glare-x': glareX,
          '--glare-y': glareY,
        }}
      />
      
      {/* Secondary glow bottom layer */}
      <div className="absolute -inset-2 bg-gradient-to-br from-nhiquela-cyan/10 to-nhiquela-purple/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none rounded-[2rem]" />
    </motion.div>
  );
};

export default TiltCard;
