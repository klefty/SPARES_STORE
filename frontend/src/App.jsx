import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./pages/ProductDetails.jsx"; // Corrected import
import Footer from "./constants/Footer.jsx";
import Header from "./constants/Header.jsx";
import Review from "./pages/Review.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Review />
      <Footer />
      
    </div>
  );
};

export default App;