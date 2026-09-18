"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    setReady(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.18 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Tag ref={ref} className={`reveal-group ${ready ? "reveal-ready" : ""} ${visible ? "is-revealed" : ""} ${className}`}>{children}</Tag>;
}
