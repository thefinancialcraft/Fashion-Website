"use client";

import React from 'react';

const Category = () => {
  const categories = [
    { title: "Dress & frock", amount: 53, icon: "/assets/images/icons/dress.svg" },
    { title: "Winter wear", amount: 58, icon: "/assets/images/icons/coat.svg" },
    { title: "Glasses & lens", amount: 68, icon: "/assets/images/icons/glasses.svg" },
    { title: "Shorts & jeans", amount: 84, icon: "/assets/images/icons/shorts.svg" },
    { title: "T-shirts", amount: 35, icon: "/assets/images/icons/tee.svg" },
    { title: "Jacket", amount: 16, icon: "/assets/images/icons/jacket.svg" },
    { title: "Watch", amount: 27, icon: "/assets/images/icons/watch.svg" },
    { title: "Hat & caps", amount: 39, icon: "/assets/images/icons/hat.svg" },
  ];

  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories.map((cat, index) => (
            <div className="category-item" key={index}>
              <div className="category-img-box">
                <img src={cat.icon} alt={cat.title} width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">{cat.title}</h3>
                  <p className="category-item-amount">({cat.amount})</p>
                </div>
                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
