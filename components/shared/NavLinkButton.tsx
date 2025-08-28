import Link from "next/link";
import { Button } from "../ui/button";

export default function NavLinks({
  title,
  url,
  className,
}: {
  title: string;
  url: string;
  className?: string;
}) {
  return (
    <Button asChild variant="link" size={"sm"}>
      <Link href={`/${url}`} className={`${className} text-white text-lg`}>
        {title}
      </Link>
    </Button>
  );
}
