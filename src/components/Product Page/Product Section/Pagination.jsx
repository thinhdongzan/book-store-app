import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Pagination.module.css";
const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <button className={styles.navButton}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className={styles.pageButton}>1</button>
            <button className={styles.pageButton}>2</button>
            <button className={styles.pageButton}>3</button>
            <button className={styles.pageButton}>4</button>
            <button className={styles.pageButton}>5</button>
            <button className={styles.navButton}><FontAwesomeIcon icon={faChevronRight}/></button>
        </div>
    );
}

export default Pagination;