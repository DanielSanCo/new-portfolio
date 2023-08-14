import styles from './style.module.css';

const Profissional = () => {
    return (
        <div className={styles.main}>
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
                            <div className={styles.curriculo}>Curriculo</div>
                            <a href="mailto:daniel.santos3210@outlook.com" className={styles.buttonContato}>Contato</a>
                        </div>
                    </div>
                </div>
                <div className={styles.leftSide}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.barra}>
                    <div className={styles.barraTitle}>
                        <div>Diplomas</div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.proList}>
                        <div className={styles.eachItem}>
                            <div className={styles.titleExp}></div>
                            <div className={styles.titleArea}>
                                <div className={styles.title}>Diploma</div>
                                <div className={styles.subTitle}>Conclusão de Curso</div>
                            </div>
                            <img src={"./tst.gif"} alt="" className={styles.img} />
                            <div className={styles.text}>Certificado emitido após a conclusão do curso de administração</div>
                            <div className={styles.linkArea}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.barra}>
                    <div className={styles.barraTitle}>
                        <div>OlÃ¡ mundo</div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.proList}>
                        <div className={styles.eachItem}>
                            <img src="./logo.png" alt="" />
                            <div className={styles.itemTitle}>
                                <div className={styles.estilo}></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.barra}>
                    <div className={styles.barraTitle}>
                        <div>OlÃ¡ mundo</div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.proList}>
                        <div className={styles.eachItem}>
                            <img src="./logo.png" alt="" />
                            <div className={styles.itemTitle}>
                                <div className={styles.estilo}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profissional;