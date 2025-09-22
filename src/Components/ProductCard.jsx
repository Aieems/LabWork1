import React, {useState} from "react";

function ProductCard ({name, price, image}) {
    
    const [count, setCount] = useState(0);

    const handleAddToCard = () => {
        setCount(count + 1);
    };
    const handleMinusToCard = () => {
        if (count > 0){
            setCount(count - 1);
        }
        
    };

    return(
        <div className="inline-flex flex-col border-4 border-dashed border-[#e86781] rounded-lg w-auto mb-3 mr-3 px-2 py-3 ">
            <img className="w-72 h-72 object-cover rounded" src={image} alt={name} />
            <h1 className="font-bold text-[#926870]">{name}</h1>
            <p className="font-bold text-[#926870]">{price} ₽</p>
            <p className=" text-[#926870]">В корзине: {count}</p> 
            
            <div className="flex justify-between">
                <button className=" bg-[#DB3D5D] rounded-md text-white p-2" onClick={handleAddToCard}>
                    Добавить в корзину
                </button>
                <div>
                    <button className="w-10 h-10 border-2 border-[#DB3D5D] rounded-[100%] text-[#DB3D5D] p-2 font-bold" onClick={handleMinusToCard}>
                        -
                    </button>
                    <button className=" w-10 h-10 border-2 border-[#DB3D5D] rounded-[100%] text-[#DB3D5D] p-2 font-bold" onClick={handleAddToCard}>
                        +
                    </button>
                </div>
                
            </div>
            

        </div>
    );
}

export default ProductCard;