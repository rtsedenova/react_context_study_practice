import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Signup from "../components/Signup";
import HomeSlider from "../components/Slider"

export default function Home() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const closeSignupModal = () => {
        setIsSignupModalOpen(false);
    };

    const toggleModals = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
        setIsSignupModalOpen(!isSignupModalOpen);
    };

    return (
        <>
            <Header onLoginButtonClick={openLoginModal} />
            {isLoginModalOpen && <Login onCloseButtonClick={closeLoginModal} onChangeModal={toggleModals} />}
            {isSignupModalOpen && <Signup onCloseButtonClick={closeSignupModal} onChangeModal={toggleModals} />}
            {/* <HomeSlider/> */}
            <Footer />
        </>
    );
}
