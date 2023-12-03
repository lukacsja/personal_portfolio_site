import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticContainerProps {
  children: React.ReactNode;
}

const MagneticContainer: React.FC<MagneticContainerProps> = ({ children }) => {
  const motionRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;

    if (motionRef.current) {
      const { width, height, left, top } =
        motionRef.current?.getBoundingClientRect();

      const middleX = clientX - (left + width / 2);

      const middleY = clientY - (top + height / 2);

      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      className='relative flex h-20 w-20 items-center justify-center'
      ref={motionRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticContainer;
