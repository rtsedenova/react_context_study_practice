export default function Footer(){
    return(
        <footer className="bg-white text-black py-8 px-24">
        <div>
          
          <div className="flex justify-start items-center mb-8">
            <h1 className="text-5xl font-bold">Store</h1>
          </div>
        
          <hr className="border-t border-gray-300 mb-8" />
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         
          <div className="flex flex-col justify-center items-center md:items-start">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 text-lg mb-2">Email: example@store.com</p>
            <p className="text-gray-600 text-lg mb-2">Phone: +123456789</p>
            <p className="text-gray-600 text-lg mb-2">Address: 123 Main St, City</p>
          </div>
         
          <div className="flex flex-col justify-center items-center md:items-start">
            <h2 className="text-3xl font-semibold mb-4">FAQs</h2>
            <p className="text-gray-600 text-lg mb-2">How do I return an item?</p>
            <p className="text-gray-600 text-lg mb-2">What payment methods do you accept?</p>
            <p className="text-gray-600 text-lg mb-2">Do you ship internationally?</p>
          </div>
        </div>
       
          <hr className="border-t border-gray-300 mb-8" />
        
          <div className="flex justify-center items-center text-gray-600 text-md">
            <p>&copy; 2024 Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}