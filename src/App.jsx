import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<Users />} />
          </Route>
          <Route path="products">
            <Route index element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
