import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subtotalPrice, totalPrice, totalDiscount } =
    useContext(CartContext);
  return (
    <div className="flex h-full flex-col justify-between py-5">
      <div className="space-y-4">
        {products.map((product) => (
          <CartItem key={product.id} cartProduct={product} />
        ))}
      </div>
      <div>
        <div className="mt-6">
          <Card>
            <CardContent className="space-y-2 p-5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-sm font-semibold">
                  {formatCurrency(subtotalPrice)}
                </span>
              </div>
              <Separator className="h-[0.5px] text-muted-foreground" />
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Descontos</span>
                <span className="text-sm font-semibold">
                  - {formatCurrency(totalDiscount)}
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Entrega</span>
                <span className="text-sm font-semibold">
                  {Number(products[0].restaurant.deliveryFee) === 0 ? (
                    <span className="uuppercase text-primary, font-semibold">
                      {"Grátis"}
                    </span>
                  ) : (
                    formatCurrency(Number(products[0].restaurant.deliveryFee))
                  )}
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Total</span>
                <span className="text-sm font-semibold">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        <Button className="mt-6 w-full">Finalizar pedido</Button>
      </div>
    </div>
  );
};

export default Cart;
