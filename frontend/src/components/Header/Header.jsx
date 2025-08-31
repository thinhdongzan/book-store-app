import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faUser, faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo/library.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsProductMenuOpen(false);
        setIsAccountMenuOpen(false);
    };

    const toggleProductMenu = () => {
        setIsProductMenuOpen(!isProductMenuOpen);
        setIsAccountMenuOpen(false);
    };

    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
        setIsProductMenuOpen(false);
    };

    const closeAllMenus = () => {
        setIsMobileMenuOpen(false);
        setIsProductMenuOpen(false);
        setIsAccountMenuOpen(false);
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setIsProductMenuOpen(false);
                setIsAccountMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* Spacer to prevent content from being hidden behind fixed header */}
            <div className="h-24"></div>
            
            <header className="fixed top-0 left-0 right-0 bg-white text-gray-800 shadow-sm border-b border-orange-200 p-3 z-50">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo and Brand */}
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="logo" className="w-12 h-12" />
                            <span className="text-4xl font-bold text-gray-800">Libro</span>
                        </div>

                        {/* Search Bar - Hidden on mobile */}
                        <div className="hidden md:flex flex-1 max-w-md mx-8">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for books..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDAD16] focus:border-[#FDAD16]"
                                />
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-semibold text-lg">Home</a>
                            
                            {/* Product Dropdown */}
                            <div className="relative dropdown-container">
                                <button
                                    onClick={toggleProductMenu}
                                    className="text-gray-700 hover:text-orange-600 transition-colors font-semibold text-lg flex items-center space-x-2"
                                >
                                    <span>Product</span>
                                </button>
                                {isProductMenuOpen && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl py-3 min-w-52 z-50">
                                        <li><a href="/product?genre=novel" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Novel</a></li>
                                        <li><a href="/product?genre=comic" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Comic</a></li>
                                        <li><a href="/product?genre=fairytale" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Fairytale</a></li>
                                        <li><a href="/product?genre=horror" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Horror</a></li>
                                        <li><a href="/product?genre=selfhelp" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Self-help</a></li>
                                        <li><a href="/product?genre=romance" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Romance</a></li>
                                        <li><a href="/product?genre=adventure" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Adventure</a></li>
                                    </ul>
                                )}
                            </div>
                            
                            <a href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-semibold text-lg">About</a>
                            
                            <a href="/cart" className="text-gray-700 hover:text-orange-600 transition-colors">
                                <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
                            </a>
                            
                            {/* Account Dropdown */}
                            <div className="relative dropdown-container">
                                <button
                                    onClick={toggleAccountMenu}
                                    className="text-gray-700 hover:text-orange-600 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faUser} className="text-2xl" />
                                </button>
                                {isAccountMenuOpen && (
                                    <ul className="absolute top-full right-0 bg-white border border-gray-200 rounded-lg shadow-xl py-3 min-w-36 z-50">
                                        {isLoggedIn ? (
                                            <>
                                                <li><a href="#" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Profile</a></li>
                                                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); closeAllMenus(); }} className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base">Logout</a></li>
                                            </>
                                        ) : (
                                            <>
                                                <li><a href="/login" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Login</a></li>
                                                <li><a href="/register" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-gray-700 text-base" onClick={closeAllMenus}>Register</a></li>
                                            </>
                                        )}
                                    </ul>
                                )}
                            </div>
                        </nav>

                        {/* Mobile Icons */}
                        <div className="flex items-center space-x-4 md:hidden">
                            {/* Search Icon */}
                            <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                                <FontAwesomeIcon icon={faSearch} className="text-lg" />
                            </button>
                            
                            {/* Cart Icon */}
                            <a href="/cart" className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                                <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
                            </a>
                            
                            {/* Hamburger Menu Button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
                            >
                                <FontAwesomeIcon 
                                    icon={isMobileMenuOpen ? faTimes : faBars} 
                                    className="text-lg" 
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <nav className="px-4 py-3">
                            <ul className="space-y-2">
                                <li>
                                    <a href="/" className="block px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FDAD16] rounded-lg transition-colors text-lg font-medium" onClick={closeAllMenus}>
                                        Home
                                    </a>
                                </li>
                                
                                {/* Product Menu */}
                                <li>
                                    <button
                                        onClick={toggleProductMenu}
                                        className="w-full text-left px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FDAD16] rounded-lg transition-colors flex items-center justify-between text-lg font-medium"
                                    >
                                        <span>Product</span>
                                        <FontAwesomeIcon 
                                            icon={faChevronDown} 
                                            className={`text-sm transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} 
                                        />
                                    </button>
                                    {isProductMenuOpen && (
                                        <ul className="ml-4 mt-2 space-y-2">
                                            <li><a href="/product?genre=novel" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Novel</a></li>
                                            <li><a href="/product?genre=comic" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Comic</a></li>
                                            <li><a href="/product?genre=fairytale" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Fairytale</a></li>
                                            <li><a href="/product?genre=horror" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Horror</a></li>
                                            <li><a href="/product?genre=selfhelp" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Self-help</a></li>
                                            <li><a href="/product?genre=romance" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Romance</a></li>
                                            <li><a href="/product?genre=adventure" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Adventure</a></li>
                                        </ul>
                                    )}
                                </li>
                                
                                <li>
                                    <a href="/about" className="block px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-lg font-medium" onClick={closeAllMenus}>
                                        About
                                    </a>
                                </li>
                                
                                {/* Account Menu */}
                                <li>
                                    <button
                                        onClick={toggleAccountMenu}
                                        className="w-full text-left px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors flex items-center justify-between text-lg font-medium"
                                    >
                                        <span className="flex items-center space-x-2">
                                            <span>Account</span>
                                        </span>
                                        <FontAwesomeIcon 
                                            icon={faChevronDown} 
                                            className={`text-sm transition-transform ${isAccountMenuOpen ? 'rotate-180' : ''}`} 
                                        />
                                    </button>
                                    {isAccountMenuOpen && (
                                        <ul className="ml-4 mt-2 space-y-2">
                                            {isLoggedIn ? (
                                                <>
                                                    <li><a href="#" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Profile</a></li>
                                                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); closeAllMenus(); }} className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base">Logout</a></li>
                                                </>
                                            ) : (
                                                <>
                                                    <li><a href="/login" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Login</a></li>
                                                    <li><a href="/register" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-base" onClick={closeAllMenus}>Register</a></li>
                                                </>
                                            )}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;