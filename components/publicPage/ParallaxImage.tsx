"use client";

import { cn } from 'cn';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ParallaxProps {
  src: string;
  alt: string;
  className?: string;
  yOffset?: number; 
}

interface ParallaxZoomProps {
  src: string;
  alt: string;
  className?: string;
  zoomOffset?: number; 
}

export function ParallaxImageY({ src, alt, yOffset = 150, className }: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-yOffset, yOffset]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </motion.div>
    </div>
  );
}

export function ParallaxImageZoomOut({ src, alt, zoomOffset = 150, className }: ParallaxZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + zoomOffset / 1000]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </motion.div>
    </div>
  );
}

export default ParallaxImageY;