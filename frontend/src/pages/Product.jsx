import BreadCump from "../components/BreadCump/BreadCump";
import FilterSidebar from "../components/Product Page/Filter Section/FilterSidebar";
import ProductListContainer from "../components/Product Page/Product Section/ProductListContainer";
import styles from "./Product.module.css";
import { useState } from "react";

function Product() {
    const [filters, setFilters] = useState({category: "", language: "", publisher: ""});
    return (
        <div>
            <BreadCump page={"Product"}/>
            <div className={styles.productContainer}>
                <FilterSidebar filters={filters} setFilters={setFilters}/>
                <ProductListContainer filters={filters}/>
            </div>
        </div>
    );
}

export default Product;