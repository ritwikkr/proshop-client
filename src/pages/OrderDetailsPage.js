import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Wrapper from "../wrapper/OrderDetailsPageWrapper";
import Loading from "../components/Loading";
import { getSingleOrder } from "../store/slices/orderSlice";

function OrderDetailsPage() {
  // Redux
  const dispatch = useDispatch();
  const { singleOrder, loading } = useSelector((state) => state.order);

  //   Extracting id from params
  const { id } = useParams();

  // Side Effect -> Fetching Order from Order Id
  useEffect(() => {
    dispatch(getSingleOrder(id));
  }, [dispatch, id]);

  console.log("SOSOSOSOSO", singleOrder);

  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="delivery-address">
        <div className="left">
          <h3>Delivery Address</h3>
          <div className="body">
            <div className="user-name">
              {singleOrder?.shippingAddress?.name}
            </div>
            <div className="user-address">
              {singleOrder?.shippingAddress?.address},{" "}
              {singleOrder?.shippingAddress?.city},
              {singleOrder?.shippingAddress?.state},
              {singleOrder?.shippingAddress?.pinCode}
            </div>
            <div className="user-number">
              <p>Phone Number: {singleOrder?.shippingAddress?.phoneNumber}</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>More actions</h3>
          <div className="body">
            <p>Download Invoice</p>
            <button>Download</button>
          </div>
        </div>
      </div>
      <div className="delivery-status">
        <div className="product">
          <div className="product-image">
            <img
              src={singleOrder?.items[0]?.productId?.images[0]}
              alt={singleOrder?.items[0]?.productId?.title}
            />
          </div>
          <div className="product-details">
            <div className="product-title">
              <p>{singleOrder?.items[0]?.productId?.title}</p>
            </div>
            <div className="product-brand">
              {singleOrder?.items[0]?.productId?.brand}
            </div>
            <div className="product-price">
              ₹{singleOrder?.items[0]?.productId?.price}
            </div>
          </div>
        </div>
        <div className="status">
          {/* <DeliveryTracker status={singleOrder?.status} /> */}
        </div>
        <div className="help"></div>
      </div>
    </Wrapper>
  );
}

export default OrderDetailsPage;
