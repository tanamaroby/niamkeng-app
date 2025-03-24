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
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </div>
          <Link href={href}>
            <Button size="icon" className="rounded-full">
              <Play fill="white" />
            </Button>
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
};

export default NavCard;
