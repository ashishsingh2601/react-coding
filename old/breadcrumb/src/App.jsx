import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing.jsx";
import ProductDetail from "./pages/product-detail";
import './App.css'

function App() {

  return (
    <Router>
      <div className="app">
        <h2>Store</h2>
        <Breadcrumbs />
        <hr />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductListing />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </div>

    </Router>
    
  )
}

export default App
