import type { ReactNode } from "react";
import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-y border-neutral-300">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="border-b border-neutral-300 last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-8 py-7 text-left transition-colors duration-200 hover:text-[#7e61b4] float-hover"
            >
              <span className="text-2xl font-bold leading-snug">{item.question}</span>
              <span
                className={[
                  "shrink-0 text-3xl font-light leading-none text-[#7e61b4] transition-transform duration-300",
                  isOpen ? "rotate-45" : "rotate-0",
                ].join(" ")}
                aria-hidden
              >
                +
              </span>
            </button>

            <div
              className={[
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]",
              ].join(" ")}
            >
              <div className="overflow-hidden">
                <div className="text-xl font-light leading-relaxed text-[#6f6480]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
