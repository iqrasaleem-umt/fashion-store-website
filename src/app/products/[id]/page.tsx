




import { Metadata } from "next";

interface ProductPageProps {
  params: { id: string };
}

// (Optional) SEO Metadata
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  return {
    title: `Product ${params.id}`,
    description: `Details for product ${params.id}`,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="px-6 mt-10 text-2xl font-semibold">
      Product ID: {params.id}
    </div>
  );
}


