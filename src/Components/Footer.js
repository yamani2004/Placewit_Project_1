import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>ShopVerse</h2>
          <p>Your one-stop shop for everything you love. Affordable, reliable, and delivered fast.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@shopverse.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ShopVerse | All rights reserved
      </div>
    </footer>
  );
}
