import { ProductType } from "./productTypes";

interface WishlistType {
  items: ProductType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}

export { WishlistType };
