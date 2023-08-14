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
    { name: 'Instagram', img: '', link: '' },
    { name: 'Twitter', img: '', link: '' },
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
                        {menuList.map((item, index) => (
                            <a href={item.link} className={styles.links}>
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
                            <a href={item.link} className={styles.links}>
                                <div>
                                    {item.name}
                                </div>
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