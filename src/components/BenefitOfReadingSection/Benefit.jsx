import styles from './Benefit.module.css';
function Benefit() {
    return (
        <section className={styles.benefit}>
            <div className={styles.benefit_video}>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/pRTWFqhEDeo?si=VWc8nOMIhIZycxPj" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        aspectRatio: '16/9'
                    }}
                ></iframe>
            </div>
            <div className={styles.benefit_content}>
                <h2>The Benefits of Reading Books</h2>
                <p>Reading books enhances your knowledge, sharpens your focus, and boosts creativity. Discover how just 15 minutes a day can change your life.</p>
            </div>
        </section>
    );
}

export default Benefit;