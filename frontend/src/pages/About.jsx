import BreadCump from "../components/BreadCump/BreadCump";
import Introduction from "../components/About Page/Introduction";
import Misson from "../components/About Page/Misson";
import CTA from "../components/About Page/CTA";
import styles from "./About.module.css";
function About() {
    return (
        <div className={styles.aboutContainer}>
            <BreadCump page={"About"}/>
            <div className={styles.aboutContent}>
                <Introduction/>
                <Misson/>
                <CTA/>
            </div>
        </div>
    );
}

export default About;