import { Link } from 'react-router-dom';
import { useCardContext } from '../context/CardContext';

export default function Card({ category, additionalImageUrls, imageUrl, name, brandName, colour, price }) {
  const { rememberCardInfo } = useCardContext();

  const handleClick = () => {
    rememberCardInfo({ category, additionalImageUrls, imageUrl, name, brandName, colour, price });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <Link onClick={handleClick} to="/productdetails">
        <img className="w-full h-96 object-cover object-center" src={`//${imageUrl}`} alt={name} />
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          <p className="text-lg text-gray-600 mb-1">Brand: {brandName}</p>
          <p className="text-lg text-gray-600 mb-1">Colour: {colour}</p>
          <p className="text-xl font-semibold text-gray-800">Price: ${price}</p>
        </div>
      </Link>
    </div>
  );
}
