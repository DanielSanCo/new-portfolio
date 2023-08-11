import linguagens from '@/utils/linguagens';
import styles from './style.module.css';

const Linguagens = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {linguagens.map((item, index) => (
                    <div className={styles.eachLinguagem} key={index}>
                        <img src={item.img} alt="" className={styles.img} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Linguagens;