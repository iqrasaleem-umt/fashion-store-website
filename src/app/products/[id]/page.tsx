




interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="px-6 mt-10 text-2xl font-semibold">
      Product ID: {params.id}
    </div>
  );
}
