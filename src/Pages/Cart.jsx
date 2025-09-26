import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { ThemeContext } from '../Context/ThemeContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, increment, decrement } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
  const handleHomeClick = () => {
    navigate('/');
  };
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <h1 className="text-center text-3xl font-bold mb-6 text-[#c756d4]">Корзина</h1>

      {cart.length === 0 ? (
        <p className="text-center">Корзина пуста</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between p-3 border-dashed border-4 rounded gap-4"
                style={{
                  backgroundColor: theme === 'dark' ? '#1e1e1e' : '#fff',
                  borderColor: '#c756d4',}}>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded"/>
                <div className="flex-1 text-left">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-[#c756d4] font-bold">{item.price} ₽</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decrement(item.id)} className="w-8 h-8 bg-gray-300 hover:bg-gray-400 text-black rounded-full font-bold transition">
                    −
                  </button>
                  <span className="w-8 text-center font-medium">{item.count}</span>
                  <button onClick={() => increment(item.id)} className="w-8 h-8 bg-[#c756d4] hover:bg-[#b34dbe] text-white rounded-full font-bold transition">
                    +
                  </button>
                </div>
                <div className="text-right min-w-24">
                  <p className="font-bold text-[#c756d4]">
                    {(item.price * item.count).toLocaleString()} ₽
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="bg-[#bf4b7d] hover:bg-[#a83a71] text-white px-3 py-1 rounded">
                  Удалить
                </button>
              </li>))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Итого: {total.toLocaleString()} ₽</p>
            <button onClick={handleHomeClick} className="bg-[#c756d4] hover:bg-[#b34dbe] text-white font-medium py-2 px-4 rounded transition-colors duration-200 mt-2">
              Продолжить покупки
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;