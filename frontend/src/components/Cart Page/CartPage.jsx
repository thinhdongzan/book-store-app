import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cleanCart = cart.filter((item) => item && item.id);
        setCart(cleanCart);
    }, []);
    

    const handleRemoveFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    const handleIncreaseAmount = (id) => {
        const newCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, amount: item.amount + 1 };
            }
            return item;
        });
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    const handleDecreaseAmount = (id) => {
        const newCart = cart.map((item) => {
            if (item.id === id) {
                if (item.amount > 1) {
                    return { ...item, amount: item.amount - 1 };
                } else {
                    return { ...item, amount: 1 };
                }
            }
            return item;
        });
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    return (
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 mt-10 px-4 lg:px-8 max-w-7xl mx-auto">
            {/* Cart Items Section */}
            <div className="w-full lg:w-2/3 space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
                {cart.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <CartItem 
                                key={item.id} 
                                item={item} 
                                handleRemoveFromCart={handleRemoveFromCart} 
                                handleIncreaseAmount={handleIncreaseAmount} 
                                handleDecreaseAmount={handleDecreaseAmount} 
                            />
                        ))}
                    </div>
                )}
            </div>
            
            {/* Cart Summary Section */}
            <div className="w-full lg:w-1/3">
                <CartSummary subtotal={cart.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2)} />
            </div>
        </div>
    );
}

export default CartPage;