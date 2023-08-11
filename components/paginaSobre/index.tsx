import styles from './style.module.css';

const Sobre = () => {
    return (
        <div className={styles.main}>
            <div className={styles.centerAbsolute}></div>
            <div className={styles.right}>
                <div className={styles.titulo}><span>S</span>obre o&nbsp;<span>D</span>esenvolvedor</div>
                <div className={styles.sobre}>
                    <ul>
                        <li><div className={styles.point}></div>Full Stack</li>
                        <li><div className={styles.point}></div>Código Limpo</li>
                        <li><div className={styles.point}></div>Versionamento de Código</li>
                        <li><div className={styles.point}></div>Reponsividade</li>
                        <li><div className={styles.point}></div>API Rest</li>
                        <li><div className={styles.point}></div>Metodologia SCRUM</li>
                    </ul>
                </div>
            </div>
            <div className={styles.left}>
                <img src="https://www.guiacommarketing.com.br/wp-content/uploads/2018/10/Portfolio-lite-758x431.png" alt="" />
            </div>
        </div>
    )
}

export default Sobre;