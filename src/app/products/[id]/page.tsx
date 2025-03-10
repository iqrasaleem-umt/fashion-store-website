



import { NextPage } from "next";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: NextPage<ProductPageProps> = ({ params }) => {
  return <div>Product ID: {params.id}</div>;
};

export default ProductPage;

