import styles from "./CartSummary.module.css";
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
        <div className={styles.cartSummaryCard}>
            <h1>Cart Summary</h1>
            <hr />
            <div className={styles.cartSummaryDetail}>
                <div className={styles.summaryItem}>
                    <p>Subtotal:</p>
                    <p>{subtotal} $</p>
                </div>
                <div className={styles.summaryItem}>
                    <p>Shipping fee:</p>
                    <p>Free</p>
                </div>
            </div>
            <hr />
            <div className={styles.summaryItem}>
                <p>Total:</p>
                <p>{subtotal} $</p>
            </div>
            <button onClick={handleCheckOut} className={styles.cartSummaryButton}>Check Out</button>
            {showToast && <Toast message="Check Out Successfully" />}
        </div>
    );
}

export default CartSummary;