import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import LanguageFilter from "./LanguageFilter";
import PublisherFilter from "./PublisherFilter";
import styles from "./FilterSidebar.module.css";
function FilterSidebar({ filters, setFilters }) {
    return (
        <div className={styles.filterSection}>
            <h2>Filter Options</h2>
            <CategoryFilter filters={filters} setFilters={setFilters}/>
            <hr />
            <PriceFilter/>
            <hr />
            <LanguageFilter filters={filters} setFilters={setFilters}/>
            <hr />
            <PublisherFilter filters={filters} setFilters={setFilters}/>
        </div>
    );
}

export default FilterSidebar;