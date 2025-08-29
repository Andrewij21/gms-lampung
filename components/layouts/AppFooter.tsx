import {
  Church,
  FacebookIcon,
  InstagramIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
export default function AppFooter() {
  return (
    <section className="bg-primary p-16">
      <div className="container grid grid-cols-3 gap-4 place-items-center mx-auto">
        <p className="text-white">gmslampung © 2025. All Rights Reserved.</p>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <div className="flex items-center gap-4 text-white">
          <FacebookIcon size={24} />
          <TwitterIcon size={24} />
          <InstagramIcon size={24} />
          <InstagramIcon size={24} />
        </div>
      </div>
    </section>
  );
}
