type HonorPart = {
  text: string;
  href?: string;
  bold?: boolean;
};

type Honor = {
  parts: HonorPart[];
};

type HonorsMarqueeProps = {
  items: Honor[];
};

function HonorsMarquee({ items }: HonorsMarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-neutral-200 py-5"
      aria-label="honors and achievements"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="honors-marquee flex w-max gap-14 hover:[animation-play-state:paused]">
        {loop.map((honor, index) => (
          <div
            key={`${honor.parts.map((part) => part.text).join("")}-${index}`}
            className="flex shrink-0 items-center gap-4 text-lg font-light text-[#6f6480]"
          >
            <span className="text-base leading-none text-[#7e61b4]">✦</span>
            <span>
              {honor.parts.map((part, partIndex) => {
                const className = part.bold ? "font-bold text-[#2b223d]" : "";

                return part.href ? (
                  <a
                    key={partIndex}
                    href={part.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${className} transition-colors duration-200 hover:text-[#7e61b4] hover:underline`}
                  >
                    {part.text}
                  </a>
                ) : (
                  <span key={partIndex} className={className}>
                    {part.text}
                  </span>
                );
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HonorsMarquee;
export type { Honor };
