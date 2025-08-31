import { useState } from "react";
import Toast from "../Toast";

const CartSummary = ({subtotal}) => {
    const [showToast, setShowToast] = useState(false);
    
    const handleCheckOut = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }
    
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border border-gray-200 sticky top-24">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Cart Summary</h1>
            
            <hr className="border-gray-300 mb-6" />
            
            <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-lg">Subtotal:</p>
                    <p className="text-gray-800 font-semibold text-lg">{subtotal} $</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-lg">Shipping fee:</p>
                    <p className="text-green-600 font-semibold text-lg">Free</p>
                </div>
            </div>
            
            <hr className="border-gray-300 mb-6" />
            
            <div className="flex justify-between items-center mb-8">
                <p className="text-gray-800 font-bold text-xl">Total:</p>
                <p className="text-orange-600 font-bold text-2xl">{subtotal} $</p>
            </div>
            
            <button 
                onClick={handleCheckOut} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
            >
                Check Out
            </button>
            
            {showToast && <Toast message="Check Out Successfully" />}
        </div>
    );
}

export default CartSummary;