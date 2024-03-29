import Header from "../components/Header";
import SelectedCardsList from "../components/SelectedCardsList"; 
import Footer from "../components/Footer";
import { useCardContext } from '../context/CardContext';

export default function Cart() {
  const { cartItems } = useCardContext();

  return (
    <>
      <Header/>
      <div className="px-12">
        <h2 className="text-4xl font-medium mt-20 mb-20">Your Cart</h2>
        <SelectedCardsList cartItems={cartItems} />
      </div>
      <Footer/>
    </>
  );
}
