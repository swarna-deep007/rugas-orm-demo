import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar"; 
import SortOptions from "../components/Products/SortOptions";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef=useRef(null);
  const [isSideBarOpen,setIsSideBarOpen]=useState(false)

  const toggleSideBar=()=>{
    setIsSideBarOpen(!isSideBarOpen)
  }

  const handleClickOutside=(e)=>{
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setIsSideBarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 90,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 110,
          images: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button onClick={toggleSideBar} className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" />
        Filter
      </button>

      {/* Filter Sidebar */}
      <div ref={sidebarRef} className={`${isSideBarOpen ? "translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50 bg-white left-0 w-64 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>
        {/*Sort options*/}
        <SortOptions/>

        {/*product grid*/}
        <ProductGrid  products={products}/>
      </div>
    </div>
  );
};

export default CollectionPage;
