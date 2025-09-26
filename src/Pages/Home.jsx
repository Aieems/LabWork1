import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import ProductCard from '../Components/ProductCard';
const products = [
  { id: 1, name: "Кот летчик", price: 99990, image: "https://i.pinimg.com/736x/94/72/a6/9472a684b59485064cd128c718313a86.jpg" },
  { id: 2, name: "Кот", price: 129990, image: "https://i.pinimg.com/736x/fe/6b/4b/fe6b4b70f20c5cfa8cb044dba40c64c4.jpg" },
  { id: 3, name: "AirPods Pro", price: 24990, image: "https://i.pinimg.com/1200x/59/6a/8c/596a8c850ede6cebe88c510ddb8cfead.jpg" },
  { id: 4, name: "AirPods mini", price: 50090, image: "https://i.pinimg.com/736x/07/c0/66/07c066bbc5d502ef6ad81e65377e9ce4.jpg" },
  { id: 5, name: "Окак", price: 109990, image: "https://i.pinimg.com/1200x/2a/0a/bc/2a0abc8bef1f9475cf8ed635e3bc86d1.jpg" }
];
function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <h1 className={ `${theme === 'dark' ? 'text-white' : 'text-[#9747FF]'} text-center text-3xl font-bold mb-6 `}>Каталог товаров</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map(product => ( <ProductCard key={product.id} {...product} />))}
      </div>
    </div>
  );
}
export default Home;