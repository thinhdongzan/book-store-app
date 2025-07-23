import BookList from "../components/BookListDisplay/BookList";
import book_1984 from "../assets/images/book/1984.jpg";
import book_anmangtrentautochanhphuongdong from "../assets/images/book/anmangtrenchuyentautochanhphuongdong.jpg";
import book_anneofgreengables from "../assets/images/book/anneofgreengables.jpg";
import book_bogia from "../assets/images/book/bogia.jpg";
import book_chamtoigiacmo from "../assets/images/book/chamtoigiacmo.jpg";
import book_dacnhantam from "../assets/images/book/dacnhantam.jpg";
import book_demenphieuluuky from "../assets/images/book/demenphieuluuky.jpg";
import book_gietconchimnhai from "../assets/images/book/gietconchimnhai.jpg";
import book_khonggiadinh from "../assets/images/book/khonggiadinh.jpg";
import book_mobydick from "../assets/images/book/mobydick.jpg";
import book_nhungtamlongcaoca from "../assets/images/book/nhungtamlongcaoca.jpg";
import book_nhagiakim from "../assets/images/book/nhagiakim.jpg";
import CustomerReview from "../components/CustomerReviewSection/CustomerReview";
import WhyBuyFromUs from "../components/WhyBuyFromUsSection/WhyBuyFromUs";
import Benefit from "../components/BenefitOfReadingSection/Benefit";

function Home() {
    const bestSellers = [
        {
            id: 1,
            title: "1984",
            price: 10.99,
            img: book_1984,
        },
        {
            id: 2,
            title: "Án Mạng Trên Chuyến Tàu Tốc Hành Phương Đông",
            price: 12.99,
            img: book_anmangtrentautochanhphuongdong,
        },
        {
            id: 3,
            title: "Anne of Green Gables",
            price: 12.99,
            img: book_anneofgreengables,
        },
        {
            id: 4,
            title: "Bố Già",
            price: 12.99,
            img: book_bogia,
        },
    ]

    const recommendedBooks = [
        {
            id: 1,
            title: "Chạm Tới Giấc Mơ",
            price: 10.99,
            img: book_chamtoigiacmo,
        },
        {
            id: 2,
            title: "Đắc Nhân Tâm",
            price: 10.99,
            img: book_dacnhantam,
        },
        {
            id: 3,
            title: "Dế Mèn Phiêu Lưu Ký",
            price: 10.99,
            img: book_demenphieuluuky,
        },
        {
            id: 4,
            title: "Giết Con Chim Nhại",
            price: 10.99,
            img: book_gietconchimnhai,
        },
        {
            id: 5,
            title: "Không Gia Đình",
            price: 10.99,
            img: book_khonggiadinh,
        },
        {
            id: 6,
            title: "Moby Dick",
            price: 10.99,
            img: book_mobydick,
        },
        {
            id: 7,
            title: "Những Tấm Lòng Cao Cả",
            price: 10.99,
            img: book_nhungtamlongcaoca,
        },
        {
            id: 8,
            title: "Nhà Giả Kim",
            price: 10.99,
            img: book_nhagiakim,
        },

    ]

    return (
        <div>
            <BookList title="Best Sellers" books={bestSellers} />
            <BookList title="Recommendations for You" books={recommendedBooks} />
            <CustomerReview />
            <WhyBuyFromUs />
            <Benefit />
        </div>
    );
}

export default Home;