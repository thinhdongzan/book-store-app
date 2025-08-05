import BookList from "../components/BookListDisplay/BookList";
import CustomerReview from "../components/CustomerReviewSection/CustomerReview";
import WhyBuyFromUs from "../components/WhyBuyFromUsSection/WhyBuyFromUs";
import Benefit from "../components/BenefitOfReadingSection/Benefit";
import HeroBanner from "../components/HeroSection/HeroBanner";
import books from "../data/books.json";
import "./Home.css";

function Home() {
    const bestSellers = books.slice(0, 4);
    const recommendedBooks = books.slice(4, 12);

    return (
        <div className="home-container">
            <HeroBanner />
            <BookList title="Best Sellers" books={bestSellers} />
            <BookList title="Recommendations for You" books={recommendedBooks} />
            <CustomerReview />
            <WhyBuyFromUs />
            <Benefit />
        </div>
    );
}

export default Home;