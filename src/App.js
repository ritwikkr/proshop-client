import Header from "./components/Header";
import { React } from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartpage from "./pages/CartPage";
import Loginpage from "./pages/Loginpage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import ShippingPage from "./pages/ShippingPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import ProfilePage from "./pages/ProfilePage";
import PasswordUpdate from "./pages/PasswordUpdate";
import PaymentSuccess from "./pages/PaymentSuccess";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/paymentMethod" element={<PaymentMethodPage />} />
        <Route path="/order" element={<PlaceOrderPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/password" element={<PasswordUpdate />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
