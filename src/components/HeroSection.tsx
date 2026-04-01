"use client";

import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef } from "react";

function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="pt-40 pb-20 px-6 sm:px-12 lg:px-24 max-w-[1440px] mx-auto text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-5xl sm:text-7xl font-bold text-text-primary leading-tight max-w-4xl tracking-tight"
        >
          Work That <br className="hidden sm:block" /> Speaks
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl font-sans font-normal"
        >
          We build digital products for ambitious companies.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 border border-border rounded-2xl py-10 px-16 bg-white shrink-0"
        >
          <div className="flex flex-col items-center">
            <div className="font-mono text-4xl font-bold text-text-primary mb-2 tracking-tight">
              <AnimatedCounter from={0} to={11} />
            </div>
            <div className="text-sm font-medium text-text-muted uppercase tracking-widest text-xs">Projects Delivered</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-border"></div>
          <div className="block md:hidden h-px w-20 bg-border"></div>
          
          <div className="flex flex-col items-center">
            <div className="font-mono text-4xl font-bold text-text-primary mb-2 tracking-tight">
              <AnimatedCounter from={0} to={8} />
            </div>
            <div className="text-sm font-medium text-text-muted uppercase tracking-widest text-xs">Industries Served</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-border"></div>
          <div className="block md:hidden h-px w-20 bg-border"></div>
          
          <div className="flex flex-col items-center">
            <div className="font-mono text-4xl font-bold text-text-primary mb-2 tracking-tight">
              <AnimatedCounter from={0} to={100} />%
            </div>
            <div className="text-sm font-medium text-text-muted uppercase tracking-widest text-xs">Client Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
