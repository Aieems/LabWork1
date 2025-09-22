import { useState } from 'react'
import './App.css'
import ProductCard from './Components/ProductCard'

function App() {

  return (
    <>
      <h1 className='mb-5 text-[#DB3D5D] text-center text-3xl font-bold'>магазин</h1>
      <div className='flex justify-around'>
        <ProductCard 
          name="кот летчик"
          price={99990}
          image="https://i.pinimg.com/736x/94/72/a6/9472a684b59485064cd128c718313a86.jpg"
        />

        <ProductCard
          name="кот"
          price={129990}
          image="https://i.pinimg.com/736x/fe/6b/4b/fe6b4b70f20c5cfa8cb044dba40c64c4.jpg"
        />

        <ProductCard
          name="AirPods Pro"
          price={24990}
          image="https://i.pinimg.com/1200x/59/6a/8c/596a8c850ede6cebe88c510ddb8cfead.jpg"
        />
        <ProductCard
          name="AirPods mini"
          price={50090}
          image="https://i.pinimg.com/736x/07/c0/66/07c066bbc5d502ef6ad81e65377e9ce4.jpg"
        />
      </div>
      
    
    </>
  )
}

export default App
