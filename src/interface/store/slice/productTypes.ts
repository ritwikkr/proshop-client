interface Product {
  // Define your product structure here
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  featured: string;
  ratingsAndReviews: RatingsAndReviews;
}

interface RatingsAndReviews {
  ratingAndReview: [];
  totalRatings: number;
  totalReviews: number;
}

interface ProductsState {
  isLoading: boolean;
  products: Product[] | null;
  totalCount: number;
  isError: boolean;
  featuredProducts: Product[];
}

export { Product, ProductsState, RatingsAndReviews };
