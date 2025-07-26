import styles from './BreadCump.module.css';
function BreadCump(props) {
    return (
        <div className={styles.breadCump}>
            <h2>Libro</h2>
            <nav>
                <a href="/">Home</a><span> / {props.page}</span>
            </nav>
        </div>        
    );
}

export default BreadCump;