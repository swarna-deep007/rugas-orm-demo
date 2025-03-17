import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
    const [searchParams,setSearchParams] = useSearchParams();

    const navigate=useNavigate();
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100
    });

    const[priceRange,setPriceRange]=useState([0,100])

    const categories = ["Top Wear", "Bottom Wear"];
    const color = ["Red", "Black", "Blue", "Green", "Pink", "Yellow", "White", "Orange", "Beige", "Navy", "Purple"];
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Polyester", "Wool", "Silk", "Denim", "Linen", "Rayon"];
    const brands = ["Nike", "Adidas", "Puma", "Reebok", "Levi's", "Zara", "H&M", "Under Armour"];
    const genders = ["Men", "Women"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);

        setFilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice ? Number(params.minPrice) : 0,
            maxPrice: params.maxPrice ? Number(params.maxPrice) : 100
        });
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        let newFilters = { ...filters };

        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter(item => item !== value);
            }
        } else {
            newFilters[name] = value;
        }

        setFilters(newFilters);
        updateURLParams(newFilters)
        
    };


    const updateURLParams=(newFilters)=>{
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key)=>{
            if(Array.isArray(newFilters[key]) && newFilters[key].length>0){
                params.append(key, newFilters[key].join(","));
            }else if(newFilters[key]){
                params.append(key,newFilters[key])
            }
        })
        setSearchParams(params);
        navigate(`?${params.toString()}`)
    }

    const handlePriceChange=(e) =>{
        const newPrice= e.target.value
        setPriceRange([0,newPrice])
        const newFilters ={...filters,minPrice:0,maxPrice:newPrice}
        setFilters(filters);
        updateURLParams(newFilters)
    }
    
    const resetFilters = () => {
        setFilters({
            category: "",
            gender: "",
            color: "",
            size: [],
            material: [],
            brand: [],
            minPrice: 0,
            maxPrice: 100
        });
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Filter</h3>

            {/* Category Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Category</label>
                {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={filters.category === category}
                            onChange={handleFilterChange}
                            className="text-blue-500 focus:ring-blue-400"
                        />
                        <span className="text-gray-700">{category}</span>
                    </label>
                ))}
            </div>

            {/* Gender Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Gender</label>
                {genders.map((gender) => (
                    <label key={gender} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={filters.gender === gender}
                            onChange={handleFilterChange}
                            className="text-blue-500 focus:ring-blue-400"
                        />
                        <span className="text-gray-700">{gender}</span>
                    </label>
                ))}
            </div>

            {/* Color Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                    {color.map((color) => (
                        <button
                            key={color}
                            name='color'
                            value={color}
                            onClick={handleFilterChange}
                            className={`w-8 h-8 rounded-full border cursor-pointer transition ${
                                filters.color === color ? "border-2 border-black scale-110" : "border-gray-300"
                            }`}
                            style={{ backgroundColor: color.toLowerCase() }}
                        />
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Size</label>
                {sizes.map((size) => (
                    <label key={size} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="size"
                            value={size}
                            checked={filters.size.includes(size)}
                            onChange={handleFilterChange}
                            className="text-blue-500 focus:ring-blue-400"
                        />
                        <span className="text-gray-700">{size}</span>
                    </label>
                ))}
            </div>

            {/* Material Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Material</label>
                {materials.map((material) => (
                    <label key={material} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="material"
                            value={material}
                            checked={filters.material.includes(material)}
                            onChange={handleFilterChange}
                            className="text-blue-500 focus:ring-blue-400"
                        />
                        <span className="text-gray-700">{material}</span>
                    </label>
                ))}
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Brand</label>
                {brands.map((brand) => (
                    <label key={brand} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="brand"
                            value={brand}
                            checked={filters.brand.includes(brand)}
                            onChange={handleFilterChange}
                            className="text-blue-500 focus:ring-blue-400"
                        />
                        <span className="text-gray-700">{brand}</span>
                    </label>
                ))}
            </div>

            {/* Price Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Max Price</label>
                <input
                    type="range"
                    name="priceRange"
                    min={0}
                    max={100}
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full cursor-pointer accent-blue-500"
                />
                <div className='flex justify-between text-gray-600 mt-2'>
                    <span>
                        $0
                    </span>
                    <span>
                        ${priceRange[1]}
                    </span>
                </div>
            </div>

            {/* Reset Filters Button */}
            <button
                onClick={resetFilters}
                className="w-full text-center bg-red-500 text-white font-medium py-2 rounded-lg hover:bg-red-600 transition"
            >
                Reset Filters
            </button>
        </div>
    );
};

export default FilterSidebar;
