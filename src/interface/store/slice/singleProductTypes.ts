import { ProductType } from "./productTypes";

interface SingleProductType {
  isLoading: boolean;
  data: ProductType | null;
  isError: boolean;
}

export { SingleProductType };
