import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Pagination.module.css";
import { useState, useEffect } from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const renderPageNumbers = () => {
        if (isMobile) {
            // On mobile, show only current page and 1-2 adjacent pages
            const pages = [];
            const start = Math.max(1, currentPage - 1);
            const end = Math.min(totalPages, currentPage + 1);
            
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            
            return pages.map(page => (
                <button 
                    key={page} 
                    className={`${styles.pageButton} ${currentPage === page ? styles.active : ""}`} 
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </button>
            ));
        } else {
            // On desktop, show all pages
            return Array.from({ length: totalPages }, (_, index) => (
                <button 
                    key={index} 
                    className={`${styles.pageButton} ${currentPage === index + 1 ? styles.active : ""}`} 
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </button>
            ));
        }
    };

    return (
        <div className={styles.pagination}>
            <button 
                className={styles.navButton} 
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            {renderPageNumbers()}
            
            <button 
                className={styles.navButton} 
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    );
}

export default Pagination;