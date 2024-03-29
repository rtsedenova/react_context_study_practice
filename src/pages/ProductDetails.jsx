import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCardContext } from '../context/CardContext';
import cartImg from "../assets/cart.png";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import SizeTable from '../components/SizeTable';

export default function ProductDetails() {
  const { selectedCard, addToCart } = useCardContext();
  const [isSizeTableOpen, setIsSizeTableOpen] = useState(false);
  const [quantity, setCount] = useState(0); 

  const renderSizeTable = () => {
    if (selectedCard && selectedCard.category === 'Shoes, Boots & Sneakers') {
      return (<SizeTable type={"shoes"} />);
    } else {
      return null;
    }
  };

  const handleSelectSizeClick = () => {
    setIsSizeTableOpen(!isSizeTableOpen);
  };

  const plusItem = () => {
    setCount(quantity + 1); 
  };

  const minusItem = () => {
    if (quantity > 0) {
      setCount(quantity - 1); 
    }
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (selectedCard) {
      addToCart({ ...selectedCard, quantity });
    }
  };
  
  return (
    <>
      <Header />
      <div className='mb-24'>
        <h2 className="px-12 py-12 text-4xl font-medium">Product Details</h2>

        {selectedCard && (
          <div className="grid grid-cols-2">
            <div className="flex justify-center">
              <img src={`//${selectedCard.imageUrl}`} alt={selectedCard.name} className="w-fit h-fit" />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-3">{selectedCard.name}</h3>
              <p className="text-lg mb-2">Category: <span className="font-medium">{selectedCard.category}</span></p>
              <p className="text-lg mb-2">Brand: <span className="font-medium">{selectedCard.brandName}</span></p>
              <p className="text-lg mb-2">Colour: <span className="font-medium">{selectedCard.colour}</span></p>
              <p className="text-xl text-medium mb-4 mt-8">Price: <span className="font-medium">${selectedCard.price}</span></p>

              <div className="flex justify-center flex-col">
                <button onClick={handleSelectSizeClick} className="bg-gray-200 align-middle text-xl w-fit hover:bg-gray-300 hover:shadow-md rounded-lg px-5 py-2">
                  Select Size
                </button>
              </div>

              {isSizeTableOpen && (
                renderSizeTable()
              )}
              <div className="flex items-center mt-24">
                <div className=' mr-10'>
                  <img src={cartImg} alt="Add to Cart" className="w-9 h-9 mr-4" />
                </div>

                <div className="flex items-center mr-10">
                  <button onClick={minusItem}><img src={minus} className="w-8 mr-3" alt="Minus" /></button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button onClick={plusItem}><img src={plus} className="w-8 ml-3" alt="Plus" /></button>
                </div>
                <div>
                    <button className="bg-gray-200 align-middle text-xl w-fit hover:bg-gray-300 hover:shadow-md rounded-lg px-5 py-2" onClick={handleAddToCart}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
