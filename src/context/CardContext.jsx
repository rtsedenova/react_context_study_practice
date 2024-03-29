import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const rememberCardInfo = (cardData) => {
    setSelectedCard(cardData);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <CardContext.Provider value={{ selectedCard, rememberCardInfo, cartItems, addToCart }}>
      {children}
    </CardContext.Provider>
  );
};
