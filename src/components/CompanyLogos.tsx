import daveLogo from "@/assets/dave-logo.png";
import billLogo from "@/assets/bill-logo.png";
import invoice2goLogo from "@/assets/invoice2go-logo.png";
import intuitLogo from "@/assets/intuit-logo.avif";

const companies = [
  { name: "Dave", logo: daveLogo },
  { name: "BILL", logo: billLogo },
  { name: "Invoice2go", logo: invoice2goLogo },
  { name: "Intuit", logo: intuitLogo },
];

export function CompanyLogos() {
  return (
    <section className="py-16 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-10 text-center">
            Companies Worked At
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center h-12 md:h-14"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-auto max-w-[120px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
