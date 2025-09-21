"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Valerie",
    location: "Holland Park, Brisbane",
    comment:
      "Thanks to Akshay, my house is sparkling with clean windows- many of them hard to reach, but he managed to clean them all. He is very pleasant to have in the house, and I highly recommend him.",
  },
  {
    name: "Emily R.",
    location: "New Farm, Brisbane",
    comment:
      "Moppit Clean did an amazing job! The place looked brand new and smelled fresh for days.",
  },
  {
    name: "James P.",
    location: "West End, Brisbane",
    comment:
      "Professional, punctual, and thorough. They handled our deep clean perfectly before moving in.",
  },
  {
    name: "Sofia L.",
    location: "Teneriffe, Brisbane",
    comment:
      "Reliable service every time. Our office has never looked better—highly recommend!",
  },
  {
    name: "Mark D.",
    location: "Carindale, Brisbane",
    comment:
      "Great communication and excellent attention to detail. Windows are crystal clear!",
  },
  {
    name: "Priya S.",
    location: "Indooroopilly, Brisbane",
    comment:
      "They were fast and meticulous. The team went above and beyond our expectations.",
  },
];

const ADVANCE_MS = 3000;

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);
  const remainingRef = useRef(ADVANCE_MS);
  const lastTickRef = useRef(Date.now());
  const isPausedRef = useRef(false);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const scheduleNext = (delay) => {
    clearTimer();
    lastTickRef.current = Date.now();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      remainingRef.current = ADVANCE_MS;
      scheduleNext(ADVANCE_MS);
    }, delay);
  };

  useEffect(() => {
    scheduleNext(remainingRef.current);
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    if (isPausedRef.current) return;
    const elapsed = Date.now() - lastTickRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    isPausedRef.current = true;
    clearTimer();
  };

  const handleMouseLeave = () => {
    if (!isPausedRef.current) return;
    isPausedRef.current = false;
    scheduleNext(Math.max(0, remainingRef.current));
  };

  const goTo = (idx) => {
    setActiveIndex(idx);
    remainingRef.current = ADVANCE_MS;
    if (!isPausedRef.current) scheduleNext(ADVANCE_MS);
  };

  return (
    <div
      className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm animate-scale-in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="min-w-full">
              <div className="h-full">
                <div className="text-zinc-700 leading-7">“{t.comment}”</div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900">{t.name}</p>
                    <p className="text-sm text-zinc-600">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={
                "h-2.5 w-2.5 rounded-full transition-colors " +
                (idx === activeIndex
                  ? "bg-primary"
                  : "bg-zinc-300 hover:bg-zinc-400")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
