import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo/library.png';
function Header() {
    return (
        <header>
            <div className={styles.logo}><img src={logo} alt="logo" />Libro</div>
            <div className={styles.searchBar}>
                <button  type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                <input type="text" placeholder="Search for books..."/>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navbar}>
                    <li><a href="/">Home</a></li>
                    <li className={styles.dropdown}>
                        <a href="/product">Product</a>
                        <ul className={styles.dropdownMenu}>
                            <li><a href="/product?genre=novel">Novel</a></li>
                            <li><a href="/product?genre=comic">Comic</a></li>
                            <li><a href="/product?genre=fairytale">Fairytale</a></li>
                            <li><a href="/product?genre=horror">Horror</a></li>
                            <li><a href="/product?genre=selfhelp">Self-help</a></li>
                            <li><a href="/product?genre=romance">Romance</a></li>
                            <li><a href="/product?genre=adventure">Adventure</a></li>
                        </ul>
                    </li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cart" className={styles.iconLink}><FontAwesomeIcon icon={faCartShopping}/></a></li>
                    <li className={styles.dropdown}>
                        <a href='#' className={styles.iconLink}><FontAwesomeIcon icon={faUser} /></a>
                        <ul className={styles.dropdownMenu}>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;