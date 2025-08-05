import BreadCump from "../components/BreadCump/BreadCump";
import FilterSidebar from "../components/Product Page/Filter Section/FilterSidebar";
import ProductListContainer from "../components/Product Page/Product Section/ProductListContainer";
import styles from "./Product.module.css";

function Product() {

    return (
        <div>
            <BreadCump page={"Product"}/>
            <div className={styles.productContainer}>
                <FilterSidebar />
                <ProductListContainer/>
            </div>
        </div>
    );
}

export default Product;