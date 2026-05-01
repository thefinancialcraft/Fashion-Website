"use client";

import React from 'react';

const ProductMain = () => {
  const products = [
    { title: "Relaxed Short Full Sleeve T-Shirt", category: "Clothes", price: 45.00, delPrice: 56.00, img: "/assets/images/products/clothes-1.jpg", tag: "New", tagClass: "pink" },
    { title: "Girls Pink Handbag", category: "Accessories", price: 18.00, delPrice: 25.00, img: "/assets/images/products/1.jpg", tag: "Sale", tagClass: "black" },
    { title: "Men's Black Watch", category: "Watch", price: 150.00, delPrice: 180.00, img: "/assets/images/products/watch-1.jpg", tag: "15%", tagClass: "pink" },
    { title: "Leather Belt for Men", category: "Clothes", price: 25.00, delPrice: 30.00, img: "/assets/images/products/belt.jpg", tag: null },
    { title: "Men's Winter Jacket", category: "Clothes", price: 85.00, delPrice: 99.00, img: "/assets/images/products/jacket-1.jpg", tag: "Hot", tagClass: "black" },
    { title: "Formal Leather Shoes", category: "Footwear", price: 110.00, delPrice: 130.00, img: "/assets/images/products/shoe-1.jpg", tag: null },
    { title: "Women's Earrings", category: "Jewelry", price: 45.00, delPrice: 55.00, img: "/assets/images/products/jewellery-1.jpg", tag: null },
    { title: "Fashionable Sunglasses", category: "Accessories", price: 20.00, delPrice: 30.00, img: "/assets/images/products/1.jpg", tag: "Sale", tagClass: "pink" },
  ];

  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="showcase" key={index}>
            <div className="showcase-banner">
              <img src={product.img} alt={product.title} width="300" className="product-img default" />
              <img src={product.img} alt={product.title} width="300" className="product-img hover" />
              {product.tag && <p className={`showcase-badge ${product.tagClass}`}>{product.tag}</p>}
              <div className="showcase-actions">
                <button className="btn-action"><i className="fi fi-rr-heart"></i></button>
                <button className="btn-action"><i className="fi fi-rr-eye"></i></button>
                <button className="btn-action"><i className="fi fi-rr-refresh"></i></button>
                <button className="btn-action"><i className="fi fi-rr-shopping-bag"></i></button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">{product.category}</a>
              <a href="#">
                <h3 className="showcase-title">{product.title}</h3>
              </a>
              <div className="showcase-rating">
                <i className="fi fi-sr-star"></i>
                <i className="fi fi-sr-star"></i>
                <i className="fi fi-sr-star"></i>
                <i className="fi fi-sr-star"></i>
                <i className="fi fi-rr-star"></i>
              </div>
              <div className="price-box">
                <p className="price">₹999.00</p>
                <del>₹{product.delPrice.toFixed(2)}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMain;
