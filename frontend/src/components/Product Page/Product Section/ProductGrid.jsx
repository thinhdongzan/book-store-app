import styles from "./ProductGrid.module.css";
import BookCard from "../../BookCard/BookCard";

const ProductGrid = ({ books }) => {
    return (
        <div className={styles.productGrid}>
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}

export default ProductGrid;