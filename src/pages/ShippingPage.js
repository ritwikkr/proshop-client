import React, { useEffect, useState } from "react";
import Wrapper from "../wrapper/ShippingPageWrapper";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { addUserAddress } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function ShippingPage() {
  // Component State
  const [useraddress, setUserAddress] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    setUserAddress({
      address: data.user.address.length > 0 ? data.user.address[0].house : "",
      city: data.user.address.length > 0 ? data.user.address[0].city : "",
      postal_code:
        data.user.address.length > 0 ? data.user.address[0].postal : "",
      country: data.user.address.length > 0 ? data.user.address[0].country : "",
    });
  }, [data.address, data.user]);

  function formSubmitHandler(e) {
    e.preventDefault();
    const { address, city, postal_code, country } = useraddress;
    if (!address || !city || !postal_code || !country) {
      return;
    }
    dispatch(addUserAddress({ useraddress, userId: data.user._id }));
    navigate("/select-address");
  }

  return (
    <Wrapper>
      <div className="main">
        <ProgressBar shipping />
        <div className="content">
          <div className="title">
            <h1>Shipping</h1>
          </div>
          <div className="body">
            <form onSubmit={formSubmitHandler}>
              <div className="form-content">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={useraddress.name}
                  placeholder="Enter Name"
                  onChange={(e) =>
                    setUserAddress({
                      ...useraddress,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="number"
                  value={useraddress.phoneNumber}
                  placeholder="Enter Phone Number"
                  onChange={(e) =>
                    setUserAddress({
                      ...useraddress,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  value={useraddress.address}
                  onChange={(e) =>
                    setUserAddress({
                      ...useraddress,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  value={useraddress.city}
                  onChange={(e) =>
                    setUserAddress({ ...useraddress, city: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  placeholder="Enter State"
                  onChange={(e) =>
                    setUserAddress({ ...useraddress, state: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="code">Postal Code</label>
                <input
                  type="number"
                  id="code"
                  placeholder="Enter Postal Code"
                  value={useraddress.postal_code}
                  onChange={(e) =>
                    setUserAddress({
                      ...useraddress,
                      postal_code: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter Country"
                  value={useraddress.country}
                  onChange={(e) =>
                    setUserAddress({
                      ...useraddress,
                      country: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <button type="submit">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ShippingPage;
