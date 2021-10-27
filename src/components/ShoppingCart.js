import Header from "./Header";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
import CheckoutData from "./CheckoutData";

export default function ShoppingCart() {
  return (
    <>
      <div className="shopping-cart">
        <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
      <CheckoutData />
      <div className="proceed-info invisible">You were redirected to checkout page...</div>
    </>
  )
}