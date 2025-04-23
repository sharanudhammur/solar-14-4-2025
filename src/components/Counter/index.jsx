"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter({ start, end, duration, text }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // trigger only once when it comes into view
    threshold: 0.5 // 50% visibility
  });

  return (
    <div ref={ref}>
      {inView && <CountUp start={start} end={end} duration={duration} />}
      {text}
    </div>
  );
}
