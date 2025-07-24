import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <header>
            <div className={styles.logo}>Book Base</div>
            <div className={styles.searchBar}>
                <button  type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                <input type="text" placeholder="Search for books..."/>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navbar}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/product">Product</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cart" className={styles.iconLink}><FontAwesomeIcon icon={faCartShopping}/></a></li>
                    <li><a href="/account" className={styles.iconLink}><FontAwesomeIcon icon={faUser} /></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;