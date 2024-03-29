import {useState} from 'react'

export default function Signup({ onCloseButtonClick, onChangeModal }) {
    const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

    const inputClass = 'mb-3 py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500';
    const labelClass = 'text-lg font-semibold mb-2';
    const checkboxClass = 'flex items-center';
    const buttonClass = 'text-lg font-semibold';

    function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const acquisitionChannel = fd.getAll('acquisition')
        const data = Object.fromEntries(fd.entries())
        data.acquisition = acquisitionChannel
        console.log(data)

        if (data.password !== data['confirm-password']) {
            setPasswordsAreNotEqual(true);
            return;
          }
    }

    return (
        <form onSubmit={handleSubmit} className="absolute w-2/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-8 rounded-lg">
            <button onClick={onCloseButtonClick} className="absolute top-0 right-0 m-2 mr-4 mb-2 text-gray-500 hover:text-gray-700">&#10005;</button>
            <h2 className="text-4xl font-medium mb-6">Welcome on board!</h2>
            <p className="mb-6 text-2xl">We just need a little bit of data from you to get you started 😋</p>

            <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input id="email" type="email" name="email" className={`${inputClass}`} required/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col mr-6">
                        <label htmlFor="password" className={labelClass}>Password</label>
                        <input id="password" type="password" name="password" className={`${inputClass}`} required minLength={6} />
                    </div>

                    <div className="flex flex-col ">
                        <label htmlFor="confirm-password" className={labelClass}>Confirm Password</label>
                        <input id="confirm-password" type="password" name="confirm-password" className={`${inputClass}`} required/>
                        <div className="control-error">
                            {passwordsAreNotEqual && <p className="text-red-500">Passwords must match.</p>}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col mr-6">
                        <label htmlFor="first-name" className={labelClass}>First Name</label>
                        <input type="text" id="first-name" name="first-name" className={`${inputClass}`} required/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="last-name" className={labelClass}>Last Name</label>
                        <input type="text" id="last-name" name="last-name" className={`${inputClass}`} required/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="gender" className="text-xl font-semibold mb-2">What is your gender?</label>
                    <select id="gender" name="gender" className={`${inputClass}`}>
                        <option value="male">Male 🐱‍👤</option>
                        <option value="female">Female 😇</option>
                        <option value="d_matter">Doesn't matter 🖖</option>
                    </select>
                </div>

                <fieldset className="mb-8">
                    <legend className="text-xl font-semibold mb-3">How did you find us?</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className={checkboxClass}>
                            <input type="checkbox" id="google" name="acquisition" value="google" />
                            <label htmlFor="google" className="ml-2 text-lg">Google</label>
                        </div>

                        <div className={checkboxClass}>
                            <input type="checkbox" id="instagram" name="acquisition" value="instagram" />
                            <label htmlFor="instagram" className="ml-2 text-lg">Instagram</label>
                        </div>

                        <div className={checkboxClass}>
                            <input type="checkbox" id="friend" name="acquisition" value="friend" />
                            <label htmlFor="friend" className="ml-2 text-lg">Referred by friend</label>
                        </div>

                        <div className={checkboxClass}>
                            <input type="checkbox" id="other" name="acquisition" value="other" />
                            <label htmlFor="other" className="ml-2 text-lg">Other</label>
                        </div>
                    </div>
                </fieldset>

                <div className="flex items-center text-lg">
                    <input type="checkbox" id="terms-and-conditions" name="terms" className="mr-2" />
                    <label htmlFor="terms-and-conditions">I agree to the terms and conditions</label>
                </div>

                <div className="flex justify-between mt-6">
                    <button type="reset" className={buttonClass}>Reset</button>
                    <button type="submit" className={`${buttonClass} bg-gray-200 align-middle hover:bg-gray-300 hover:shadow-md rounded-lg px-5 py-2`}>Sign Up</button>
                </div>
            </div>
            <div className="mt-12 flex items-center">
                <p className="text-lg font-semibold mr-6">Already registered?</p>
                <button onClick={onChangeModal} className={`${buttonClass} text-gray-600 hover:text-gray-800`}>Log In</button>
            </div>
        </form>
    );
}
