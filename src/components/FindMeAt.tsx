import { Linkedin, Mail } from "lucide-react";

const interests = [
  "Jazz or Contemporary dance classes in Brooklyn 💃",
  "Coffee shops reading a book, short stories, or essays ☕",
  "Toastmasters practicing my public speaking skills 🎤",
];

export function FindMeAt() {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-8">You can find me at</h2>

          <ul className="space-y-3 mb-10">
            {interests.map((interest) => (
              <li key={interest} className="text-muted-foreground">
                {interest}
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://www.linkedin.com/in/ericaho1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:erica.sy.ho@gmail.com"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
