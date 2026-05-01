"use client";

import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Popup after 5 seconds as in original CSS
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-close-overlay" onClick={() => setIsOpen(false)}></div>
      <div className="modal-content">
        <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
          <i className="fi fi-rr-cross"></i>
        </button>

        <div className="newsletter-img">
          <img src="/assets/images/newsletter.png" alt="subscribe newsletter" width="400" height="400" />
        </div>

        <div className="newsletter">
          <form action="#">
            <div className="newsletter-header">
              <h3 className="newsletter-title">Subscribe Newsletter.</h3>
              <p className="newsletter-desc">
                Subscribe to <b>Fashion</b> to get latest products and discount updates.
              </p>
            </div>
            <input type="email" name="email" className="email-field" placeholder="Email Address" required />
            <button type="submit" className="btn-newsletter">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
