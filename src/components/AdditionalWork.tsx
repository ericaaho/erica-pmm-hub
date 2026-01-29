import practiceAppImage from "@/assets/practice-app.png";
import snapsellAppImage from "@/assets/snapsell-app.png";

interface AdditionalWorkItem {
  title: string;
  subtitle: string;
  image: string;
  paragraph1: string;
  paragraph2: string;
  link?: { text: string; url: string };
  hackathon?: { name: string; status: "ongoing" | "completed"; place?: string };
}

const additionalWorkItems: AdditionalWorkItem[] = [
  {
    title: "Practice App",
    subtitle: "AI-Powered Interview Prep",
    image: practiceAppImage,
    paragraph1:
      "Built an AI interview coach that helps job seekers practice behavioral interviews with real-time feedback on their responses.",
    paragraph2:
      "Created customer segmentation framework to identify key user personas and their pain points. View the Miro board for details.",
    link: {
      text: "View the Miro board",
      url: "https://miro.com/app/board/example",
    },
    hackathon: { name: "AI Hackathon 2024", status: "completed", place: "2nd Place" },
  },
  {
    title: "Snapsell App",
    subtitle: "AI-Powered Marketplace Listing",
    image: snapsellAppImage,
    paragraph1:
      "Developed an app that uses AI to instantly create optimized marketplace listings from a single photo, reducing listing time from 10 minutes to 30 seconds.",
    paragraph2:
      "Led go-to-market strategy including competitive positioning, pricing research, and launch messaging for the beta release.",
    hackathon: { name: "Startup Weekend", status: "ongoing" },
  },
];

function formatParagraph(text: string, link?: { text: string; url: string }) {
  if (!link) return text;

  const parts = text.split(link.text);
  if (parts.length === 1) return text;

  return (
    <>
      {parts[0]}
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-primary transition-colors"
      >
        {link.text}
      </a>
      {parts[1]}
    </>
  );
}

export function AdditionalWork() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Additional PMM Work</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {additionalWorkItems.map((item) => (
              <article
                key={item.title}
                className="bg-background rounded-xl border border-border/50 overflow-hidden flex flex-col md:flex-row"
              >
                <div className="w-full md:w-[280px] flex-shrink-0 relative border-b md:border-b-0 md:border-r border-border/50">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

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
                </div>

                <div className="p-6 space-y-3 flex-1">
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
