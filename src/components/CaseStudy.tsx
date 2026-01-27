interface CaseStudyProps {
  title: string;
  impactContext: string;
  whatIDid: string;
  imageAlt: string;
}

export function CaseStudy({ title, impactContext, whatIDid, imageAlt }: CaseStudyProps) {
  return (
    <article className="py-12 border-b border-border/50 last:border-b-0">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image Placeholder */}
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border/50">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-muted-foreground" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">{imageAlt}</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          
          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              Impact & Context
            </h4>
            <p className="text-muted-foreground leading-relaxed">{impactContext}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              What I Did
            </h4>
            <p className="text-muted-foreground leading-relaxed">{whatIDid}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
