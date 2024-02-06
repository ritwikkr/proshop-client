import React, { useEffect, useState } from "react";

import { AppDispatch } from "../store/store";
import DemoCarousel from "../components/Carousel";
import Product from "../components/Product";
import Wrapper from "../wrapper/HomePageWrapper";
import HomePagePreLoader from "../components/HomePagePreLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchFeaturedProducts,
} from "../store/slices/productsSlice";
import { RootState } from "../interface/store/storeTypes";

function Homepage() {
  // Component State
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Fetch all products when HomePage loads
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, pageSize }));
  }, [dispatch, currentPage]);

  // Fetch Featured Products
  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  // Extracts products from Global State
  const { isLoading, products, totalCount, featuredProducts } = useSelector(
    (state: RootState) => state.products
  );
  // Extracts search words from Global State
  const { searchText } = useSelector((state: RootState) => state.searchText);

  // Calculate total pages based on the total product count and page size
  const totalPages = Math.ceil(totalCount / pageSize);

  // Loading
  if (isLoading) {
    return <HomePagePreLoader />;
  }

  // Filters products according to searched keywords
  const productList = products
    ?.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((item) => (
      <Product
        key={item._id}
        _id={item._id}
        name={item.name}
        image={item.image}
        price={item.price}
        ratingsAndReviews={item.ratingsAndReviews}
      />
    ));

  // Handle pagination
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Generate an array of page numbers for the page number list
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <Wrapper>
      <div className="body">
        {searchText.length === 0 && (
          <DemoCarousel featuredProducts={featuredProducts} />
        )}
        <div className="featured">
          <h2>latest products</h2>
          <div className="products">
            {productList?.length === 0 ? (
              <p>No items to show. Please Refresh</p>
            ) : (
              productList
            )}
          </div>
          <div className="pagination">
            <div className="page-number-list">
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`page-number ${
                    pageNumber === currentPage ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Homepage;
