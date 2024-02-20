import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../wrapper/PasswordUpdateWrapper";
import { updatePassword } from "../store/slices/userSlice";
import Alert from "../components/Alert";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";

function PasswordUpdate() {
  const [passwordDetails, setPasswordDetails] = useState({
    currPassword: "",
    newPassword: "",
    renewPassword: "",
  });
  const [showAlert] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.user);

  function passwordUpdateHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { currPassword, newPassword, renewPassword } = passwordDetails;
    if (!currPassword || !newPassword || !renewPassword) {
      // console.log(`Please fill up first`);
      return;
    }
    if (newPassword !== renewPassword) {
      // console.log(`Passwords do not match`);
      return;
    }
    if (data && data.data)
      dispatch(updatePassword({ passwordDetails, id: data.data.user._id }));
  }

  return (
    <Wrapper>
      <div className="alert">
        {showAlert && data.isError && <Alert message={data.errorMsg} />}
      </div>
      <form onSubmit={passwordUpdateHandler}>
        <div className="heading">
          <h2>Change Password</h2>
        </div>
        <div className="form-content">
          <label htmlFor="currPass">Current Password</label>
          <input
            type="password"
            id="currPassword"
            onChange={(e) =>
              setPasswordDetails({
                ...passwordDetails,
                currPassword: e.target.value,
              })
            }
          />
        </div>
        <div className="form-content">
          <label htmlFor="newPass">New Password</label>
          <input
            type="password"
            id="newPassword"
            onChange={(e) =>
              setPasswordDetails({
                ...passwordDetails,
                newPassword: e.target.value,
              })
            }
          />
        </div>
        <div className="form-content">
          <label htmlFor="renewPass">Reenter New Password</label>
          <input
            type="password"
            id="renewPassword"
            onChange={(e) =>
              setPasswordDetails({
                ...passwordDetails,
                renewPassword: e.target.value,
              })
            }
          />
        </div>
        <div className="form-content">
          <button type="submit">Update Password</button>
        </div>
      </form>
    </Wrapper>
  );
}

export default PasswordUpdate;
