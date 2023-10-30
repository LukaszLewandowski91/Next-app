import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Nav } from "@/ui/organisms/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Nav />
        <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm: py-16 md:max-w-4xl lg:max-w-7xl">
          {children}
        </section>
        <footer className="text-center text-gray-500 text-sm">
          &copy; 2023 Fashion Shop
        </footer>
      </body>
    </html>
  );
}
