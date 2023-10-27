export default function SingleProductPage({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] };
}) {
  const refferal = searchParams.test.toString();
  return (
    <div>
      <h1>Single Product Page</h1>
      {params.productId}
      <p>Ref: {refferal}</p>
    </div>
  );
}
