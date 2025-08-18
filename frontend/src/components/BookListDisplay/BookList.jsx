import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.css";
function BookList({title, books}) {
	const safeBooks = Array.isArray(books) ? books : [];
	return (
		<section className="flex flex-col items-center mt-10 gap-10 ml-10 mr-10">
			<h2 className={styles.bookListTitle}>{title}</h2>
			<div className="flex flex-wrap justify-center gap-10">
				{safeBooks.map(book => (
					<BookCard key={book.id} book={book} />
				))}
			</div>
		</section>
	);
}

export default BookList;