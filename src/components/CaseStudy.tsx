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
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-8 items-start">
        {/* Image */}
        {image && (
          <div className="w-full md:w-[300px] h-auto md:h-[210px] rounded-lg overflow-hidden border border-border/50 flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">{TitleContent}</h3>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Impact</h4>
            <div className="text-muted-foreground leading-relaxed">{impact}</div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">What I Did</h4>
            <ul className="space-y-2">
              {whatIDid.map((item, index) => (
                <li
                  key={index}
                  className="text-muted-foreground leading-relaxed flex items-start md:items-center break-words"
                >
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
