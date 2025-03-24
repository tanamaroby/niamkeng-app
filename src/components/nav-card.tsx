import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface NavCardProps {
  title: string;
  subtitle: string;
  content: string;
  href: string;
}

const NavCard: FC<NavCardProps> = ({ title, subtitle, content, href }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>
        <Link href={href} className="w-full">
          <Button className="w-full">Begin Chanting</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NavCard;
