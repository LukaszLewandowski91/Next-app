import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";

export default function pageProduct1() {
  return (
    <div>
      <div>
        <a href="/product-2" className="hover:underline">
          Zwykly link
        </a>
      </div>

      <Link href="/product-2" className="hover:underline">
        Link produkt 2
      </Link>
      <ProductCounter>Test</ProductCounter>
    </div>
  );
}
