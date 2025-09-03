import { useParams } from "react-router-dom";
import BreadCump from "../components/BreadCump/BreadCump";
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    {/* Book Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="w-full max-w-md lg:max-w-lg">
                            <img 
                                src={book.image} 
                                alt={book.title}
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                    
                    {/* Book Info */}
                    <div className="w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-6">
                        <div className="space-y-2 lg:space-y-3">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                                {book.title}
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600">
                                {book.author}
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold text-red-600">
                                {book.price} $
                            </p>
                        </div>
                        
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-gray-900">Description:</h3>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {book.description}
                            </p>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm sm:text-base font-medium text-gray-700">Số lượng:</span>
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                <button 
                                    onClick={() => handleAmount("decrease")}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                                >
                                    -
                                </button>
                                <span className="w-12 sm:w-16 h-10 sm:h-12 flex items-center justify-center bg-white border-x border-gray-300 text-sm sm:text-base font-medium">
                                    {amount}
                                </span>
                                <button 
                                    onClick={() => handleAmount("increase")}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        
                        {/* Add to Cart Button */}
                        <button 
                            className="w-full h-12 sm:h-14 bg-[#FDAD16] hover:bg-[#E69600] text-black font-semibold text-base sm:text-lg rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            {showToast && <Toast message="Added to Cart Successfully" onClose={() => setShowToast(false)} />}
        </div>
    );
}

export default BookDetail;