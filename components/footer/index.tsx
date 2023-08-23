import styles from './style.module.css';

const menuList = [
    { name: 'Home', link: '/' },
    { name: 'Contato', link: '/contato' },
    { name: 'Projetos', link: '/projetos' },
    { name: 'Tecnologias', link: '/tecnologias' },
    { name: 'Sobre', link: '/sobre' },
    { name: 'Profissional', link: '/profissional' },
]

const social = [
    { name: 'Linkedin', img: './linkedin.avif', link: 'https://www.linkedin.com/in/daniel-santos-corr%C3%AAa-007979217/' },
    { name: 'Github', img: './github.png', link: 'https://github.com/DanielSanCo' },
    { name: 'Instagram', img: './instagram.avif', link: 'https://www.instagram.com/daniel.santos.c/' },
]

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.eachSpace}>
                    <a href="/"><img src="./logo.png" alt="" className={styles.img} /></a>
                </div>
                <div className={styles.eachSpace}>
                    <div className={styles.menuArea}>
                    <h3>Acesso Rapido</h3>
                    <div className={styles.line}></div>
                    <div className={styles.space}></div>
                        {menuList.map((item, index) => (
                            <a href={item.link} className={styles.links} key={index}>
                                <div>
                                    {item.name}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.eachSpace}>
                    <div className={styles.menuArea}>
                        {social.map((item, index) => (
                            <a href={item.link} className={styles.links} target='_blank' key={index}>
                                <img src={item.img} alt="" className={styles.socialImg} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            <div className={styles.autoral}>© Todos os direitos reservados. Daniel Santos Correa</div>
        </footer>
    )
}

export default Footer;