import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.css";

function BookList({title, books}) {
	const safeBooks = Array.isArray(books) ? books : [];
	return (
		<section className="flex flex-col items-center mt-10 gap-10 ml-10 mr-10">
			<h2 className={styles.bookListTitle}>{title}</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
				{safeBooks.map(book => (
					<BookCard key={book.id} book={book} />
				))}
			</div>
		</section>
	);
}

export default BookList;