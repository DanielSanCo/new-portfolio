import styles from './style.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.eachSpace}>logo</div>
                <div className={styles.eachSpace}>menu</div>
                <div className={styles.eachSpace}>social</div>

            </div>
            <div className={styles.autoral}>Direitos Autorais</div>
        </footer>
    )
}

export default Footer;