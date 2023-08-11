import styles from './style.module.css';

const linguagens = [
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
]

const Linguagens = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {linguagens.map((item, index) => (
                    <div className={styles.eachLinguagem} key={index}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default Linguagens;