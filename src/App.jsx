import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ErrorPageNotFound from "./components/Error/ErrorPageNotFound";
import Contacto from "./components/Contacto/Contacto";

const App = () => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer cantidad={cantidad} setCantidad={setCantidad} />
          }
        />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryid" element={<ItemListContainer />} />
        <Route path="*" element={<ErrorPageNotFound />} />
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
