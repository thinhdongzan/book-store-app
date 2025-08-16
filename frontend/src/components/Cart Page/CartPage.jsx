import { useEffect, useState } from "react";
import styles from "./CartPage.module.css";
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
            return item; // Trả về item gốc nếu không phải item cần tăng
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
            return item; // Trả về item gốc nếu không phải item cần giảm
        });
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <div className={styles.cartPageContainer}>
                <div className={styles.cartDetailBody}>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} handleRemoveFromCart={handleRemoveFromCart} handleIncreaseAmount={handleIncreaseAmount} handleDecreaseAmount={handleDecreaseAmount} />
                    ))}
                </div>
                <CartSummary subtotal={cart.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2)} />
            </div>
        </div>
    );


}

export default CartPage;