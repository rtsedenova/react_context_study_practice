import cartImg from "../assets/cart.png"
import { Link } from "react-router-dom";

export default function Header({ onLoginButtonClick }) {
    return (
      <header className="bg-white text-black py-8 px-24 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">Store</h1>
          </div>
          <div className="flex space-x-20">
          <Link to="/" className="text-gray-600 text-2xl hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 text-2xl hover:text-gray-900">
            About us
          </Link>
          <Link to="/shop" className="text-gray-600 text-2xl hover:text-gray-900">
            Shop now
          </Link>
          </div>
          <div className="flex space-x-4">
          <Link to="/cart">
          <button className="bg-transparent">
              <img src={cartImg} alt="Cart" className="h-8 mr-8" />
            </button>
          </Link>
            <button onClick={onLoginButtonClick} className="bg-gray-200 align-middle text-xl hover:bg-gray-300 hover:shadow-md rounded-lg px-5 py-2">
              Log In
            </button>
          </div>
        </div>
      </header>
    );
  }