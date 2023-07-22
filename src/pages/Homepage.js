import React, { useEffect } from "react";
import DemoCarousel from "../components/Carousel";
import Product from "../components/Product";
import Wrapper from "../wrapper/HomePageWrapper";
import HomePagePreLoader from "../components/HomePagePreLoader";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";

function Homepage() {
  // Fetch all products when HomePage loads
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Extracts products from Global State
  const { isLoading, products } = useSelector((state) => state.products);
  // Extracts search words from Global State
  const { searchText } = useSelector((state) => state.searchText);

  // Loading
  if (isLoading) {
    return <HomePagePreLoader />;
  }

  // Filters products according to searched keywords
  let productList = products
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((item) => <Product key={item._id} {...item} />);

  return (
    <Wrapper>
      <div className="body">
        {searchText.length === 0 && <DemoCarousel />}
        <div className="featured">
          <h2>latest products</h2>
          <div className="products">
            {productList.length === 0 ? (
              <p>No items to show. Please Refresh</p>
            ) : (
              productList
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Homepage;
