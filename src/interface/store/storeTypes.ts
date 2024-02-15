import { CartItem } from "./slice/cartTypes";
import { Order, OrderTypes } from "./slice/orderTypes";
import { ProductsState } from "./slice/productTypes";
import { UserState } from "./slice/userTypes";

interface RootState {
  products: ProductsState;
  searchText: { searchText: string };
  cart: { data: CartItem[] };
  user: UserState;
  showNavPopup: { show: boolean };
  product: Order;
  order: OrderTypes;
  // other state properties...
}

export { RootState };
