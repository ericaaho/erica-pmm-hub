interface CaseStudyProps {
  title: string;
  impact: string;
  whatIDid: string[];
}

export function CaseStudy({ title, impact, whatIDid }: CaseStudyProps) {
  return (
    <article className="py-12 border-b border-border/50 last:border-b-0">
      <div className="space-y-6 max-w-3xl">
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Impact
          </h4>
          <p className="text-muted-foreground leading-relaxed">{impact}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            What I Did
          </h4>
          <ul className="space-y-2">
            {whatIDid.map((item, index) => (
              <li key={index} className="text-muted-foreground leading-relaxed flex">
                <span className="text-primary mr-3 mt-1.5 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
