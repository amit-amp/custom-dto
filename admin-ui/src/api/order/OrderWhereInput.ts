import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
};
