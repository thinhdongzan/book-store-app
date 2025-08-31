import { useParams } from "react-router-dom";
import BreadCump from "../components/BreadCump/BreadCump";
import styles from "./BookDetail.module.css";
import { useState, useEffect } from "react";
import Toast from "../components/Toast";
import axiosInstance from "../api/axios.js";

function addToCart(book, amount) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingBook = cart.find(item => item.id === book.id);
    if (existingBook) {
        existingBook.amount += amount;
    } else {
        cart.push({ ...book, amount });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

// Skeleton Loading Component
const BookDetailSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            {/* Breadcrumb Skeleton */}
            <div className="mb-8">
                <div className="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Image Skeleton */}
                <div className="w-full lg:w-1/2">
                    <div className="bg-gray-200 rounded-lg h-96 lg:h-[500px] animate-pulse"></div>
                </div>
                
                {/* Content Skeleton */}
                <div className="w-full lg:w-1/2 space-y-6">
                    {/* Title Skeleton */}
                    <div className="space-y-3">
                        <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    </div>
                    
                    {/* Price Skeleton */}
                    <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
                    
                    {/* Description Skeleton */}
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    </div>
                    
                    {/* Quantity Controls Skeleton */}
                    <div className="flex items-center space-x-4">
                        <div className="h-10 bg-gray-200 rounded w-10 animate-pulse"></div>
                        <div className="h-10 bg-gray-200 rounded w-16 animate-pulse"></div>
                        <div className="h-10 bg-gray-200 rounded w-10 animate-pulse"></div>
                    </div>
                    
                    {/* Add to Cart Button Skeleton */}
                    <div className="h-12 bg-gray-200 rounded-lg w-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        axiosInstance.get(`/books/${id}/`).then((res) => {
            setBook(res.data);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching book:", error);
            setLoading(false);
        });
    }, [id]);
    
    const [amount, setAmount] = useState(1);

    const handleAmount = (type) => {
        if (type === "decrease") {
            if (amount > 1) {
                setAmount(amount - 1);
            }
        } else{
            setAmount(amount + 1);
        }
    }

    const [showToast, setShowToast] = useState(false);
    const handleAddToCart = () => {
        addToCart(book, amount);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }

    if (loading) {
        return <BookDetailSkeleton />;
    }

    if (!book) {
        return (
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 text-center">
                <div className="text-gray-500 text-xl">
                    Book not found
                </div>
            </div>
        );
    }

    return (
        <div>
            <BreadCump page={book.title} />
            <div className={styles.bookDetail}>
                <div className={styles.bookDetail_img}>
                    <img src={book.image} alt={book.title} />
                </div>
                <div className={styles.bookDetail_info}>
                    <h1>{book.title}</h1>
                    <p>{book.author}</p>
                    <p>{book.price} $</p>
                    <p>{book.description}</p>
                    <div className={styles.bookAmount}>
                        <button onClick={() => handleAmount("decrease")} className={styles.leftButton}>-</button>
                        <span>{amount}</span>
                        <button onClick={() => handleAmount("increase")} className={styles.rightButton}>+</button>
                    </div>
                    <button className={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            {showToast && <Toast message="Added to Cart Successfully" onClose={() => setShowToast(false)} />}
        </div>
    );
}

export default BookDetail;