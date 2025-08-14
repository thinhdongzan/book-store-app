import styles from "./ProductHeader.module.css";

const ProductHeader = ({ currentPage, booksPerPage, totalBooks }) => {
    const startIndex = (currentPage - 1) * booksPerPage + 1;
    const endIndex = Math.min(currentPage * booksPerPage, totalBooks);
    
    return (
        <div className={styles.productHeader}>
            <h2>Showing {startIndex}-{endIndex} of {totalBooks} results</h2>
            <div className={styles.sortingOptions}>
                <p>Sort by: </p>
                <select name="sort" id="sort" className={styles.sortingSelect}>
                    <option value="1">Newest</option>
                    <option value="2">Oldest</option>
                    <option value="3">Price: Low to High</option>
                    <option value="4">Price: High to Low</option>
                    <option value="5">Name: A to Z</option>
                    <option value="6">Name: Z to A</option>
                </select>
            </div>
        </div>
    );
}

export default ProductHeader;