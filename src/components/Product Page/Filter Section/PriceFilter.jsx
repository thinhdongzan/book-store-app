import { useState } from "react";
import styles from "./FilterGroup.module.css";

const PriceFilter = () => {
    const [maxPrice, setMaxPrice] = useState(100);
    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    }

    return (
        <div className={styles.filterGroup}>
            <h3>Price</h3>
            <div className={styles.priceRange}>
                <p>0.00$ - {maxPrice}$</p>
                <input type="range" min="0" max="100" value={maxPrice} onChange={handleMaxPriceChange} style={{ background: `linear-gradient(to right, black 0%, black ${maxPrice}%, #D9D9D9 ${maxPrice}%, #D9D9D9 100%)` }} />
                
            </div>
        </div>
    );
}

export default PriceFilter;