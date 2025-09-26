import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import { AuthContext } from '../Context/AuthContext'; 

function ProductCard({ name, price, image, id }) {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    if (isAuth) {
      navigate('/cart');
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div className={`border-4 border-dashed border-pink-500 rounded-lg p-4 mb-2 mr-2 w-72 flex flex-col gap-3 transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#1e1e1e] text-white' : 'bg-[#f9f9f9] text-black'}`}>
      <img className="w-72 h-72 object-cover rounded-md" src={image} alt={name}/>
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-lg">{price} ₽</p>
      <button
        onClick={handleAddToCart}
        className="bg-[#9747FF] hover:bg-[#af3cd9] text-white font-medium py-2 px-4 rounded transition-colors duration-200">
        В корзину
      </button>
    </div>
  );
}

export default ProductCard;