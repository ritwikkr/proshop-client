let BASE_URL = `https://api.shopease.site`;

if (process.env.REACT_APP_ENV === "development") {
  BASE_URL = `http://localhost:4000`;
}

export default BASE_URL;
