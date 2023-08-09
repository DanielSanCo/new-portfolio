import { useState } from 'react';
import styles from './style.module.css';

const tecs = [
    { name: 'JavaScript', img: '' },
    { name: 'HTML5', img: '' },
    { name: 'CSS3', img: '' },
    { name: 'React.js', img: '' },
    { name: 'Next.js', img: '' },
    { name: 'MySQL', img: '' },
]

const projetoList = [
    { img: 'https://anniebombanie.com/assets/work-personal-date-night.png', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }, { name: '', img: '/linkedin.png' }] },
    { img: 'https://png.pngtree.com/png-vector/20210520/ourlarge/pngtree-letter-g-logo-png-png-image_3310074.jpg', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }] },
    { img: 'https://img.freepik.com/vetores-premium/letra-g-coroa-logo-logotipo-da-coroa-na-letra-g-modelo-para-sinal-de-luxo-elegante-estrela-da-moda-beleza_754537-655.jpg', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }] },
    { img: '', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }] },
    { img: '', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }] },
    { img: '', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }] },
    { img: '', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }] },
    { img: '', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }] },
    { img: 'https://media.istockphoto.com/id/1306132242/pt/vetorial/g-letter-white-letter-g-with-arrow-delivery-or-logistic-icon.jpg?s=612x612&w=0&k=20&c=fWwiqvy6J5ag0ftiFPEjROKn97DsRXmiv7VJLHyGE5w=', name: 'Nome Projeto', date: '05/05/1120', tec: [{ name: '', img: '/linkedin.png' }] },
]

const Projetos = () => {
    const [number, setNumber] = useState(0)
    const [tec, setTec] = useState(-1)

    return (
        <div className={styles.main}>
            <div className={`${styles.projetoImg} ${styles.mainDiv}`}>
                <div className={styles.name}>{projetoList[number].name}</div>
                <img src={projetoList[number].img} alt="" />
                <div className={styles.projDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam recusandae at, dolor autem totam doloremque distinctio debitis consequuntur numquam similique, ipsum vel cum odio molestias molestiae saepe, voluptatem facere voluptatibus.</div>
                <div className={styles.buttonArea}>
                    <div className={styles.button}>Abrir Projeto</div>
                    <div className={styles.button}>Repositorio</div>
                </div>
            </div>
            <div className={`${styles.tecs} ${styles.mainDiv}`}>
                <div className={styles.title}>
                    <h2 className={styles.h2}>LISTA</h2>
                    <h3 className={styles.h3}>DE</h3>
                    <h1 className={styles.h1}>PROJETOS</h1>
                </div>
                <div className={styles.tecList}>
                    {tecs.map((item, index) => (
                        <div onClick={() => {tec === index ? setTec(-1) : setTec(index)}} style={{margin: '10px'}}>
                            {tec === index ?
                                <div className={styles.eachTec} key={index} style={{background: 'rgb(25, 151, 255)'}} onClick={() => setTec(-1)}>{item.name}</div>
                                :
                                <div className={styles.eachTec} key={index}>{item.name}</div>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${styles.projetoList} ${styles.mainDiv}`}>
                {projetoList.map((item, index) => (
                    <>
                        {index === number ?
                            <div className={styles.eachPro} key={index} style={{ backgroundColor: 'rgb(66, 170, 255)' }} onMouseMove={() => { setNumber(index) }} >
                                <div className={styles.nomeProjeto}>{item.name}</div>
                                <div className={styles.date}>{item.date}</div>
                                <div className={styles.projTec}>
                                    {item.tec.map((item, index) => (
                                        <img src={item.img} alt="" key={index} />
                                    ))}
                                </div>
                            </div>
                            :
                            <div className={styles.eachPro} key={index} onMouseMove={() => { setNumber(index) }} >
                                <div className={styles.nomeProjeto}>{item.name}</div>
                                <div className={styles.date}>{item.date}</div>
                                <div className={styles.projTec}>
                                    {item.tec.map((item, index) => (
                                        <img src={item.img} alt="" key={index} />
                                    ))}
                                </div>
                            </div>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default Projetos;