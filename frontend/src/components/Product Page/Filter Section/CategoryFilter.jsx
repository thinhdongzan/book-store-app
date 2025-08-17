import styles from "./FilterGroup.module.css";
const categories = [
    "Comic",
    "Novel",
    "Adventure",
    "Horror",
    "Self-help",
    "Fairy Tale",
    "Romance",
]

const CategoryFilter = ({ filters, setFilters }) => {
    return (
        <div className={styles.filterGroup}>
            <h3>Category</h3>
            <div className={styles.filterOptions}>
                {categories.map((category, index) => (
                    <div key={index} className={styles.filterOption}>
                        <label>
                            <input type="checkbox" id={category} name={category} checked={filters.category === category} onChange={(e) => setFilters({ ...filters, category: e.target.checked ? category : "" })} />
                            <span className={styles.checkmark}></span>
                            {category}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;