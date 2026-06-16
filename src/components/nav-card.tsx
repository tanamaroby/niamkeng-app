import { Play } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface NavCardProps {
  title: string;
  subtitle: string;
  href: string;
}

const NavCard: FC<NavCardProps> = ({ title, subtitle, href }) => {
  return (
    <Link href={href} className="w-full block group">
      <Card className="w-full transition-colors hover:border-primary/50 hover:bg-accent/40">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <CardTitle className="font-serif text-lg">{title}</CardTitle>
              <CardDescription>{subtitle}</CardDescription>
            </div>
            <Button
              size="icon"
              className="rounded-full shrink-0 group-hover:scale-105 transition-transform"
              tabIndex={-1}
              aria-hidden
            >
              <Play className="fill-primary-foreground" />
            </Button>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default NavCard;
