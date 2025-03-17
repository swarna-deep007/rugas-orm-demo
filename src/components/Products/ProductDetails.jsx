import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion.",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    color: ["Red", "Black"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish Jacket 1",
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish Jacket 2",
        },
    ],
};

// Mock similar products
const similarProducts = [
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
  

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState(selectedProduct.images?.[0]?.url || null);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, []);

    const handleQuantityChange = (type) => {
        setQuantity((prev) => (type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1));
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart.", {
                duration: 1000,
            });
            return;
        }
        setIsButtonDisabled(true);
        setTimeout(() => {
            toast.success("Added to cart successfully!", { duration: 1000 });
            setIsButtonDisabled(false);
        }, 500);
    };

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row">
                    {/* Left Thumbnail */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                                    mainImage === image.url ? "border-black" : "border-gray-300"
                                }`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="md:w-1/2">
                        <img
                            src={mainImage}
                            alt="Main Product"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    {/* Mobile Thumbnail */}
                    <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                                    mainImage === image.url ? "border-black" : "border-gray-300"
                                }`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>
                    {/* Product Info */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                            {selectedProduct.name}
                        </h1>
                        <p className="text-lg text-gray-600 mb-1 line-through">
                            {selectedProduct.originalPrice && `₹${selectedProduct.originalPrice}`}
                        </p>
                        <p className="text-xl text-gray-700 mb-2">₹{selectedProduct.price}</p>
                        <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                        {/* Color Selection */}
                        <div className="mb-4">
                            <p className="text-gray-700">Color:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.color.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border ${
                                            selectedColor === color ? "border-4 border-black" : "border-gray-300"
                                        }`}
                                        style={{
                                            backgroundColor: color.toLowerCase(),
                                            filter: "brightness(0.8)",
                                        }}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded border ${
                                            selectedSize === size ? "bg-black text-white" : "border-gray-300"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-6">
                            <p className="text-gray-700">Quantity:</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button
                                    onClick={() => handleQuantityChange("dec")}
                                    className="px-2 py-1 bg-gray-200 rounded text-lg"
                                >
                                    -
                                </button>
                                <span className="text-lg">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange("inc")}
                                    className="px-2 py-1 bg-gray-200 rounded text-lg"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 hover:bg-gray-800 transition duration-300 ${
                                isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"
                            }`}
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                        >
                            {isButtonDisabled ? "Adding to Cart!" : "Add to cart"}
                        </button>

                        {/* Product Characteristics */}
                        <div className="mt-10 text-gray-700">
                            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Brand</td>
                                        <td className="py-1">{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Material</td>
                                        <td className="py-1">{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* You May Also Like Section */}
                <div className="mt-20">
                    <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
                    <ProductGrid products={similarProducts} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
