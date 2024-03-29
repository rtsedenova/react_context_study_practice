import SelectedCard from "./SelectedCard"; 

export default function SelectedCardsList({ cartItems }) {
  return (
    <div>
      {cartItems.map((item) => (
        <SelectedCard
          key={item.id}
          imageUrl={`//${item.imageUrl}`}
          name={item.name}
          price={item.price}
          quantity={item.quantity} 
        />
      ))}
    </div>
  );
}
