


export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="px-6 mt-10 text-2xl font-semibold">
      This is a product page of product {params.id}
    </div>
  );
}
