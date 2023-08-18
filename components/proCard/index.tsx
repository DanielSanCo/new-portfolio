import styles from './style.module.css';

const miniDivs = [
    { name: 'linkedin', img: './linkedin.avif' }
]

const CardPro = () => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.cardTitle}>
                    Conclusão de Curso
                </div>
                <div className={styles.cardType}>
                    Certificado
                </div>
                <div className={styles.cardImg}>
                    <img src="https://ievi.com.br/wp-content/uploads/2009/06/Certificado-Coaching.png" alt="" className={styles.img} />
                </div>
                <div className={styles.date}>18 - 08 - 2022</div>
                <div className={styles.miniDivs}>
                    {miniDivs.map((item, index) => (
                        <div className={styles.eachDiv}>
                            <img src={item.img} alt="" className={styles.imgDiv} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardPro;