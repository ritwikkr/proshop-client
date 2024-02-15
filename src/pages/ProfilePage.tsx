import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Wrapper from "../wrapper/ProfilePageWrapper";
import { updateUser } from "../store/slices/userSlice";
import Alert from "../components/Alert";
import { fetchOrders } from "../store/slices/orderSlice";
import ProfilePagePreLoader from "../components/ProfilePagePreLoader";
import Loading from "../components/Loading";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";
import { Order } from "../interface/store/slice/orderTypes";

function ProfilePage() {
  const data = useSelector((state: RootState) => state.user);
  const { isLoading } = useSelector((state: RootState) => state.order);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: data?.data?.user.name,
    email: data?.data?.user.email,
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (data.updationComplete) {
      setShowAlert(true);
    }
  }, [data.updationComplete]);

  useEffect(() => {
    if (data && data.data) dispatch(fetchOrders(data.data.user._id));
  }, [dispatch, data]);
  const orderData = useSelector((state: RootState) => state.order);

  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const { password, confirmPassword } = userDetails;
    // if (password !== confirmPassword) {
    //   return;
    // }
    if (data && data.data)
      dispatch(updateUser({ ...userDetails, id: data.data.user._id }));
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="main">
        <div className="user">
          {showAlert && <Alert message={"Details Updated"} />}
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
        {orderData.isLoading ? (
          <ProfilePagePreLoader />
        ) : (
          <div className="orders">
            <div className="title">
              <p>MY ORDERS</p>
            </div>
            {orderData.data.length === 0 ? (
              <>
                <h1>You haven't ordered yet</h1>
              </>
            ) : (
              orderData.data.map((order: Order) => (
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
