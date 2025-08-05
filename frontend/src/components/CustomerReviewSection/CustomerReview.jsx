import CustomerReviewCard from "./CustomerReviewCard";
import styles from "./CustomerReview.module.css";
import customer_annanguyen from "../../assets/images/customer/annanguyen.jpg";
import customer_davidtran from "../../assets/images/customer/davidtran.jpg";
import customer_linhpham from "../../assets/images/customer/linhpham.jpg";

function CustomerReview() {
    const reviews = [
        {
            id: 1,
            name: "Anna Nguyen",
            review: "This bookstore is a hidden gem! I love how cozy the space feels, and the staff are always so friendly and helpful. I found some rare books here that I couldn't get anywhere else. Highly recommended!",
            img: customer_annanguyen,
        },
        {
            id: 2,
            name: "David Tran",
            review: "Great selection of both Vietnamese and international titles. The website is easy to navigate, and my order arrived quickly in perfect condition. Will definitely buy again!",
            img: customer_davidtran,
        },
        {
            id: 3,
            name: "Linh Pham",
            review: "I really appreciate the personalized recommendations. It feels like the team really understands what readers want. Plus, the packaging is beautiful—perfect for gifts!",
            img: customer_linhpham,
        }
    ];

    return (
        <div className={styles.customerReview}>
            <h2>Customer Reviews</h2>
            <div className={styles.reviewList}>
                {reviews.map((review, idx) => (
                    <CustomerReviewCard key={review.id} review={review.review} name={review.name} img={review.img} reverse={idx % 2 === 1}/>
                ))}
            </div>
        </div>
    );
}

export default CustomerReview;