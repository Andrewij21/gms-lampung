import AppHeaderPublic from "@/components/layouts/AppHeaderPublic";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AppHeaderPublic />
      <section className="grid place-items-center bg-black min-h-screen">
        <Image
          src="/welcome-home.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-fill"
        />
      </section>
    </div>
  );
}
