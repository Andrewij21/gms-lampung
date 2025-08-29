import AppFooter from "@/components/layouts/AppFooter";
import AppHeaderPublic from "@/components/layouts/AppHeaderPublic";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen relative">
      <AppHeaderPublic />
      {children}
      <AppFooter />
    </main>
  );
}
