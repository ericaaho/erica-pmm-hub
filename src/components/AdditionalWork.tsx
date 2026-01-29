import practiceAppImage from "@/assets/practice-app.png";
import snapsellAppImage from "@/assets/snapsell-app.png";

interface AdditionalWorkItem {
  title: string;
  subtitle: string;
  paragraph1: string;
  paragraph2: string;
  image: string;
  link?: {
    text: string;
    url: string;
  };
  hackathon?: {
    name: string;
    status: "ongoing" | "completed";
    place?: string;
  };
}

const additionalWorkItems: AdditionalWorkItem[] = [
  {
    title: "Practice App",
    subtitle: "Product Management & Vibe Coding",
    paragraph1:
      "Practice helps friends learn together by turning topics into flashcard decks, gamifying studying, and using AI to analyze areas to improve.",
    paragraph2:
      "View customer segmentation to see how I identified key user personas.",
    image: practiceAppImage,
    link: {
      text: "customer segmentation",
      url: "https://miro.com/app/board/uXjVLhiVwkY=/?share_link_id=971844252627",
    },
    hackathon: {
      name: "Vibe Coding Hackathon",
      status: "ongoing",
    },
  },
  {
    title: "Snapsell App",
    subtitle: "Product Management & Vibe Coding",
    paragraph1:
      "Snapsell helps resellers quickly list items for sale by snapping a photo and using AI to generate listing details, price recommendations, and marketplace-optimized descriptions.",
    paragraph2:
      "This project explores AI-powered commerce tools and the future of micro-entrepreneurship.",
    image: snapsellAppImage,
    hackathon: {
      name: "Vibe Coding Hackathon",
      status: "completed",
      place: "3rd Place",
    },
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
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
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
        {/* Match Notable PMM max width */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Additional PMM Work</h2>

          {/* 2-up grid aligned with Notable PMM section */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-8">
            {additionalWorkItems.map((item) => (
              <article
                key={item.title}
                className="bg-background rounded-xl border border-border/50 overflow-hidden flex flex-col relative"
              >
                {/* Image wrapper with badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/50">
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
