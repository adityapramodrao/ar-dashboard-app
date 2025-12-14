import { useState } from "react";
import { Heart, ArrowLeft } from "lucide-react";

const productImages = [
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  "https://images.unsplash.com/photo-1520975922327-15d93d4b8b69",
  "https://images.unsplash.com/photo-1542060748-10c28b62716b",
  "https://images.unsplash.com/photo-1530845641048-7a9e6b4c37b8",
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT: IMAGE GALLERY */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          
          <div className="flex flex-col gap-3">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                loading="lazy"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-28 object-cover cursor-pointer border 
                ${selectedImage === img ? "border-black" : "border-gray-200"}
                hover:border-black transition`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt="product"
              className="w-full h-[600px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-semibold">Shirt Bodysuit</h1>
            <span className="text-xl font-semibold">$70.00</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2 text-gray-400">
            ★ ★ ★ ★ ☆
          </div>

          <p className="text-sm text-gray-500 mt-3">
            REF 0652/168/800 <br />
            The model is wearing size M | Height: 5.7 ft / 174 cm
          </p>

          <button className="text-sm underline mt-2">Size Guide</button>

          {/* Size */}
          <div className="mt-6">
            <label className="block text-sm mb-1">Size</label>
            <select className="w-full border px-3 py-2">
              <option>Choose an option</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </div>

          {/* Color */}
          <div className="mt-4">
            <label className="block text-sm mb-1">Color</label>
            <select className="w-full border px-3 py-2">
              <option>Choose an option</option>
              <option>White</option>
              <option>Black</option>
            </select>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex border">
              <button
                className="px-4 py-2"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-4 py-2"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            <button className="bg-black text-white px-8 py-3 flex-1 hover:opacity-90">
              Add To Cart
            </button>
          </div>

          {/* Wishlist */}
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-600 cursor-pointer">
            <Heart size={18} /> Add to Wishlist
          </div>

          {/* Product Info */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-2">Product Information</h3>
            <p className="text-sm text-gray-600">
              The insulated jacket is made of leather. A light layer of insulation.
              Details: stand-up collar, zipper, two pockets on the sides.
            </p>
          </div>

          {/* Care & Composition */}
          <div className="grid grid-cols-2 gap-6 mt-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold mb-2">Care</h4>
              <ul className="space-y-1">
                <li>Machine wash up to 40°C</li>
                <li>Iron up to 110°C</li>
                <li>Do not bleach</li>
                <li>Do not dry clean</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Composition</h4>
              <ul className="space-y-1">
                <li>Coating: 100% polyurethane</li>
                <li>Base Fabric: 100% viscose</li>
                <li>Lining: 100% polyester</li>
              </ul>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-10 border-t pt-6 text-sm text-gray-500">
            No reviews found{" "}
            <span className="underline cursor-pointer">Write a review</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
