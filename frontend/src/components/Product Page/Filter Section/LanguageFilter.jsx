import styles from "./FilterGroup.module.css";
const languages = [
    "English",
    "Vietnamese"
]
const LanguageFilter = () => {
    return (
        <div className={styles.filterGroup}>
            <h3>Language</h3>
            <div className={styles.filterOptions}>
                {languages.map((language, index) => (
                    <div key={index} className={styles.filterOption}>
                        <label>
                            <input type="checkbox" id={language} name={language} />
                            <span className={styles.checkmark}></span>
                            {language}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LanguageFilter;