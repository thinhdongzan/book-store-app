import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import LanguageFilter from "./LanguageFilter";
import PublisherFilter from "./PublisherFilter";
import styles from "./FilterSidebar.module.css";
function FilterSidebar() {
    return (
        <div className={styles.filterSection}>
            <h2>Filter Options</h2>
            <CategoryFilter />
            <hr />
            <PriceFilter />
            <hr />
            <LanguageFilter />
            <hr />
            <PublisherFilter />
        </div>
    );
}

export default FilterSidebar;