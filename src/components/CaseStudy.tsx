import { ReactNode } from "react";

interface CaseStudyProps {
  title: string;
  titleLink?: string;
  impact: ReactNode;
  quote?: { text: string; name: string; context?: string };
  whatIDid: string[];
  image?: string;
}

export function CaseStudy({ title, titleLink, impact, quote, whatIDid, image }: CaseStudyProps) {
  const TitleContent = titleLink ? (
    <a
      href={titleLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors underline underline-offset-4"
    >
      {title}
    </a>
  ) : (
    title
  );

  return (
    <article className="py-8 border-b border-border/50 last:border-b-0 last:pb-0">
      <div className="flex flex-col md:flex-row md:gap-8 items-start">
        {/* Image / Placeholder */}
        <div className="flex-shrink-0 w-full md:w-[300px] rounded-lg overflow-hidden border border-border/50 bg-muted">
          <div className="aspect-[4/3] w-full flex items-center justify-center">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover object-center" />
            ) : (
              <span className="text-sm text-muted-foreground text-center px-4">Case study visual coming soon</span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 md:mt-0 md:flex-1 space-y-6 md:pl-4">
          <h3 className="text-2xl font-semibold text-foreground">{TitleContent}</h3>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Impact</h4>
            <p className="text-muted-foreground leading-relaxed">{impact}</p>
          </div>

          {quote && (
            <div className="border-l-2 border-primary/40 pl-4 py-1">
              <p className="text-muted-foreground italic leading-relaxed">"{quote.text}"</p>
              <p className="text-sm text-foreground/70 mt-2 font-medium">
                — {quote.name}{quote.context ? `, ${quote.context}` : ""}
              </p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">What I Did</h4>
            <ul className="space-y-2">
              {whatIDid.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start md:items-center">
                  <span className="text-primary mr-3 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
