import styles from "./BookCard.module.css";
function BookCard({book}) {
    return (
        <div className={styles.bookCard}>
            <img src={book.img} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.price} $</p>
        </div>
    );
}

export default BookCard;