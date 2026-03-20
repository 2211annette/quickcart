import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import CartSidebar from './components/CartSidebar';
import './styles/App.css';

function App() {
  // Cart state
  const [cart, setCart] = useState([]);

  // Cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart
  const addToCart = (product) => {
    
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      // Increase quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new item
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    // TODO: Use filter to remove item
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {

    if (newQuantity <= 0) {
      // Remove item
      setCart(cart.filter(item => item.id !== productId));
    } else {
      // Update quantity
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
};

  function toggleCart() {
    // TODO: Toggle isCartOpen
    setIsCartOpen(!isCartOpen);
  }

  const getTotalItems = () => {
  // TODO: Use reduce to sum all quantities
   return cart.reduce((total, item) => total + item.quantity, 0);
};

  return (
   <div className="app">
      {/* Pass toggleCart here */}
      <Header toggleCart={toggleCart} cartCount={cart.length} cartItemCount={getTotalItems()} onCartClick={toggleCart}/>

      <main className="main-content">
        <ProductList 
          products={products} 
          onAddToCart={addToCart}
        />
      </main>

      {/* ✅ Cart Sidebar connected */}
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={toggleCart}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );

}

export default App;