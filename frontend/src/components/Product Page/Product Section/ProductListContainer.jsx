import ProductHeader from "./ProductHeader";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import styles from "./ProductListContainer.module.css";
import { useState } from "react";
import bookData from "../../../data/books.json";

function ProductListContainer() {
    const [books, setBooks] = useState(bookData);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 16;
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <div className={styles.productListContainer}>
            <ProductHeader />
            <hr />
            <ProductGrid books={currentBooks} />
            <div className={styles.pagination}>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={Math.ceil(books.length / booksPerPage)} />
            </div>
        </div>
    );
}

export default ProductListContainer;