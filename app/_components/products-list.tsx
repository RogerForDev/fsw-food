import { Prisma } from "@prisma/client";
import ProductsItem from "./product-item";

interface ProductsListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: { select: { name: true } };
    };
  }>[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
