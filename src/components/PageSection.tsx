import { cn } from "@/lib/utils";

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageSection({ children, className }: PageSectionProps) {
  return (
    <section className={cn("py-16 md:py-20 px-4 md:px-8", className)}>
      {children}
    </section>
  );
}
