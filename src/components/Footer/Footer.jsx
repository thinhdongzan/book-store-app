import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerCol}>
                    <h2>Libro</h2>
                    <p>At Libro, our mission is to spread knowledge to all through a curated selection of high-quality books.</p>
                    <div className={styles.socialLinks}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className={styles.footerIcon}/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className={styles.footerIcon}/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className={styles.footerIcon}/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className={styles.footerIcon}/>
                        </a>
                    </div>
                </div>
                <div className={styles.footerCol}>
                    <h2>Company</h2>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h2>Explore</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.contact}>
                    <h2>Contact</h2>
                        <div className={styles.contactInfo}>
                            <p><FontAwesomeIcon icon={faPhone} className={styles.footerIcon} style={{marginRight: '10px'}}/> 0388 165 868</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className={styles.footerIcon} style={{marginRight: '10px'}}/> libro@gmail.com</p>
                            <p><FontAwesomeIcon icon={faLocationDot} className={styles.footerIcon} style={{marginRight: '10px'}}/> 123 Duong Lang, Dong Da, Hanoi</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.footerBottom}>
                <p>Copyright &copy; 2025 Libro. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;