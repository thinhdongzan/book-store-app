import BookList from "../components/BookListDisplay/BookList";
import CustomerReview from "../components/CustomerReviewSection/CustomerReview";
import WhyBuyFromUs from "../components/WhyBuyFromUsSection/WhyBuyFromUs";
import Benefit from "../components/BenefitOfReadingSection/Benefit";
import HeroBanner from "../components/HeroSection/HeroBanner";
import "./Home.css";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../api/axios";

function Home() {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        axiosInstance.get('books/').then(response => {
            setBooksData(response.data);
        }).catch(error => {
            console.error("Error fetching books:", error);
        });
    }, []);

    const bestSellers = booksData.slice(0, 4);
    const recommendations = booksData.slice(4, 12);

    return (
        <div className="home-container">
            <HeroBanner />
            <BookList title="Best Sellers" books={bestSellers} />
            <BookList title="Recommendations for You" books={recommendations} />
            <CustomerReview />
            <WhyBuyFromUs />
            <Benefit />
        </div>
    );
}

export default Home;