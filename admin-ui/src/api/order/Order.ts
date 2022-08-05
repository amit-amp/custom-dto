import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  products?: Array<Product>;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
