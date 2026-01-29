import type { ReactNode } from "react";

import practiceAppImage from "@/assets/practice-app-customer-seg.png";
import snapsellAppImage from "@/assets/snapsell-listing.png";

type InlineLink = {
  text: string;
  href: string;
};

type HackathonMeta = {
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
  hackathon?: HackathonMeta;
};

// -----------------
// Items with Hackathon info
// -----------------
const additionalWorkItems: AdditionalWorkItem[] = [
  {
    title: "Practice App",
    subtitle: "Positioning and Messaging",
    image: practiceAppImage,
    paragraph1: "An AI-powered app for novice sports players to improve their game.",
    paragraph2:
      "Led customer segmentation brainstorm resulting in prioritization of different customer personas for MVP. Drove definition of value proposition and crafted positioning and messaging frameworks for identified target audience.",
    link: {
      text: "customer segmentation brainstorm",
      href: "https://miro.com",
    },
    hackathon: {
      name: "Gemini 3 Hackathon",
      status: "ongoing",
    },
  },
  {
    title: "SnapSell App",
    subtitle: "Positioning and Messaging",
    image: snapsellAppImage,
    paragraph1: "An AI-powered marketplace app for casual sellers to make money.",
    paragraph2:
      "Developed product and messaging positioning for casual sellers through market analysis and customer feedback. Presented live product demo and value prop in front of an audience of 100+.",
    hackathon: {
      name: "Flowgad Hackathon",
      status: "completed",
      place: "4th Place",
    },
  },
];

// -----------------
// Format paragraph with optional inline link
// -----------------
function formatParagraph(text: string, link?: InlineLink): ReactNode {
  if (!link) return text;

  const idx = text.indexOf(link.text);
  if (idx === -1) {
    return (
      <>
        {text}{" "}
        <a
          className="underline underline-offset-4 text-primary hover:opacity-80"
          href={link.href}
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
        className="underline underline-offset-4 text-primary hover:opacity-80"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        {link.text}
      </a>
      {after}
    </>
  );
}

// -----------------
// Component
// -----------------
export function AdditionalWork() {
  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Additional PMM Work</h2>

          <div className="space-y-8">
            {additionalWorkItems.map((item) => (
              <article key={item.title} className="bg-background rounded-xl border border-border/50 overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr] gap-8 items-stretch">
                  {/* Image column */}
                  <div className="relative rounded-lg overflow-hidden border border-border/50 flex-shrink-0 w-[280px] h-[210px]">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Content column */}
                  <div className="p-6 md:py-6 md:pl-0 md:pr-6 space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>

                        {item.hackathon && (
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap ${
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

                      <p className="text-sm text-primary font-medium">{item.subtitle}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">{item.paragraph1}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {formatParagraph(item.paragraph2, item.link)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
