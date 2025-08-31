import BookList from "../components/BookListDisplay/BookList";
import CustomerReview from "../components/CustomerReviewSection/CustomerReview";
import WhyBuyFromUs from "../components/WhyBuyFromUsSection/WhyBuyFromUs";
import Benefit from "../components/BenefitOfReadingSection/Benefit";
import HeroBanner from "../components/HeroSection/HeroBanner";
import "./Home.css";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../api/axios";

// Skeleton Loading Component
const BookListSkeleton = ({ title, count = 4 }) => {
    return (
        <section className="flex flex-col items-center mt-10 gap-10 ml-10 mr-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className="w-64 h-80 bg-gray-200 rounded-lg animate-pulse">
                        <div className="w-full h-48 bg-gray-300 rounded-t-lg"></div>
                        <div className="p-4 space-y-3">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

function Home() {
    const [booksData, setBooksData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axiosInstance.get('books/').then(response => {
            setBooksData(response.data);
            setIsLoading(false);
        }).catch(error => {
            console.error("Error fetching books:", error);
            setIsLoading(false);
        });
    }, []);

    const bestSellers = booksData.slice(0, 4);
    const recommendations = booksData.slice(4, 12);

    return (
        <div className="home-container">
            <HeroBanner />
            
            {isLoading ? (
                <>
                    <BookListSkeleton title="Best Sellers" count={4} />
                    <BookListSkeleton title="Recommendations for You" count={8} />
                </>
            ) : (
                <>
                    <BookList title="Best Sellers" books={bestSellers} />
                    <BookList title="Recommendations for You" books={recommendations} />
                </>
            )}
            
            <CustomerReview />
            <WhyBuyFromUs />
            <Benefit />
        </div>
    );
}

export default Home;