import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartSidebar.css';

function CartSidebar() {
  const {
    cart,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart
  } = useCart();

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>

      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={toggleCart} className="close-btn">✕</button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />

              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  −
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;