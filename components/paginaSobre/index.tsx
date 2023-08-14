import styles from './style.module.css';

const Sobre = () => {
    return (
        <div className={styles.main}>
            <div className={styles.centerAbsolute}>
                <div className={styles.centerTitle}>Meu <span style={{color: 'blue', marginLeft: '7px'}}> Portfolio</span></div>
                <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem dolorum, dicta voluptatum dolores accusamus necessitatibus quod ipsum quaerat facere sunt labore pariatur culpa quas doloremque. Unde quaerat beatae similique.</div>
                <div className={styles.miniList}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
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
                <img src="https://www.guiacommarketing.com.br/wp-content/uploads/2018/10/Portfolio-lite-758x431.png" alt="" />
            </div>
        </div>
    )
}

export default Sobre;