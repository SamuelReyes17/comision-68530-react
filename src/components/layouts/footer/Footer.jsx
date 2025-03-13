import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Prosox Global</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#our-story">Our Story</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About us</h3>
          <p>
            Founded in 2020, Prosox is a company that seeks to make a positive
            contribution to football worldwide.
          </p>
        </div>
        <div className="footer-section">
          <h3>Get discounts and offers</h3>
          <form className="subscription-form">
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Prosox LLC. All rights reserved.
        </p>
        <ul>
          <li>
            <a href="#privacy-policy">Privacy policy</a>
          </li>
          <li>
            <a href="#refund-policy">Refund policy</a>
          </li>
          <li>
            <a href="#terms-of-service">Terms of service</a>
          </li>
          <li>
            <a href="#contact-information">Contact information</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
