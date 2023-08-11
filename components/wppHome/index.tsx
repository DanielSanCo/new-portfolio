import styles from './style.module.css';

const categories = [
    { name: 'Landing Pages' },
    { name: 'E-Commerce' },
    { name: 'Games' },
    { name: 'Blogs' },
]
const dev = [
    { name: 'Front End' },
    { name: 'Back End' },
    { name: 'Full Stack' },
    { name: 'Scrum' },
    { name: 'API Rest' },
    { name: 'Git' },
]

const WppHome = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.textArea}>
                    <div className={styles.categoriesArea}>
                        {categories.map((item, index) => (
                            <div className={styles.eachCategorie} key={index}>{item.name}</div>
                        ))}
                    </div>
                    <h2>Daniel <span>Developer</span></h2>
                    <h1>Transformando códigos em soluções inovadoras</h1>
                    <div className={styles.texto}>Desenvolvedor de Softwares Fullstack Junior formado em Analise e Desenvolvimento de Sistemas, criar sistemas e softwares com as técnologias mais usadas no mercado</div>
                    <div className={styles.buttonsArea}>
                        <div className={styles.curriculo}>Download Curriculo Vitae</div>
                        <a href="mailto:daniel.santos3210@outlook.com" className={styles.buttonContato}>Contato</a>
                    </div>
                    <div className={styles.devList}>
                        {dev.map((item, index) => (
                            <div className={styles.eachDevList} key={index}>{item.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WppHome;