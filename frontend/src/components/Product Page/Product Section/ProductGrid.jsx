import styles from "./ProductGrid.module.css";
import BookCard from "../../BookCard/BookCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ProductGrid = ({ books }) => {
    const [bookData, setBookData] = useState(books);
    useEffect(() => {
        const apiUrl = "http://localhost:8000/api/books/";
        axios.get(apiUrl).then(response => {
            setBookData(response.data);
        }).catch(error => {
            console.error("Error fetching books:", error);
        });
    }, []);
    return (
        <div className={styles.productGrid}>
            {bookData.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}

export default ProductGrid;