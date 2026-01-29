import snapsellImage from "@/assets/snapsell-app.jpg";
import practiceAppImage from "@/assets/practice-app.png";

interface AdditionalWorkItem {
  title: string;
  subtitle: string;
  paragraph1: string;
  paragraph2: string;
  image: string;
  hackathon?: {
    name: string;
    status: "ongoing" | "completed";
    place?: string;
  };
  link?: {
    text: string;
    url: string;
  };
}

const additionalWorkItems: AdditionalWorkItem[] = [
  {
    title: "Practice App",
    subtitle: "Positioning and Messaging",
    paragraph1: "Gemini 3 Hackathon Participant. An AI-powered app for novice sports players to improve their game.",
    paragraph2:
      "Led customer segmentation resulting in prioritization of different customer personas for MVP. Drove definition of value proposition and crafted positioning and messaging frameworks for identified target audience.",
    image: practiceAppImage,
    hackathon: {
      name: "Gemini 3 Hackathon",
      status: "ongoing",
    },
    link: {
      text: "customer segmentation",
      url: "https://miro.com/app/board/uXjVJ7QTgG0=/?share_link_id=826969306234",
    },
  },
  {
    title: "Snapsell App",
    subtitle: "Messaging and Positioning",
    paragraph1:
      "4th place winner in Flowgad Hackathon. An AI-powered marketplace app for casual sellers to earn money.",
    paragraph2:
      "Developed product and messaging positioning for casual sellers through market analysis and customer feedback. Presented live the product demo and value prop for an AI-powered marketplace app.",
    image: snapsellImage,
    hackathon: {
      name: "Flowgad Hackathon",
      status: "completed",
      place: "4th Place",
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Additional PMM Work</h2>

          {/* 2-up grid with fixed card width matching Notable PMM Work */}
          <div className="grid gap-8 justify-center md:grid-cols-[repeat(2,minmax(0,280px))]">
            {additionalWorkItems.map((item) => (
              <article
                key={item.title}
                className="bg-background rounded-xl border border-border/50 overflow-hidden flex flex-col relative"
              >
                {/* Image wrapper with badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/50">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                  {/* Hackathon badge (scaled for 280px wide cards) */}
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
