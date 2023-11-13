import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsFillPiggyBankFill } from "react-icons/bs";

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

  if (loading) {
    return <Loading />;
  }
  const roundedSavingAmount = singleOrder?.amount * 0.1;
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
              <p>{singleOrder?.shippingAddress?.address}</p>,
              <p>{singleOrder?.shippingAddress?.city}</p>,
              <p>{singleOrder?.shippingAddress?.state}</p>,
              <p>{singleOrder?.shippingAddress?.pinCode}</p>
            </div>
            <div className="user-number">
              <p>Phone Number: {singleOrder?.shippingAddress?.phoneNumber}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="middle">
          <h3>Total Saving:</h3>
          <div className="saving">
            <div className="icon">
              <BsFillPiggyBankFill />
            </div>
            <p>₹{roundedSavingAmount.toFixed(2)}</p>
          </div>
        </div>
        <hr />
        <div className="right">
          <h3>More actions</h3>
          <div className="body">
            <p>
              <FaFileInvoiceDollar />
              Download Invoice
            </p>
            <button>Download</button>
          </div>
        </div>
      </div>
      <div className="delivery-status">
        {singleOrder?.products.map((item) => (
          <div className="product">
            <div className="product-image">
              <img src={item?.productId?.image} alt={item?.productId?.name} />
            </div>
            <div className="product-details">
              <div className="product-title">{item?.productId?.name}</div>
              <div className="product-brand">{item?.productId?.brand}</div>
              <div className="product-price">₹{item?.productId?.price}</div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default OrderDetailsPage;
