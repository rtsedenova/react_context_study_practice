import React, { useRef } from 'react';

export default function Login({ onCloseButtonClick, onChangeModal }) {
    const inputClass = 'py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-3';

    const email = useRef();
    const password = useRef();



    function handleSubmit(e) {
        e.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        console.log(enteredEmail, enteredPassword);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="absolute w-2/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-8 rounded-lg">
                <button onClick={onCloseButtonClick} className="absolute top-0 right-0 m-2 mr-4 mb-2 text-gray-500 hover:text-gray-700">&#10005;</button>
                <h2 className="text-4xl font-medium mb-10">Login</h2>

                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
                        <input onChange={(e) => handleInputChange('email', e.target.value)} id="email" type="email" name="email" ref={email} className={inputClass} required/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold mb-2">Password</label>
                        <input onChange={(e) => handleInputChange('password', e.target.value)} id="password" type="password" name="password" ref={password} className={inputClass} required/>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <button type="reset" className="text-lg font-semibold text-gray-600 hover:text-gray-800">Reset</button>
                    <button className="bg-gray-200 text-lg align-middle text-md hover:bg-gray-300 hover:shadow-md rounded-lg px-5 py-2">Log In</button>
                </div>

                <div className="mt-12 flex items-center">
                <p className="text-lg font-semibold mr-6">Not registered yet?</p>
                <button onClick={onChangeModal} className="text-lg font-semibold text-gray-600 hover:text-gray-800">Sign Up</button>
                </div>
            </form>
        </>
    );
}
