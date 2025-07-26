import styles from "./ProductGrid.module.css";
import BookCard from "../../BookCard/BookCard";
import nhungkexuatchung from "../../../assets/images/book/nhungkexuatchung.jpg";
import thealchemist from "../../../assets/images/book/thealchemist.jpg";
import prideandprejudice from "../../../assets/images/book/prideandprejudice.jpg";
import lordoftherings from "../../../assets/images/book/lordoftherings.jpg";
import thecatcherintherye from "../../../assets/images/book/thecatcherintherye.jpg";
import warandpeace from "../../../assets/images/book/warandpeace.jpg";
import mobydick from "../../../assets/images/book/mobydick.jpg";
import invisibleman from "../../../assets/images/book/invisibleman.jpg";
import tokillamockingbird from "../../../assets/images/book/tokillamockingbird.jpg";
import matmadavinci from "../../../assets/images/book/matmadavinci.jpg";
import tamquocdiennghia from "../../../assets/images/book/tamquocdiennghia.jpg";
import nhungnguoikhonkho from "../../../assets/images/book/nhungnguoikhonkho.jpg";
import khonggiadinh from "../../../assets/images/book/khonggiadinh.jpg";
import muonkiepnhansinh from "../../../assets/images/book/muonkiepnhansinh.jpg";
import tinhyeuvathamvong from "../../../assets/images/book/tinhyeuvathamvong.jpg";
import timminhtrongthegioihautuoitho from "../../../assets/images/book/timminhtrongthegioihautuoitho.jpg";

const bookData = [
    {
        id: 1,
        title: "Những kẻ xuất chúng",
        price: 10.99,
        img: nhungkexuatchung,
    },
    {
        id: 2,
        title: "The Alchemist",
        price: 12.99,
        img: thealchemist,
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        price: 9.99,
        img: prideandprejudice,
    },
    {
        id: 4,
        title: "The Lord of the Rings",
        price: 15.99,
        img: lordoftherings,
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        price: 11.99,
        img: thecatcherintherye,
    },
    {
        id: 6,
        title: "War and Peace",
        price: 18.99,
        img: warandpeace,
    },
    {
        id: 7,
        title: "Moby Dick",
        price: 13.99,
        img: mobydick,
    },
    {
        id: 8,
        title: "Invisible Man",
        price: 12.49,
        img: invisibleman,
    },
    {
        id: 9,
        title: "To Kill a Mockingbird",
        price: 10.49,
        img: tokillamockingbird,
    },
    {
        id: 10,
        title: "Mật mã Da Vinci",
        price: 14.99,
        img: matmadavinci,
    },
    {
        id: 11,
        title: "Tam Quốc Diễn Nghĩa",
        price: 16.99,
        img: tamquocdiennghia,
    },
    {
        id: 12,
        title: "Những người khốn khổ",
        price: 13.49,
        img: nhungnguoikhonkho,
    },
    {
        id: 13,
        title: "Không gia đình",
        price: 11.49,
        img: khonggiadinh,
    },
    {
        id: 14,
        title: "Muôn kiếp nhân sinh",
        price: 17.99,
        img: muonkiepnhansinh,
    },
    {
        id: 15,
        title: "Tình yêu và tham vọng",
        price: 12.99,
        img: tinhyeuvathamvong,
    },
    {
        id: 16,
        title: "Tìm mình trong thế giới hậu tuổi thơ",
        price: 15.49,
        img: timminhtrongthegioihautuoitho,
    }
];

const ProductGrid = () => {
    return (
        <div className={styles.productGrid}>
            {bookData.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}

export default ProductGrid;