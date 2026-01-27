import { Card, CardContent } from "@/components/ui/card";

interface ValueCardProps {
  title: string;
  description: string;
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <Card className="border-border/50 bg-card/50 hover:bg-card transition-colors">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
