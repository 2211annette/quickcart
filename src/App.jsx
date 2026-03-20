import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ← Add import
import Header from './components/Header';
import { products } from './data/products';
import HomePage from './components/HomePage'; // ← New
import CategoryPage from './components/CategoryPage'; // ← New
import CartPage from './components/CartPage'; // ← New
import CartSidebar from './components/CartSidebar';
import './styles/App.css';

function App() {
  // // Cart state
  // const [cart, setCart] = useState([]);

  // // Cart visibility
  // const [isCartOpen, setIsCartOpen] = useState(false);


  const [searchTerm, setSearchTerm] = useState('');
  // Add to cart
  // const addToCart = (product) => {

  //   const existingItem = cart.find(item => item.id === product.id);

  //   if (existingItem) {
  //     // Increase quantity
  //     setCart(cart.map(item =>
  //       item.id === product.id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     ));
  //   } else {
  //     // Add new item
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  // const removeFromCart = (productId) => {
  //   // TODO: Use filter to remove item
  //   setCart(cart.filter(item => item.id !== productId));
  // };

  // const updateQuantity = (productId, newQuantity) => {

  //   if (newQuantity <= 0) {
  //     // Remove item
  //     setCart(cart.filter(item => item.id !== productId));
  //   } else {
  //     // Update quantity
  //     setCart(cart.map(item =>
  //       item.id === productId
  //         ? { ...item, quantity: newQuantity }
  //         : item
  //     ));
  //   }
  // };

  // function toggleCart() {
  //   // TODO: Toggle isCartOpen
  //   setIsCartOpen(!isCartOpen);
  // }

  // const getTotalItems = () => {
  //   // TODO: Use reduce to sum all quantities
  //   return cart.reduce((total, item) => total + item.quantity, 0);
  // };

  return (
    <BrowserRouter>
      <div className="app">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <HomePage 
                products={products}
                searchTerm={searchTerm}
              />
            } />
            
            <Route path="/category/:category" element={
              <CategoryPage products={products} />
            } />
            
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        
        <CartSidebar />
      </div>
    </BrowserRouter>
  )
}

export default App;