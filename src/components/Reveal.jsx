"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.18 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Tag ref={ref} className={`reveal-group ${visible ? "is-revealed" : ""} ${className}`}>{children}</Tag>;
}
