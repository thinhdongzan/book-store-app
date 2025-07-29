import styles from "./Misson.module.css";
import missonImg1 from "../../assets/images/aboutpage/misson1.jpg";
import missonImg2 from "../../assets/images/aboutpage/misson2.jpg";
const Misson = () => {
    return (
        <div className={styles.missonContainer}>
            <h2>Our Mission</h2>
            <div className={styles.missonContent}>
                <img src={missonImg1} alt="missonImg1" />
                <div className={styles.missonText}>
                    <h3>Bringing Quality Books Closer To Everyone</h3>
                    <p>We strive to make reading more accessible — for students in cities, families in the countryside, or anyone with a thirst for knowledge.<br/><br/>
                    Our team carefully selects every title we offer, working with reputable publishers to ensure that the books you receive are meaningful, relevant, and of the highest quality. Whether you're looking for the latest bestseller or a timeless classic, Libro is your trusted source.</p>
                </div>
                <div className={styles.missonText}>
                    <h3>Inspiring Lifelong Reading and Learning Habits</h3>
                    <p>We don't just sell books — we cultivate a reading culture.<br/><br/>
                    From personalized reading recommendations to hosting book clubs and online reading challenges, we aim to make reading a joyful part of daily life.<br/><br/>
                    We believe that developing the habit of reading — especially from a young age — opens doors to creativity, empathy, and continuous growth throughout life.
                    </p>
                </div>
                <img src={missonImg2} alt="missonImg2" />
            </div>
        </div>
    );
}

export default Misson;