import styles from './style.module.css';

const miniDivs = [
    { name: 'linkedin', img: './linkedin.avif' }
]

type Props = {
    name: string,
    type: string,
    img: string,
    date: string,
    link: string
}

const CardPro = ({ name, type, img, date, link }: Props) => {
    return (
        <div className={styles.card}>
            <a href={link} target='_blank' className={styles.link}>
                <div className={styles.content}>
                    <div className={styles.cardTitle}>
                        {name}
                    </div>
                    <div className={styles.cardType}>
                        {type}
                    </div>
                    <div className={styles.cardImg}>
                        <img src={img} alt="" className={styles.img} />
                    </div>
                    <div className={styles.date}>{date}</div>
                    <div className={styles.miniDivs}>
                        {miniDivs.map((item, index) => (
                            <div className={styles.eachDiv} key={index}>
                                <img src={item.img} alt="" className={styles.imgDiv} />
                            </div>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardPro;