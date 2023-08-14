import { useState } from 'react';
import styles from './style.module.css';

const menuList = [
    { name: 'Home', link: '/' },
    { name: 'Contato', link: '/contato' },
    { name: 'Projetos', link: '/projetos' },
    { name: 'Tecnologias', link: '/tecnologias' },
    { name: 'Sobre', link: '/sobre' },
    { name: 'Profissional', link: '/profissional' },
]

const NavBar = () => {
    const [marginL, setMarginL] = useState('-70%')
    const [anima, setAnima] = useState('')
    const [active, setActive] = useState('translateX(-100%)');
    const [buttonAnim, setButtonAnim] = useState('');
    const [buttonAnim2, setButtonAnim2] = useState('');
    const [buttonAnim3, setButtonAnim3] = useState('');

    const showResponseMenu = () => {
        active === 'translateX(-100%)' ? setActive('translateX(0)') : setActive('translateX(-100%)');
        setMarginL('0');
        setAnima('slidein');
    }
    const changeAnimModule = () => {
        buttonAnim === '' ? setButtonAnim('rotate(-45deg) translate(-8px, 8px)') : setButtonAnim('');
        buttonAnim2 === '' ? setButtonAnim2('0') : setButtonAnim2('');
        buttonAnim3 === '' ? setButtonAnim3('rotate(45deg) translate(-5px, -7px)') : setButtonAnim3('');
    }
    const showResponseMenu2 = () => {
        active === 'translateX(0)' ? setActive('translateX(-100%)') : setActive('translateX(0)');
    }

    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className={`${styles.random} ${styles.topDiv}`}>

                    <div></div>

                    <div className={styles.mobileMenu} onClick={() => (showResponseMenu(), changeAnimModule())}>
                        <div className={styles.nav} style={{ transform: buttonAnim }}></div>
                        <div className={styles.nav} style={{ opacity: buttonAnim2 }}></div>
                        <div className={styles.nav} style={{ transform: buttonAnim3 }}></div>
                    </div>

                </div>
                <div className={styles.logo}>
                    <img src="./logo.png" alt="" />
                </div>
                <div className={`${styles.social} ${styles.topDiv}`}>
                    <div className={styles.socialArea}>
                        <div>Social</div>
                        <div className={styles.socialLogos}>
                            <div>
                                <a href="https://www.linkedin.com/in/daniel-santos-corr%C3%AAa-007979217/" target='_blank'><img src="./linkedin.png" alt="" /></a>
                            </div>
                            <div>
                                <a href="https://github.com/DanielSanCo" target='_blank'><img src="./linkedin.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                {menuList.map((item, index) => (
                    <a href={item.link} key={index}><div>{item.name}</div></a>
                ))}
            </div>

            <div className={styles.navlist} style={{ transform: active, marginLeft: marginL, animationName: anima }}>
                {menuList.map((item, index) => (
                    <div key={index} className={styles.navLink} onClick={() => (showResponseMenu2(), changeAnimModule())} >
                        <a href={item.link} style={{color: 'white'}}>{item.name}</a>
                    </div>
                ))}
            </div>
        </header>
    )
}

export default NavBar;