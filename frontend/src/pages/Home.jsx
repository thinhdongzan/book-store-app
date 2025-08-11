import BookList from "../components/BookListDisplay/BookList";
import CustomerReview from "../components/CustomerReviewSection/CustomerReview";
import WhyBuyFromUs from "../components/WhyBuyFromUsSection/WhyBuyFromUs";
import Benefit from "../components/BenefitOfReadingSection/Benefit";
import HeroBanner from "../components/HeroSection/HeroBanner";
import "./Home.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Home() {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:8000/api/books/";
        axios.get(apiUrl).then(response => {
            setBooksData(response.data);
        }).catch(error => {
            console.error("Error fetching books:", error);
        });
    }, []);

    return (
        <div className="home-container">
            <HeroBanner />
            <BookList title="Best Sellers" books={booksData} />
            <BookList title="Recommendations for You" books={booksData} />
            <CustomerReview />
            <WhyBuyFromUs />
            <Benefit />
        </div>
    );
}

export default Home;