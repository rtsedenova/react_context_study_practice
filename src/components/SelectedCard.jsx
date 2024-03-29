export default function SelectedCard({ imageUrl, name, price, quantity }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center mb-8 max-w-lg">
        
        <div className="mr-10">
          <img src={imageUrl} className="w-32 h-auto" alt="Product Image" />
        </div>
        
        <div>
          <h1 className="text-xl font-medium mb-2">{name}</h1>
          <p className="text-gray-600 mb-1">Price per unit: <span className="font-medium">${price}</span></p>
          <p className="text-gray-600 mb-1">Quantity: <span className="font-medium">{quantity}</span></p>
          <p className="text-gray-600">Total Price: <span className="font-medium">${price * quantity}</span></p>
        </div>
      </div>
    );
  }
  