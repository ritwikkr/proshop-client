import { CartItem } from "./slice/cartTypes";
import { ProductsState } from "./slice/productTypes";
import { UserState } from "./slice/userTypes";

interface RootState {
  products: ProductsState;
  searchText: { searchText: string };
  cart: { data: CartItem[] };
  user: UserState;
  // other state properties...
}

export { RootState };
