import styles from "./wbfuReasonCard.module.css";

function WbfuReasonCard({ title, description, img }) {
    return (
        <div className={styles.wbfuReasonCard}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default WbfuReasonCard;