import styles from './style.module.css';

type Props = {
    letter: string,
    text: string,
    img: string
}

const MainTop = ({ letter, text, img }: Props) => {
    return (
        <div className={styles.top}>
            <div className={styles.rightSide}>
                <div className={styles.rightSideRight}></div>
                <div className={styles.rightSideContent}>
                    <div>
                        <img src="./logo.png" alt="" />
                    </div>
                    <h2>Cronologia</h2>
                    <h1>{letter}</h1>
                    <div>{text}</div>
                    <div className={styles.buttonArea}>
                        <a href="./curriculo.vite.Daniel.pdf" download><div className={styles.curriculo}>Curriculo</div></a>
                        <a href="mailto:daniel.santos3210@outlook.com"><div className={styles.curriculo}>Contato</div></a>
                    </div>
                </div>
            </div>
            <div className={styles.leftSide} style={{ backgroundImage: `url("${img}")` }}></div>
        </div>
    )
}

export default MainTop;