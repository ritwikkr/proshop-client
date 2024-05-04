import { Product } from "./productTypes";

interface WishlistType {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}

export { WishlistType };
