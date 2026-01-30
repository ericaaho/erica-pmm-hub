import { Layout } from "@/components/Layout";
import { ValueCard } from "@/components/ValueCard";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CaseStudy } from "@/components/CaseStudy";
import { AdditionalWork } from "@/components/AdditionalWork";
import { FindMeAt } from "@/components/FindMeAt";
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
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Smaller image on mobile */}
            <div className="aspect-square rounded-2xl overflow-hidden border border-border/50 max-w-xs sm:max-w-sm md:max-w-md mx-auto w-full shadow-lg">
              <img
                src={profilePhoto}
                alt="Erica - Fintech Product Marketing Leader"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-5 md:space-y-6 text-center md:text-left">
              {/* Slightly smaller heading on mobile */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
                Hello there! I'm Erica
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a fintech product leader with 7+ years of experience launching payments and card products at
                  high-growth B2B and B2C startups. Working across both sides of the market has given me a rare vantage
                  point: I understand not just how financial products work, but how people feel about money—and what
                  actually motivates them to trust, adopt, and keep using a product.
                </p>
                <p>
                  In a market crowded with increasingly similar offerings, I focus on translating complex financial
                  products into clear, human messaging that fits naturally into customers' lives.
                </p>
                <p>
                  Outside of work, I vibe code with friends, where I lead customer segmentation and craft thoughtful
                  messaging as a differentiator for success.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground mb-2 text-sm">
                  If you'd like to chat about a project or opportunity:
                </p>
                <a
                  href="mailto:erica.sy.ho@gmail.com"
                  className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
                >
                  erica.sy.ho@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-white rounded-3xl border border-border/50 shadow-sm p-6 sm:p-8 md:p-12"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
              My Values
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies */}
      <CompanyLogos />

      {/* Notable PMM Work */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-white rounded-3xl border border-border/50 shadow-sm p-6 sm:p-8 md:p-12"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Notable PMM Work
            </h2>

            {/* CaseStudies unchanged */}
            <CaseStudy ... />
            <CaseStudy ... />
            <CaseStudy ... />
          </motion.div>
        </div>
      </section>

      {/* Additional Work */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-white rounded-3xl border border-border/50 shadow-sm p-6 sm:p-8 md:p-12"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut"


