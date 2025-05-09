import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { StoreContextProvider } from "./storeContext/StoreContext";

function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </StoreContextProvider>
  );
}

export default App;
