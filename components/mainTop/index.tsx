import styles from './style.module.css';

const MainTop = () => {
    return (
        <div className={styles.top}>
            <div className={styles.rightSide}>
                <div className={styles.rightSideRight}></div>
                <div className={styles.rightSideContent}>
                    <div>
                        <img src="./logo.png" alt="" />
                    </div>
                    <h2>Cronologia</h2>
                    <h1>Profissional</h1>
                    <div>Descubra um pouco mais sobre minha jornada no ambito profissional</div>
                    <div className={styles.buttonArea}>
                        <div className={styles.curriculo}><a href="./curriculo.vite.Daniel.pdf" download>Curriculo</a></div>
                        <a href="mailto:daniel.santos3210@outlook.com" className={styles.buttonContato}>Contato</a>
                    </div>
                </div>
            </div>
            <div className={styles.leftSide}></div>
        </div>
    )
}

export default MainTop;