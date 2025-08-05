import styles from './CustomerReviewCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
function CustomerReviewCard({ review, name, img, reverse }) {
    return (
        <div className={`${styles.customerReviewCard} ${reverse ? styles.reverse : ''}`}>
            <img src={img} alt="name" />
            <div className={styles.reviewContent}>
                <p>{review}</p>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default CustomerReviewCard;