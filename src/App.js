import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/index'
import { Wrapper } from "./components/wrapper";
import CartP from "./pages/cart/CartP";
import HomeP from "./pages/home/HomeP";
import LoginP from "./pages/login/LoginP";
import SignUpP from "./pages/signUp/SignUpP";
import WishlistP from "./pages/wishlist/WishlistP";
function App() {
  return (
    <BrowserRouter>
    <Wrapper />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route path="/wishlist" element={<WishlistP />} />
          <Route path="/cart" element={<CartP />} />
          <Route path="/sign-up" element={<SignUpP />}/>
          <Route path="/login" element={<LoginP />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
