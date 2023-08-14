import { useState } from 'react';
import styles from './style.module.css';
import projetoList from '@/utils/projects';

const tecs = [
    { name: 'JavaScript', img: '' },
    { name: 'HTML5', img: '' },
    { name: 'CSS3', img: '' },
    { name: 'React.js', img: '' },
    { name: 'Next.js', img: '' },
    { name: 'MySQL', img: '' },
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
                        <div onClick={() => { tec === index ? setTec(-1) : setTec(index) }} style={{ margin: '10px' }}>
                            {tec === index ?
                                <div className={styles.eachTec} key={index} style={{ background: 'rgb(25, 151, 255)' }} onClick={() => setTec(-1)}>{item.name}</div>
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