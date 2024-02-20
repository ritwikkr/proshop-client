import { Product } from "./productTypes";

interface SingleProductType {
  isLoading: boolean;
  data: Product | null;
  isError: boolean;
}

export { SingleProductType };
