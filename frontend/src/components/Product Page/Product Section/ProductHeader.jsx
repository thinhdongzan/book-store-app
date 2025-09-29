import styles from "./ProductHeader.module.css";

const ProductHeader = ({ currentPage, booksPerPage, totalBooks, sortBy, onSortChange }) => {
    const startIndex = (currentPage - 1) * booksPerPage + 1;
    const endIndex = Math.min(currentPage * booksPerPage, totalBooks);
    
    return (
        <div className={styles.productHeader}>
            <h2>Showing {startIndex}-{endIndex} of {totalBooks} results</h2>
            <div className={styles.sortingOptions}>
                <p>Sort by: </p>
                <select 
                    name="sort" 
                    id="sort" 
                    className={styles.sortingSelect}
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="name_asc">Name: A to Z</option>
                    <option value="name_desc">Name: Z to A</option>
                </select>
            </div>
        </div>
    );
}

export default ProductHeader;