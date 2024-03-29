import Header from "../components/Header";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Footer from "../components/Footer"
import { useState } from "react";

export default function AboutUs(){
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
    return(
        <>
        <Header onLoginButtonClick={openLoginModal} />
        {isLoginModalOpen && <Login onCloseButtonClick={closeLoginModal} onChangeModal={toggleModals} />}
        {isSignupModalOpen && <Signup onCloseButtonClick={closeSignupModal} onChangeModal={toggleModals} />}
        <Footer/>
        </>
    )
}