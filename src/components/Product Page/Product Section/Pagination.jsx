import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Pagination.module.css";
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.pagination}>
            <button className={styles.navButton} onClick={() => handlePageClick(currentPage - 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} className={`${styles.pageButton} ${currentPage === index + 1 ? styles.active : ""}`} onClick={() => handlePageClick(index + 1)}>
                    {index + 1}
                </button>
            ))}
            <button className={styles.navButton} onClick={() => handlePageClick(currentPage + 1)}><FontAwesomeIcon icon={faChevronRight}/></button>
        </div>
    );
}

export default Pagination;