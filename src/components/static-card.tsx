import { cn } from "@/lib/utils";
import { startCase, toLower, upperCase } from "lodash";
import { FC } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export interface StaticCardProps {
  title?: string;
  description?: string;
  lines: { content: string; count?: number }[];
  linesClassname?: string;
}

const StaticCard: FC<StaticCardProps> = ({
  title,
  lines,
  linesClassname,
  description,
}) => {
  return (
    <div className="w-full p-6 sm:p-7 rounded-2xl border bg-card shadow-sm">
      {(title || description) && (
        <CardHeader className="flex flex-col items-center text-center gap-1 mb-4 px-0">
          {title && (
            <CardTitle className="font-serif text-xl font-semibold text-primary">
              {upperCase(title)}
            </CardTitle>
          )}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="flex flex-col items-center gap-3 px-0">
        {lines.map(({ content, count }, i) => (
          <div
            className="w-full flex flex-col gap-2 items-center text-center"
            key={`${content}-${count}`}
          >
            {i > 0 && <Separator className="max-w-40" />}
            <p
              className={cn(
                "text-base font-medium text-foreground uppercase tracking-wide",
                linesClassname
              )}
            >
              {startCase(toLower(content))}
            </p>
            {count && (
              <p className="text-sm italic text-muted-foreground">x{count}</p>
            )}
          </div>
        ))}
      </CardContent>
    </div>
  );
};

export default StaticCard;
