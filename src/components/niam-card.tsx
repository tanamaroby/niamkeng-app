import { cn } from "@/lib/utils";
import { FC } from "react";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

export interface NiamCardProps {
  title: string;
  chinese?: string;
  lines: string[];
  linesClassname?: string;
}

const NiamCard: FC<NiamCardProps> = ({
  title,
  chinese,
  lines,
  linesClassname,
}) => {
  return (
    <div className="w-full p-6 sm:p-7 rounded-2xl border bg-card shadow-sm">
      <CardHeader className="flex flex-col items-center text-center gap-1 mb-4 px-0">
        <CardTitle className="font-serif text-xl sm:text-2xl font-semibold text-primary">
          {title}
        </CardTitle>
        {chinese && (
          <p className="text-sm italic text-muted-foreground">{chinese}</p>
        )}
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2.5 px-0">
        {lines.map((line) => (
          <p
            className={cn(
              "chant-text font-medium text-center text-foreground uppercase tracking-wide",
              linesClassname
            )}
            key={`${title}-${line}`}
          >
            {line}
          </p>
        ))}
      </CardContent>
    </div>
  );
};

export default NiamCard;
