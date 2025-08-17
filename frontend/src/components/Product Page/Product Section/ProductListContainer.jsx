import ProductHeader from "./ProductHeader";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import styles from "./ProductListContainer.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductListContainer({ filters }) {
    const [books, setBooks] = useState([]); // Initialize with empty array
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                // Reset to first page when filters change
                setCurrentPage(1);

                // Convert filters object -> query string
                const params = new URLSearchParams();
                if (filters.category) params.append("category", filters.category);
                if (filters.language) params.append("language", filters.language);
                if (filters.publisher) params.append("publisher", filters.publisher);
                if (filters.price_min) params.append("price_min", filters.price_min);
                if (filters.price_max) params.append("price_max", filters.price_max);

                const apiUrl = `http://localhost:8000/api/books/?${params.toString()}`;
                console.log("Fetching books with URL:", apiUrl); // Debug log
                const response = await axios.get(apiUrl);

                console.log("Filtered books count:", response.data.length); // Debug log
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
                // Fallback to all books if filter fails
                try {
                    const fallbackResponse = await axios.get('http://localhost:8000/api/books/');
                    setBooks(fallbackResponse.data);
                } catch (fallbackError) {
                    console.error("Fallback also failed:", fallbackError);
                    setBooks([]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [filters]);
    
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