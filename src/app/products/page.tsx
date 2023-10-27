import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
  {
    id: "1",
    category: "Naczynia",
    name: "Kubek",
    price: 1200,
    coverImage: {
      alt: "Kubek",
      src: "Kubek.png",
    },
  },
  {
    id: "2",
    category: "Odziez",
    name: "Koszulka",
    price: 3900,
    coverImage: {
      alt: "Koszulka",
      src: "Koszulka.png",
    },
  },
  {
    id: "3",
    category: "Odziez",
    name: "Czapka",
    price: 1999,
    coverImage: {
      alt: "Czapka",
      src: "Czapka.jpeg",
    },
  },
  {
    id: "4",
    category: "Odziez",
    name: "Bluza",
    price: 6912,
    coverImage: {
      alt: "Bluza",
      src: "Bluza.png",
    },
  },
  {
    id: "5",
    category: "Odziez",
    name: "Spodnie",
    price: 19900,
    coverImage: {
      alt: "Spodnie",
      src: "Spodnie.png",
    },
  },
];

export default function ProductsPage() {
  return <ProductList products={products} />;
}
