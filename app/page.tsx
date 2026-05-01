import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Sidebar from "@/components/Sidebar";
import ProductMain from "@/components/ProductMain";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <>
      <Modal />
      <Toast />
      <Header />
      <main>
        <Banner />
        <Category />
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <ProductMain />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
