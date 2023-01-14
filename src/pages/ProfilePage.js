import React, { useState } from "react";
import Wrapper from "../wrapper/ProfilePageWrapper";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/slices/userSlice";
import { togglePopUp } from "../store/slices/showNavPopupSlice";

function ProfilePage() {
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    name: data.user.name,
    email: data.user.email,
    password: "",
    confirmPassword: "",
  });

  function formSubmitHandler(e) {
    e.preventDefault();
    const { password, confirmPassword } = userDetails;
    if (password !== confirmPassword) {
      return;
    }
    dispatch(updateUser({ ...userDetails, id: data.user._id }));
  }
  return (
    <Wrapper onClick={() => dispatch(togglePopUp(false))}>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="c-password">Confirm password</label>
                <input
                  type="password"
                  id="c-password"
                  placeholder="Confirm password"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <button type="submit">update</button>
              </div>
            </form>
          </div>
        </div>
        <div className="orders">
          <div className="title">
            <p>MY ORDERS</p>
          </div>
          <div className="body">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>45gf45k4iy45bb45o</td>
                  <td>2020-01-01</td>
                  <td>218.45</td>
                  <td>2020-02-02</td>
                  <td>
                    <ImCross />
                  </td>
                  <td>
                    <button>Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProfilePage;
