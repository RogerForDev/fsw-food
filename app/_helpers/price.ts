import { Product } from "@prisma/client";

export const calculateProductPrice = (product: Product): Number => {
  if (product.discountPercentage === 0) {
    return Number(product.price);
  }

  const discount = Number(product.price) * (product.discountPercentage / 100);

  return Number(product.price) - discount;
};

export const formatCurrency = (value: Number) => {
  return `R$${Intl.NumberFormat("pt-br", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};
