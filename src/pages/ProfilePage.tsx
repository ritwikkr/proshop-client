import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Wrapper from "../wrapper/ProfilePageWrapper";
import { resetUpdationComplete, updateUser } from "../store/slices/userSlice";
import { fetchOrders } from "../store/slices/orderSlice";
import ProfilePagePreLoader from "../components/ProfilePagePreLoader";
import Loading from "../components/Loading";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";
import { Order } from "../interface/store/slice/orderTypes";

function ProfilePage() {
  const {
    data,
    isLoading: userLoading,
    isError,
    updationComplete,
  } = useSelector((state: RootState) => state.user);
  const { isLoading, data: orderData } = useSelector(
    (state: RootState) => state.order
  );

  console.log(isError);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: data?.user.name,
    email: data?.user.email,
  });

  useEffect(() => {
    if (data) dispatch(fetchOrders(data.user._id));
  }, [dispatch]);

  // Alert Functionality
  useEffect(() => {
    if (updationComplete) {
      toast.success("Profile Updated Successfully");
    }
    return () => {
      dispatch(resetUpdationComplete());
    };
  }, [updationComplete]);

  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (data) dispatch(updateUser({ ...userDetails, id: data.user._id }));
  }

  if (isLoading || userLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="main">
        <div className="user">
          <div className="title">
            <p>USER PROFILE</p>
          </div>
          <div className="body">
            <form onSubmit={formSubmitHandler}>
              <div className="form-content">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <button type="submit">update</button>
              </div>
              {/* <div className="form-content">
                <Link to={"/password"}>Change Password</Link>
              </div> */}
            </form>
          </div>
        </div>
        {isLoading ? (
          <ProfilePagePreLoader />
        ) : (
          <div className="orders">
            <div className="title">
              <p>MY ORDERS</p>
            </div>
            {orderData.length === 0 ? (
              <>
                <h1>You haven't ordered yet</h1>
              </>
            ) : (
              orderData.map((order: Order) => (
                <div className="body" key={order._id}>
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{order._id}</td>
                        <td>{order.createdAt.slice(0, 10)}</td>
                        <td>{order.amount}</td>
                        <td>{order.createdAt.slice(0, 10)}</td>
                        <td>
                          <FaCheck />
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              navigate(`/order-details-page/${order._id}`)
                            }
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default ProfilePage;
