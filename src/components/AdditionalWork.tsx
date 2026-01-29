import type { ReactNode } from "react";

import practiceAppImage from "@/assets/practice-app.png";
import snapsellAppImage from "@/assets/snapsell-app.png";

type InlineLink = {
  text: string;
  url: string;
};

type Hackathon = {
  name: string;
  status: "ongoing" | "completed";
  place?: string;
};

type AdditionalWorkItem = {
  title: string;
  subtitle: string;
  image: string;
  paragraph1: string;
  paragraph2: string;
  link?: InlineLink;
  hackathon?: Hackathon;
};

const additionalWorkItems: AdditionalWorkItem[] = [
  {
    title: "Practice App",
    subtitle: "Product marketing work",
    image: practiceAppImage,
    paragraph1:
      "Selected product marketing deliverables spanning positioning, messaging, and go-to-market materials.",
    paragraph2:
      "Highlights include customer insights synthesis and collateral used to support launch planning and enablement.",
  },
  {
    title: "Snapsell App",
    subtitle: "Product marketing work",
    image: snapsellAppImage,
    paragraph1:
      "Selected product marketing work across experimentation, launch support, and product storytelling.",
    paragraph2:
      "Deliverables included market framing and messaging exploration to clarify value for target users.",
    hackathon: {
      name: "Hackathon",
      status: "ongoing",
    },
  },
];

function formatParagraph(text: string, link?: InlineLink): ReactNode {
  if (!link) return text;

  const idx = text.indexOf(link.text);
  if (idx === -1) {
    return (
      <>
        {text}{" "}
        <a
          className="underline underline-offset-4 text-primary"
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.text}
        </a>
      </>
    );
  }

  const before = text.slice(0, idx);
  const after = text.slice(idx + link.text.length);
  return (
    <>
      {before}
      <a
        className="underline underline-offset-4 text-primary"
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        {link.text}
      </a>
      {after}
    </>
  );
}

export function AdditionalWork() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        {/* Wider container, full 2-up grid */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Additional PMM Work</h2>

          {/* 2-up grid full width */}
          <div className="grid gap-8 md:grid-cols-2">
            {additionalWorkItems.map((item) => (
              <article
                key={item.title}
                className="bg-background rounded-xl border border-border/50 overflow-hidden flex flex-col"
              >
                {/* Image wrapper */}
                <div className="relative w-full overflow-hidden border-b border-border/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover"
                    // Fix height to match Notable PMM Work
                    style={{ height: "210px" }}
                  />

                  {/* Hackathon badge */}
                  {item.hackathon && (
                    <span
                      className={`absolute top-2 left-2 text-[10px] font-semibold px-1.5 py-0.5 rounded-md shadow-md ${
                        item.hackathon.status === "ongoing"
                          ? "bg-blue-500 text-white animate-pulse"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {item.hackathon.status === "ongoing"
                        ? `${item.hackathon.name} • In Progress`
                        : `${item.hackathon.name} • ${item.hackathon.place || "Completed"}`}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-primary font-medium">{item.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">{item.paragraph1}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {formatParagraph(item.paragraph2, item.link)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
