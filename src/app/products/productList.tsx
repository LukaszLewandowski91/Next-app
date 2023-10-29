// src/app/products/productList.tsx

export async function ProductsList({ page }: { page: number }) {
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const take = 10;
  const offset = 10 * (page - 1);
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`
  );
  const products = (await res.json()) as { id: string; title: string }[];

  await wait(5000 * Math.random());

  return (
    <>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </>
  );
}
