import MainTop from '@/components/mainTop';
import styles from './style.module.css';
import CardPro from '@/components/proCard';

const Profissional = () => {
    return (
        <div className={styles.main}>
            <MainTop />
            <div className={styles.content}>
                <div className={styles.barra}>
                    <div className={styles.barraTitle}>
                        <div>Diplomas</div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.proList}>
                        <CardPro />
                    </div>
                </div>
                <div className={styles.barra}>
                    <div className={styles.barraTitle}>
                        <div>Cursos</div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.proList}>
                        <CardPro />
                    </div>

                </div>
                <div className={styles.barra}>
                    <div className={styles.barraTitle}>
                        <div>Formação</div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.proList}>
                        <CardPro />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profissional;