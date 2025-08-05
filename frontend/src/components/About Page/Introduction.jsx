import "./Introduction.module.css";
import introImg from "../../assets/images/aboutpage/introbackground.jpg";
import styles from "./Introduction.module.css";
const Introduction = () => {
    return (
        <div className={styles.introContainer}>
            <img src={introImg} alt="intro-img" />
            <div className={styles.introContent}>
                <h2>About Us</h2>
                <p>Libro is where the love of reading begins – a place where you’ll find not only great books, but also inspiration, knowledge, and a sense of connection with a community of book lovers. Whether you're a lifelong reader or just starting your reading journey, Libro is here to welcome you.</p>
            </div>
        </div>
    );
}

export default Introduction;