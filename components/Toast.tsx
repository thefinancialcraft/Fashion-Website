"use client";

import React, { useState, useEffect } from 'react';

const Toast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Logic to show/hide toast periodically
    const showTimer = setTimeout(() => setIsVisible(true), 10000);
    const hideTimer = setTimeout(() => setIsVisible(false), 20000);
    
    const interval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 10000);
    }, 30000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`notification-toast ${isVisible ? '' : 'closed'}`}>
      <button className="toast-close-btn" onClick={() => setIsVisible(false)}>
        <i className="fi fi-rr-cross"></i>
      </button>

      <div className="toast-banner">
        <img src="/assets/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70" />
      </div>

      <div className="toast-detail">
        <p className="toast-message">
          Someone in new just bought
        </p>
        <p className="toast-title">
          Rose Gold Earrings
        </p>
        <p className="toast-meta">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
};

export default Toast;
