export function AdditionalWork() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        {/* Match Notable PMM Work max width */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Additional PMM Work</h2>

          <div className="space-y-8">
            {additionalWorkItems.map((item) => (
              <article key={item.title} className="bg-background rounded-xl border border-border/50 overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr] gap-8 items-stretch">
                  {/* Image column */}
                  <div className="relative rounded-lg overflow-hidden border border-border/50 h-full">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

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

                  {/* Content column */}
                  <div className="p-6 md:py-6 md:pl-0 md:pr-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
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
