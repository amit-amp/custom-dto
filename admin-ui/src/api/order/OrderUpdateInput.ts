import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  quantity?: number | null;
  totalPrice?: number | null;
};
