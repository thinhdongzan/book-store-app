import ProductHeader from "./ProductHeader";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import styles from "./ProductListContainer.module.css";
function ProductListContainer() {
    return (
        <div className={styles.productListContainer}>
            <ProductHeader />
            <hr />
            <ProductGrid />
            <div className={styles.pagination}>
                <Pagination />
            </div>
        </div>
    );
}

export default ProductListContainer;