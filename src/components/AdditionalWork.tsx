import snapsellImage from "@/assets/snapsell-app.png";
import practiceAppImage from "@/assets/practice-app.png";
interface AdditionalWorkItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: {
    text: string;
    url: string;
  };
}

const additionalWorkItems: AdditionalWorkItem[] = [
  {
    title: "Practice App",
    subtitle: "Messaging and Positioning",
    description:
      "Gemini 3 Hackathon Participant. An AI-powered app for novice sports players to improve their game. Led customer segmentation resulting in prioritization of different customer personas for MVP. Drove definition of value proposition and crafted positioning and messaging frameworks for identified target audience.",
    image: practiceAppImage,
    link: {
      text: "customer segmentation",
      url: "https://miro.com/app/board/uXjVJ7QTgG0=/?share_link_id=826969306234",
    },
  },
  {
    title: "Snapsell App",
    subtitle: "Messaging and Positioning",
    description:
      "4th place winner in Flowgad Hackathon. An AI-powered marketplace app for casual sellers to make a few extra bucks. Developed product and messaging positioning for casual sellers through market analysis and customer feedback. Presented live the product demo and value prop for an AI-powered marketplace app.",
    image: snapsellImage,
  },
];

function formatDescription(item: AdditionalWorkItem) {
  if (!item.link) return item.description;

  const parts = item.description.split(item.link.text);
  if (parts.length === 1) return item.description;

  return (
    <>
      {parts[0]}
      <a
        href={item.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      >
        {item.link.text}
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
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">
            Additional PMM Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalWorkItems.map((item) => (
              <article
                key={item.title}
                className="bg-background rounded-xl overflow-hidden border border-border/50"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {formatDescription(item)}
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
