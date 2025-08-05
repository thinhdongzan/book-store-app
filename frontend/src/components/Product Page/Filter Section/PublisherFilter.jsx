import styles from "./FilterGroup.module.css";
const publishers = [
    {name: "Nha Nam Publishing"},
    {name: "Kim Dong Publishing House"},
    {name: "Tre Publishing House"},
    {name: "Women Publishing House"},
    {name: "Education Publishing House"},
    {name: "Van Hoc Publishing House"},
    {name: "Lao Dong Publishing House"},
    {name: "Penguin Random House"},
    {name: "HarperCollins"},
    {name: "Simon & Schuster"},
    {name: "Macmillan Publishers"},
    {name: "Oxford University Press"},
    {name: "Cambridge University Press"},
    {name: "Scholastic Corporation"},
    {name: "Hachette Book Group"}
];

const PublisherFilter = () => {
    return (
        <div className={styles.filterGroup}>
            <h3>Publisher</h3>
            <div className={styles.filterOptions}>
                {publishers.map((publisher, index) => (
                    <div key={index} className={styles.filterOption}>
                        <label>
                            <input type="checkbox" id={publisher.name} name={publisher.name} />
                            <span className={styles.checkmark}></span>
                            {publisher.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PublisherFilter;