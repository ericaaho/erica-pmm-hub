import { Layout } from "@/components/Layout";
import { CaseStudy } from "@/components/CaseStudy";

const caseStudies = [
  {
    title: "Dave Debit Card Rewards Positioning and Messaging",
    impactContext:
      "Created product differentiation by positioning Dave Debit Card Rewards as the only debit card rewards program with cash back on all purchases, resulting in 27% increase in debit card adoption.",
    whatIDid:
      "Work included writing a one pager on competitive positioning of competitor reward programs and recommendation on positioning strategy, running an in-app painted door to identify most impactful rewards messaging and to test product market fit, running an ROI analysis on multiple cash back scenarios to ensure competitive positioning that is also a net positive on revenue, and conducting customer interviews and running surveys to better understand and improve customer comprehension of rewards value proposition and messaging.",
    imageAlt: "Dave Debit Card Rewards project image",
  },
  {
    title: "Divvy Acquisition Narrative",
    impactContext:
      "Influenced strategy for the $2.5B Divvy acquisition by owning customer and market research.",
    whatIDid:
      "Work included running customer interviews to understand existing customers' jobs-to-be-done, customers' understanding of Bill's brand identity, the different customer personas arising from distinct customer segments. Conducted market research on incumbent expense management platform and accounts payable competitor positioning and capabilities. Consolidated customer and market research insights into one pager and pitch deck and presented findings and recommendations to the leadership team, influencing decision to acquire Divvy.",
    imageAlt: "Divvy Acquisition project image",
  },
  {
    title: "Virtual Card Rewards Sales Enablement",
    impactContext:
      "Increased mid-market user growth and win rates by 5% by enabling and empowering sales team to use leverage rewards as a new acquisition tool.",
    whatIDid:
      "Work included partnering with sales to identify virtual card rewards as an acquisition lever, creating sales enablement materials which included battle cards, sales training, and call scripts to arm sales team with the right positioning and messaging, and jumping into sales calls and sales training to continue to iterate on the product and the sales enablement materials.",
    imageAlt: "Virtual Card Rewards project image",
  },
];

export default function Work() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Notable PMM Work
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A selection of product marketing projects where I drove measurable impact through strategic positioning, customer research, and cross-functional collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            {caseStudies.map((study) => (
              <CaseStudy key={study.title} {...study} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
