import { Layout } from "@/components/Layout";
import { ValueCard } from "@/components/ValueCard";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CaseStudy } from "@/components/CaseStudy";
import { AdditionalWork } from "@/components/AdditionalWork";
import { FindMeAt } from "@/components/FindMeAt";
import { PageSection } from "@/components/PageSection";
import profilePhoto from "@/assets/profile-photo.jpg";
import divvyImage from "@/assets/acquisition.png";
import billVirtualCardImage from "@/assets/bill-virtual-card-battlecard.png";
import { motion } from "framer-motion";

const values = [
  { title: "Openness", description: "Different perspectives lead to better outcomes." },
  { title: "Curiosity", description: "Interest and questions fuel learning." },
  { title: "Trust", description: "Psychological safety in a team empowers everyone." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <PageSection className="bg-white">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="aspect-square rounded-2xl overflow-hidden border border-border/50 max-w-md mx-auto w-full shadow-lg">
            <img src={profilePhoto} alt="Erica" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold">Hello there! I'm Erica</h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>I'm a fintech product leader with 7+ years of experience launching payments and card products...</p>
              <p>In a market crowded with increasingly similar offerings...</p>
              <p>Outside of work, I vibe code with friends...</p>
            </div>
          </div>
        </motion.div>
      </PageSection>

      {/* Values */}
      <PageSection className="bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">My Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Companies */}
      <motion.div
        className="py-16 md:py-20 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CompanyLogos />
      </motion.div>

      {/* Notable PMM */}
      <PageSection className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="max-w-5xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Notable PMM Work</h2>

          <CaseStudy
            title="Dave Debit Card Rewards — Positioning & Messaging"
            impact={<>Established clear category differentiation...</>}
            whatIDid={
              [
                /* unchanged */
              ]
            }
          />

          <CaseStudy
            title="BILL × Divvy — Acquisition Narrative & Customer Insights"
            image={divvyImage}
            impact={<>Influenced strategic direction...</>}
            whatIDid={
              [
                /* unchanged */
              ]
            }
          />

          <CaseStudy
            title="BILL Virtual Card Rewards — Sales Enablement"
            image={billVirtualCardImage}
            impact={<>Drove 5% increase in win rates...</>}
            whatIDid={
              [
                /* unchanged */
              ]
            }
          />
        </motion.div>
      </PageSection>

      {/* Additional PMM */}
      <PageSection className="bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AdditionalWork />
        </motion.div>
      </PageSection>

      {/* Find Me At */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FindMeAt />
        </motion.div>
      </PageSection>
    </Layout>
  );
}
