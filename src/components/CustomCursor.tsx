import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      const isMagnetic =
        !!target.closest('[data-magnetic]') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT';

      if (cursorAttr) {
        setCursorText(cursorAttr);
        setIsHovered(true);
      } else if (isMagnetic) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    if (!isMobile) {
      document.body.classList.add('has-custom-cursor');
      window.addEventListener('mousemove', onMouseMove);
    } else {
      document.body.classList.remove('has-custom-cursor');
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor Dot — z-[9999] so it always renders above modal overlays */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          backgroundColor: isHovered ? '#10b981' : '#ffffff',
          border: isHovered ? '2px solid #10b981' : '2px solid rgba(16,185,129,0.6)',
          mixBlendMode: 'normal',
        }}
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 5),
          y: mousePosition.y - (isHovered ? 24 : 5),
          width: isHovered ? (cursorText ? 72 : 48) : 10,
          height: isHovered ? (cursorText ? 72 : 48) : 10,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 32,
          mass: 0.08,
        }}
      >
        {cursorText && (
          <span className="flex items-center justify-center h-full text-[9px] font-bold tracking-widest text-white uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-emerald-500/50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: 40,
          height: 40,
          scale: isHovered ? 1.6 : 1,
          opacity: isHovered ? 0.4 : 0.7,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 22,
        }}
      />
    </>
  );
};
