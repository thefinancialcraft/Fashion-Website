"use client";

import React, { useState } from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar has-scrollbar">
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
          <button className="sidebar-close-btn">
            <i className="fi fi-rr-cross"></i>
          </button>
        </div>

        <ul className="sidebar-menu-category-list">
          <SidebarAccordion title="Clothes" icon="/assets/images/icons/dress.svg">
            <ul className="sidebar-submenu-category-list">
              <SidebarSubmenu title="Shirt" stock={300} />
              <SidebarSubmenu title="Shorts & jeans" stock={60} />
              <SidebarSubmenu title="Jacket" stock={50} />
              <SidebarSubmenu title="Dress & frock" stock={87} />
            </ul>
          </SidebarAccordion>

          <SidebarAccordion title="Footwear" icon="/assets/images/icons/shoes.svg">
            <ul className="sidebar-submenu-category-list">
              <SidebarSubmenu title="Sports" stock={45} />
              <SidebarSubmenu title="Formal" stock={75} />
              <SidebarSubmenu title="Casual" stock={35} />
              <SidebarSubmenu title="Safety Shoes" stock={26} />
            </ul>
          </SidebarAccordion>

          <SidebarAccordion title="Jewelry" icon="/assets/images/icons/jewelry.svg">
            <ul className="sidebar-submenu-category-list">
              <SidebarSubmenu title="Earrings" stock={46} />
              <SidebarSubmenu title="Couple Rings" stock={73} />
              <SidebarSubmenu title="Necklace" stock={61} />
            </ul>
          </SidebarAccordion>

          <SidebarAccordion title="Perfume" icon="/assets/images/icons/perfume.svg">
            <ul className="sidebar-submenu-category-list">
              <SidebarSubmenu title="Clothes Perfume" stock={12} />
              <SidebarSubmenu title="Deodorant" stock={60} />
            </ul>
          </SidebarAccordion>
        </ul>
      </div>

      <div className="product-showcase">
        <h3 className="showcase-heading">best sellers</h3>
        <div className="showcase-wrapper">
          <div className="showcase-container">
            <ShowcaseItem title="baby fabric shoes" price={4.00} delPrice={5.00} rating={5} img="/assets/images/products/1.jpg" />
            <ShowcaseItem title="men's hoodies t-shirt" price={7.00} delPrice={17.00} rating={4} img="/assets/images/products/2.jpg" />
            <ShowcaseItem title="girls t-shirt" price={3.00} delPrice={5.00} rating={4} img="/assets/images/products/3.jpg" />
            <ShowcaseItem title="woollen hat for men" price={12.00} delPrice={15.00} rating={5} img="/assets/images/products/4.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarAccordion = ({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="sidebar-menu-category">
      <button className={`sidebar-accordion-menu ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="menu-title-flex">
          <img src={icon} alt={title} width="20" height="20" className="menu-title-img" />
          <p className="menu-title">{title}</p>
        </div>
        <div>
          <i className="fi fi-rr-plus add-icon"></i>
          <i className="fi fi-rr-minus remove-icon"></i>
        </div>
      </button>
      <div className={`sidebar-submenu-category-list ${isOpen ? 'active' : ''}`}>
        {children}
      </div>
    </li>
  );
};

const SidebarSubmenu = ({ title, stock }: { title: string; stock: number }) => (
  <li className="sidebar-submenu-category">
    <a href="#" className="sidebar-submenu-title">
      <p className="product-name">{title}</p>
      <data value={stock} className="stock" title="Available Stock">{stock}</data>
    </a>
  </li>
);

const ShowcaseItem = ({ title, price, delPrice, rating, img }: any) => (
  <div className="showcase">
    <a href="#" className="showcase-img-box">
      <img src={img} alt={title} width="75" height="75" className="showcase-img" />
    </a>
    <div className="showcase-content">
      <a href="#"><h4 className="showcase-title">{title}</h4></a>
      <div className="showcase-rating">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fi ${i < rating ? "fi-sr-star" : "fi-rr-star"}`}></i>
        ))}
      </div>
      <div className="price-box">
        <del>₹{delPrice.toFixed(2)}</del>
        <p className="price">₹999.00</p>
      </div>
    </div>
  </div>
);

export default Sidebar;
