import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
