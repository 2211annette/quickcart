import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { useCart } from '../context/CartContext';

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart();
  const categories = ['Electronics', 'Accessories', 'Home', 'Sports'];
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">

        <div className="header-content">

          {/* Logo + subtitle */}
          <Link to="/" className="header-text">
            <h1 className="header-title">🛒 QuickCart</h1>
            <p className="header-subtitle">
              Your one-stop shop for everything
            </p>
          </Link>

          {/* Cart Button */}
          <button className="cart-icon-btn" onClick={toggleCart}>
            🛒
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>

        </div>

        {/* NEW: Navigation */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>

          {categories.map(cat => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className="nav-link"
            >
              {cat}
            </Link>
          ))}

          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>

        {/* NEW: Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              onSearchChange(e.target.value);
              navigate('/');
            }}
            className="search-input"
          />
        </div>

      </div>
    </header>
  );
}

export default Header;