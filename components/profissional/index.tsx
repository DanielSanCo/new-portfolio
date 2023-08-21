import styles from './style.module.css';

const Profissional = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}><span className={styles.span}>C</span>arreira</h1>
            <div className={styles.line}></div>
            <div className={styles.carreiraText}>
                <div className={styles.text}>
                    Desenvolvedor Full Stack com experiência em trabalho em equipe utilizando a metodologia SCRUM. Proficiente em linguagem de programação como React.js e banco de dados MySQL. Possuo amplo conhecimento em clean code e Redux do React.js, garantido a manutenibilidade e escalabilidade dos projetos. Além disso, possuo habilidades em design UI/UX, garantindo uma experiencia de usuario agradável e intuitiva. Sou capaz de desenvolver e utilizar API Rest, proporcionando uma comunicação eficiente e segura entre sistemas. Com uma abordagem orientada a resultados, estou sempre em busca de soluções eficazes e de alta qualidade para os desafios do desenvolvimento web.
                </div>
            </div>
        </div>
    )
}

export default Profissional;