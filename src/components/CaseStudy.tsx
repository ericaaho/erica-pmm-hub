import { ReactNode } from "react";

interface CaseStudyProps {
  title: string;
  titleLink?: string;
  impact: ReactNode;
  whatIDid: string[];
  image?: string;
}

export function CaseStudy({ title, titleLink, impact, whatIDid, image }: CaseStudyProps) {
  const TitleContent = titleLink ? (
    <a
      href={titleLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors underline underline-offset-4"
    >
      {title}
    </a>
  ) : (
    title
  );

  return (
    <article className="py-8 border-b border-border/50 last:border-b-0 last:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-8 items-start">
        {/* Image or Placeholder */}


