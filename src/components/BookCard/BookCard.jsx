import styles from "./BookCard.module.css";
import { useNavigate } from "react-router-dom";
function BookCard({book}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/book/${book.id}`);
    }
    return (
        <div className={styles.bookCard} onClick={handleClick}>
            <img src={book.img} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.price} $</p>
        </div>
    );
}

export default BookCard;