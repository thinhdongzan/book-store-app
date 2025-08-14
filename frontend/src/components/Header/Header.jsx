import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo/library.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        checkLoginStatus();
        
        // Listen for storage changes (when tokens are added/removed from other tabs)
        const handleStorageChange = (e) => {
            if (e.key === 'access_token') {
                checkLoginStatus();
            }
        };
        
        // Listen for window focus to check login status when user returns to tab
        const handleWindowFocus = () => {
            checkLoginStatus();
        };
        
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('focus', handleWindowFocus);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('focus', handleWindowFocus);
        };
    }, []);

    const checkLoginStatus = () => {
        const accessToken = localStorage.getItem('access_token');
        setIsLoggedIn(!!accessToken);
    };

    const handleLogout = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
                await axiosInstance.post('/users/logout/blacklist/', {
                    refresh_token: refreshToken
                });
            }
        } catch (error) {
            console.log('Logout API error:', error);
        } finally {
            // Always clear tokens and update state regardless of API response
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            setIsLoggedIn(false);
            navigate('/login');
        }
    };

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
                    {isLoggedIn ? (
                        <li className={styles.dropdown}>
                            <a href='#' className={styles.iconLink}><FontAwesomeIcon icon={faUser} /></a>
                            <ul className={styles.dropdownMenu}>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#" onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </li>
                    ) : (
                        <li className={styles.dropdown}>
                            <a href='#' className={styles.iconLink}><FontAwesomeIcon icon={faUser} /></a>
                            <ul className={styles.dropdownMenu}>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/register">Register</a></li>
                            </ul>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;