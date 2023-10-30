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
        <div className="flex flex-grow flex-col">
          <section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
            {children}
          </section>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          &copy; 2023 Fashion Shop
        </footer>
      </body>
    </html>
  );
}
