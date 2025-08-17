import ProductHeader from "./ProductHeader";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import styles from "./ProductListContainer.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductListContainer() {
    const [books, setBooks] = useState([]); // Initialize with empty array
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const apiUrl = "http://localhost:8000/api/books/";
        axios.get(apiUrl).then(response => {
            setBooks(response.data);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching books:", error);
            setLoading(false);
        });
    }, []);
    
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 12; // 12 products per page: 3x4 on desktop, 2x6 on tablet, 1x12 on mobile
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books ? books.slice(indexOfFirstBook, indexOfLastBook) : [];

    if (loading) {
        return <div className={styles.productListContainer}>Loading...</div>;
    }

    return (
        <div className={styles.productListContainer}>
            <ProductHeader 
                currentPage={currentPage} 
                booksPerPage={booksPerPage} 
                totalBooks={books ? books.length : 0} 
            />
            <hr />
            <ProductGrid books={currentBooks} />
            <div className={styles.pagination}>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={Math.ceil((books ? books.length : 0) / booksPerPage)} />
            </div>
        </div>
    );
}

export default ProductListContainer;