import { ReactNode } from "react";

interface CaseStudyProps {
  title: string;
  titleLink?: string;
  impact: ReactNode;
  whatIDid: string[];
  image?: string;
}

export function CaseStudy({ title, titleLink, impact, whatIDid, image }: CaseStudyProps) {
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
      <div className="grid gap-8 items-start md:grid-cols-[minmax(0,300px)_1fr]">
        {/* Image or Placeholder */}
        <div className="w-full md:w-auto max-w-[300px] rounded-lg overflow-hidden border border-border/50 bg-muted">
          {image ? (
            <div className="aspect-[4/3] w-full">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="aspect-[4/3] w-full flex items-center justify-center">
              <span className="text-sm text-muted-foreground text-center px-4">Case study visual coming soon</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">{TitleContent}</h3>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Impact</h4>
            <p className="text-muted-foreground leading-relaxed">{impact}</p>
          </div>

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
