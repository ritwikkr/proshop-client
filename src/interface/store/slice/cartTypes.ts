interface User {
  _id: string;
  name: string;
}

interface RatingAndReview {
  userId: User;
  ratings: number;
  review: string;
  _id: string;
}

interface RatingsAndReviews {
  ratingAndReview: RatingAndReview[];
  totalRatings: number;
  totalReviews: number;
}

interface CartItem {
  ratingsAndReviews: RatingsAndReviews;
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  featured: boolean;
  qty: number;
}

export { CartItem };
