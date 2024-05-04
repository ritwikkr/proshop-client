import { CartItem } from "./slice/cartTypes";
import { OrderTypes } from "./slice/orderTypes";
import { ProductsState } from "./slice/productTypes";
import { SingleProductType } from "./slice/singleProductTypes";
import { UserState } from "./slice/userTypes";
import { WishlistType } from "./slice/wishlistTypes";

interface RootState {
  products: ProductsState;
  searchText: { searchText: string };
  cart: { data: CartItem[] };
  user: UserState;
  showNavPopup: { show: boolean };
  product: SingleProductType;
  order: OrderTypes;
  wishlist: WishlistType;
  // other state properties...
}

export { RootState };
