import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p>Your cart is empty</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-page-content">

          {cart.map(item => (
            <div key={item.id} className="cart-page-item">
              <h3>{item.name}</h3>
              <p>${item.price}</p>

              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
          </div>

          <div className="cart-actions">
            <Link to="/">Continue Shopping</Link>
            <button>Checkout</button>
          </div>

        </div>
      )}
    </div>
  );
}

export default CartPage;