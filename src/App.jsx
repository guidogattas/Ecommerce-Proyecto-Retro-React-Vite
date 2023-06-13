import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ErrorPageNotFound from "./components/Error/ErrorPageNotFound";
import Contacto from "./components/Contacto/Contacto";
import { CartContextProvider } from "./context/cartContext";
import { CartView } from "./components/CartView/CartView";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
import Footer from "./components/Footer/Footer";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="*" element={<ErrorPageNotFound />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<CartView />} />
          <Route
            path="/order-confirmation/:orderid"
            element={<OrderConfirmation />}
          />
                    <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
