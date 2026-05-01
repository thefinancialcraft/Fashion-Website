"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const placeholders = [
  "Enter your product name...",
  "Search for kurti",
  "Search for crop top",
  "Search for Jacket",
  "Search for Shoes",
  "Search for Smart watch",
  "Search for earrings"
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [searchValue, setSearchValue] = useState("");
  
  useEffect(() => {
    let currentIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentFullText = placeholders[currentIdx];
      
      if (isDeleting) {
        setPlaceholder(currentFullText.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setPlaceholder(currentFullText.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIdx === currentFullText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        currentIdx = (currentIdx + 1) % placeholders.length;
        speed = 500;
      }

      timeoutId = setTimeout(type, speed);
    };

    timeoutId = setTimeout(type, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header>
      <div className="header-top">
        <div className="container flex">
     
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - @999
            </p>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--eerie-black)', letterSpacing: '2px' }}>FASHION</h1>
          </a>

          <div className="header-search-container" style={{ position: 'relative' }}>
            <input 
              type="search" 
              name="search" 
              className="search-field" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={searchValue ? "" : placeholder} 
              style={{ paddingRight: '45px' }}
            />
            <button className="search-btn" style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: '10px' }}>
              <i className="fi fi-rr-search"></i>
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn">
              <i className="fi fi-rr-user"></i>
            </button>
            <button className="action-btn">
              <i className="fi fi-rr-heart"></i>
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <i className="fi fi-rr-shopping-bag"></i>
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">Home</a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Categories</a>
              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Desktop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Laptop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Camera</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Headphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src="/assets/images/electronics-banner-1.jpg" alt="headphone collection" width={250} height={119} />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src="/assets/images/mens-banner.jpg" alt="men's fashion" width={250} height={119} />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Women's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Bags</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src="/assets/images/womens-banner.jpg" alt="women's fashion" width={250} height={119} />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart Watch</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart TV</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Keyboard</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Mouse</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Microphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src="/assets/images/electronics-banner-2.jpg" alt="mouse collection" width={250} height={119} />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Men's</a>
              <ul className="dropdown-list">
                <li className="dropdown-item"><a href="#">Shirt</a></li>
                <li className="dropdown-item"><a href="#">Shorts & Jeans</a></li>
                <li className="dropdown-item"><a href="#">Safety Shoes</a></li>
                <li className="dropdown-item"><a href="#">Wallet</a></li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Women's</a>
              <ul className="dropdown-list">
                <li className="dropdown-item"><a href="#">Dress & Frock</a></li>
                <li className="dropdown-item"><a href="#">Earrings</a></li>
                <li className="dropdown-item"><a href="#">Necklace</a></li>
                <li className="dropdown-item"><a href="#">Makeup Kit</a></li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Jewelry</a>
              <ul className="dropdown-list">
                <li className="dropdown-item"><a href="#">Earrings</a></li>
                <li className="dropdown-item"><a href="#">Couple Rings</a></li>
                <li className="dropdown-item"><a href="#">Necklace</a></li>
                <li className="dropdown-item"><a href="#">Bracelets</a></li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Perfume</a>
              <ul className="dropdown-list">
                <li className="dropdown-item"><a href="#">Clothes Perfume</a></li>
                <li className="dropdown-item"><a href="#">Deodorant</a></li>
                <li className="dropdown-item"><a href="#">Flower Fragrance</a></li>
                <li className="dropdown-item"><a href="#">Air Freshener</a></li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Blog</a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Hot Offers</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={() => setIsMobileMenuOpen(true)}>
          <i className="fi fi-rr-menu-burger"></i>
        </button>
        <button className="action-btn">
          <i className="fi fi-rr-shopping-bag"></i>
          <span className="count">0</span>
        </button>
        <button className="action-btn">
          <i className="fi fi-rr-home"></i>
        </button>
        <button className="action-btn">
          <i className="fi fi-rr-heart"></i>
          <span className="count">0</span>
        </button>
        <button className="action-btn" onClick={() => setIsMobileMenuOpen(true)}>
          <i className="fi fi-rr-apps"></i>
        </button>
      </div>

      <nav className={`mobile-navigation-menu has-scrollbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fi fi-rr-cross"></i>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">Home</a>
          </li>
          <li className="menu-category">
            <Accordion title="Men's">
              <ul className="submenu-category-list">
                <li className="submenu-category"><a href="#" className="submenu-title">Shirt</a></li>
                <li className="submenu-category"><a href="#" className="submenu-title">Shorts & Jeans</a></li>
                <li className="submenu-category"><a href="#" className="submenu-title">Safety Shoes</a></li>
                <li className="submenu-category"><a href="#" className="submenu-title">Wallet</a></li>
              </ul>
            </Accordion>
          </li>
          <li className="menu-category">
            <Accordion title="Women's">
              <ul className="submenu-category-list">
                <li className="submenu-category"><a href="#" className="submenu-title">Dress & Frock</a></li>
                <li className="submenu-category"><a href="#" className="submenu-title">Earrings</a></li>
                <li className="submenu-category"><a href="#" className="submenu-title">Necklace</a></li>
                <li className="submenu-category"><a href="#" className="submenu-title">Makeup Kit</a></li>
              </ul>
            </Accordion>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <Accordion title="Language">
                <ul className="submenu-category-list">
                  <li className="submenu-category"><a href="#" className="submenu-title">English</a></li>
                  <li className="submenu-category"><a href="#" className="submenu-title">Español</a></li>
                  <li className="submenu-category"><a href="#" className="submenu-title">Français</a></li>
                </ul>
              </Accordion>
            </li>
            <li className="menu-category">
              <Accordion title="Currency">
                <ul className="submenu-category-list">
                  <li className="submenu-category"><a href="#" className="submenu-title">USD $</a></li>
                  <li className="submenu-category"><a href="#" className="submenu-title">EUR €</a></li>
                </ul>
              </Accordion>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li><a href="#" className="social-link"><i className="fi fi-brands-facebook"></i></a></li>
            <li><a href="#" className="social-link"><i className="fi fi-brands-twitter"></i></a></li>
            <li><a href="#" className="social-link"><i className="fi fi-brands-instagram"></i></a></li>
            <li><a href="#" className="social-link"><i className="fi fi-brands-linkedin"></i></a></li>
          </ul>
        </div>
      </nav>
      {isMobileMenuOpen && <div className="overlay active" onClick={() => setIsMobileMenuOpen(false)}></div>}
    </header>
  );
};

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className={`accordion-menu ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <p className="menu-title">{title}</p>
        <div>
          <i className="fi fi-rr-plus add-icon"></i>
          <i className="fi fi-rr-minus remove-icon"></i>
        </div>
      </button>
      <div className={`submenu-category-list ${isOpen ? 'active' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default Header;
