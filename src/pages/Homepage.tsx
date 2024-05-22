import React, { useEffect, useState } from "react";

import { AppDispatch } from "../store/store";
import DemoCarousel from "../components/Carousel";
import Product from "../components/Product";
import Wrapper from "../wrapper/HomePageWrapper";
import HomePagePreLoader from "../components/HomePagePreLoader";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";
import { RootState } from "../interface/store/storeTypes";
import { toast } from "react-toastify";

function Homepage() {
  // Component State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 6;

  // Fetch all products when HomePage loads
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, pageSize }));
  }, [dispatch, currentPage]);

  // Extracts products from Global State
  const { isLoading, products, totalCount } = useSelector(
    (state: RootState) => state.products
  );
  // Extracts search words from Global State
  const { searchText } = useSelector((state: RootState) => state.searchText);
  const { error } = useSelector((state: RootState) => state.wishlist);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // Calculate total pages based on the total product count and page size
  const totalPages = Math.ceil(totalCount / pageSize);

  // Loading
  if (isLoading) {
    return <HomePagePreLoader />;
  }

  const featuredProducts = products?.filter((product) => product.featured);

  // Filters products according to searched keywords
  const productList = products
    ?.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((item) => <Product item={item} key={item._id} />);

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
        {searchText.length === 0 && featuredProducts && (
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
          {productList && productList?.length > 0 && (
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
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Homepage;
