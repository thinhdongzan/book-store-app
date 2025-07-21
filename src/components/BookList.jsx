import BookCard from "./BookCard";
import styles from "./BookList.module.css";
function BookList({title, books}) {
    return (
        <section className={styles.bookSection}>
            <h2 className={styles.bookListTitle}>{title}</h2>
            <div className={styles.bookList}>
                {books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </section>
    );
}

export default BookList;