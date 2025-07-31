import books from "../data/books.json";
import { useParams } from "react-router-dom";
import BreadCump from "../components/BreadCump/BreadCump";
import styles from "./BookDetail.module.css";
import { useState } from "react";
const BookDetail = () => {
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));
    if (!book) {
        return <div>Book not found</div>;
    }

    const [amount, setAmount] = useState(1);

    const handleAmount = (type) => {
        if (type === "increase") {
            setAmount(amount + 1);
        } else {
            setAmount(amount - 1);
        }
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
                    <button className={styles.addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;