import styles from './style.module.css';

const listAreas = [
    { nome: 'Home', img: './projetos/portfolio.png' },
    { nome: 'Home', img: './projetos/portfolio2.png' },
    { nome: 'Home', img: './projetos/portfolio3.png' },
    { nome: 'Home', img: './projetos/portfolio4.png' }
]

const Sobre = () => {
    return (
        <div className={styles.main}>
            <div className={styles.centerAbsolute}>
                <div className={styles.centerTitle}>Meu <span style={{ color: 'rgb(66, 170, 255)' }}>&nbsp;Portfolio</span></div>
                <div className={styles.desc}>Conheça, através do meu portfolio, um pouco mais sobre minha carreira profissional DEV.</div>
                <div className={styles.miniList}>
                    <div>SCRUM</div>
                    <div>GIT</div>
                    <div>API Rest</div>
                    <div>CRUD</div>
                    <div>BSM's</div>
                    <div>Clean Code</div>
                </div>
                <div className={styles.boxArea}>
                    {listAreas.map((item, index) => (
                        <img className={styles.eachArea} src={item.img} alt="" />
                    ))}
                </div>
            </div>
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
                <img src="./sobreDiv.png" alt="" />
            </div>
        </div>
    )
}

export default Sobre;