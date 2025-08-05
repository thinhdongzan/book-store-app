import styles from "./WhyBuyFromUs.module.css";
import authentic from "../../assets/images/whybuyfromus/authentic.png";
import fastDelivery from "../../assets/images/whybuyfromus/fast-delivery.png";
import techSupport from "../../assets/images/whybuyfromus/tech-support.png";
import WbfuReasonCard from "./wbfuReasonCard";

function WhyBuyFromUs() {
    const reasons = [
        {
            id: 1,
            title: "Authentic Books",
            description: "We offer genuine books from trusted publishers at competitive prices, ensuring you get quality content while saving money on every purchase.",
            img: authentic,
        },
        {
            id: 2,
            title: "Fast Nationwide Delivery",
            description: "Orders are processed quickly and shipped across Vietnam within 2–3 days. Your books arrive on time and in perfect condition.",
            img: fastDelivery,
        },
        {
            id: 3,
            title: "Friendly Support",
            description: "If there’s any issue with your order, we provide hassle-free returns. Our customer support team is always ready to help you promptly.",
            img: techSupport,
        }
    ]
    return (
        <div className={styles.whyBuyFromUs}>
            <h2>Why Buy From Us </h2>
            <div className={styles.wbfuReasonList}>
                {reasons.map((reason) => (
                    <WbfuReasonCard key={reason.id} title={reason.title} description={reason.description} img={reason.img} />
                ))}
            </div>
        </div>
    );
}

export default WhyBuyFromUs;