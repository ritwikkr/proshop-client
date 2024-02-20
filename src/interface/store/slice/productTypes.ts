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
  ratingAndReview: Review[];
  totalRatings: number;
  totalReviews: number;
}

interface Review {
  userId: { _id: string; name: string };
  ratings: number;
  review: string;
  _id: string;
}

interface ProductsState {
  isLoading: boolean;
  products: Product[] | null;
  totalCount: number;
  isError: boolean;
  featuredProducts: Product[];
}

export { Product, ProductsState, RatingsAndReviews, Review };
