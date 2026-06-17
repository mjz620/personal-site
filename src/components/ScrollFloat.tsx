import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollFloatProps = {
  children: ReactNode;
  className?: string;
};

function ScrollFloat({ children, className = "" }: ScrollFloatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default ScrollFloat;