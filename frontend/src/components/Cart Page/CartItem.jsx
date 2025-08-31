import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, handleRemoveFromCart, handleIncreaseAmount, handleDecreaseAmount }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 lg:p-6 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                {/* Book Image */}
                <div className="flex-shrink-0">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-20 h-28 lg:w-24 lg:h-32 object-cover rounded-lg shadow-sm"
                    />
                </div>
                
                {/* Book Details */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                        {item.title}
                    </h3>
                    
                    {/* Price and Quantity Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                        {/* Price */}
                        <div className="text-lg font-bold text-gray-900">
                            {item.price} $
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                            <button 
                                onClick={() => handleDecreaseAmount(item.id)}
                                className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-bold transition-colors"
                            >
                                -
                            </button>
                            <span className="w-12 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-800 font-semibold">
                                {item.amount}
                            </span>
                            <button 
                                onClick={() => handleIncreaseAmount(item.id)}
                                className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-bold transition-colors"
                            >
                                +
                            </button>
                        </div>
                        
                        {/* Total Price */}
                        <div className="text-lg font-bold text-orange-600">
                            {(item.price * item.amount).toFixed(2)} $
                        </div>
                    </div>
                </div>
                
                {/* Remove Button */}
                <button 
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="flex-shrink-0 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove item"
                >
                    <FontAwesomeIcon icon={faTrash} className="text-lg" />
                </button>
            </div>
        </div>
    );
}

export default CartItem;