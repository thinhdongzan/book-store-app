import books from "../data/books.json";
import { useParams } from "react-router-dom";
import BreadCump from "../components/BreadCump/BreadCump";
import styles from "./BookDetail.module.css";
import { useState } from "react";
import Toast from "../components/Toast";
const BookDetail = () => {
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));
    if (!book) {
        return <div>Book not found</div>;
    }

    const [amount, setAmount] = useState(1);

    const handleAmount = (type) => {
        if (type === "decrease") {
            if (amount > 1) {
                setAmount(amount - 1);
            }
        } else{
            setAmount(amount + 1);
        }
    }

    const [showToast, setShowToast] = useState(false);
    const handleAddToCart = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }
    return (
        <div>
            <BreadCump page={`${book.title}`} />
            <div className={styles.bookDetail}>
                <div className={styles.bookDetail_img}>
                    <img src={book.img} alt={book.title} />
                </div>
                <div className={styles.bookDetail_info}>
                    <h1>{book.title}</h1>
                    <p>{book.author}</p>
                    <p>{book.price} $</p>
                    <p>{book.description}</p>
                    <div className={styles.bookAmount}>
                        <button onClick={() => handleAmount("decrease")} className={styles.leftButton}>-</button>
                        <span>{amount}</span>
                        <button onClick={() => handleAmount("increase")} className={styles.rightButton}>+</button>
                    </div>
                    <button className={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            {showToast && <Toast message="Added to Cart Successfully" onClose={() => setShowToast(false)} />}
        </div>
    );
}

export default BookDetail;