import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, handleRemoveFromCart, handleIncreaseAmount, handleDecreaseAmount }) => {

    return (
        <>
        <div className={styles.cartItem}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p className={styles.cartItemPrice}>{item.price} $</p>
            <div className={styles.cartItemQuantity}>
                <button onClick={() => handleDecreaseAmount(item.id)}>-</button>
                <p>{item.amount}</p>
                <button onClick={() => handleIncreaseAmount(item.id)}>+</button>
            </div>
            <p className={styles.cartItemPrice}>{item.price * item.amount} $</p>
            <button className={styles.cartItemRemove} onClick={() => handleRemoveFromCart(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
        <hr />
        </>
    );
}

export default CartItem;