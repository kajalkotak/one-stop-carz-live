// app/components/Counter.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
};

export default function Counter({ value, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);

  // detect when visible
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // animation time in ms
    const startTime = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * value);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      className="text-4xl font-extrabold text-red-600"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {count}
      {suffix}
    </motion.span>
  );
}
