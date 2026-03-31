import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="card bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100 overflow-hidden">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
            <img src={product.icon} alt={product.name} className="w-10 h-10 object-contain" />
          </div>
          <span className="badge badge-secondary badge-outline font-bold px-4 py-3">{product.tagType}</span>
        </div>
        
        <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-2">{product.description}</p>
        
        <div className="mb-4">
          <div className="text-2xl font-extrabold text-primary">
            ${product.price}
            <span className="text-sm font-medium text-gray-400"> / {product.period}</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <i className="fa-solid fa-circle-check text-primary"></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={handleAddToCart}
          className={`btn w-full transition-all ${isAdded ? 'btn-success text-white' : 'btn-primary text-white'}`}
        >
          {isAdded ? 'Added to cart' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

