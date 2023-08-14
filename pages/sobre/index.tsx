import { useState } from 'react';
import styles from './style.module.css';

const estagios = [
    { name: 'SOBRE' },
    { name: 'CARREIRA' },
    { name: 'CURSOS' },
    { name: 'FORMAÇÃO' },
]

const Sobre = () => {

    const [estagio, setEstagio] = useState('SOBRE')
    const [id, setId] = useState(0)
    const [width, setWidth] = useState(120)

    return (
        <div className={styles.main}>
            <div className={styles.initial}>#Sobre o Desenvolvedor</div>
            <div className={styles.aboutContent}>
                <div className={styles.rightSide}>
                    <div className={styles.estagiosList}>
                        {estagios.map((item, index) => (
                            <>
                                {index === id ?
                                    <div className={styles.eachEstagio} key={index} onClick={() => setEstagio(item.name)}>
                                        <div className={styles.line}
                                            style={{ background: `linear-gradient(90deg, rgba(0,0,0,0), rgb(66, 170, 255))`, width: 150 }}
                                        ></div>
                                        <div className={styles.estagio} style={{ color: `rgb(66, 170, 255)` }}>{item.name}</div>
                                    </div>
                                    :
                                    <div className={styles.eachEstagio} key={index} onClick={() => { setEstagio(item.name), setId(index) }}>
                                        <div className={styles.line}
                                            style={{ background: `linear-gradient(90deg, rgba(0,0,0,0), rgb(160, 160, 160))`, width: width }}
                                        ></div>
                                        <div className={styles.estagio}>{item.name}</div>
                                    </div>
                                }
                            </>
                        ))}
                    </div>
                </div>
                <div className={styles.leftSide}>
                    <div className={styles.areaContent}>
                        {estagio === 'SOBRE' ?
                            <>
                                <h1 className={styles.h1}>Sobre</h1>
                                <div className={styles.line2}></div>
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dolorem ea molestiae dolore quia quae in accusamus nesciunt ut error, dignissimos voluptatem fugit deserunt commodi nostrum eius suscipit itaque qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae enim atque dicta at, eos dolorum consequuntur dolor illo eligendi. Nesciunt quia, consectetur ratione numquam officiis accusantium doloremque possimus quas.</div>
                            </>
                            :
                            <>
                                {estagio === 'CARREIRA' ?
                                    <>
                                        <h1 className={styles.h1}>Carreira</h1>
                                        <div className={styles.line2}></div>
                                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentem ea molestiae dolore quia quae in accusamus nesciunt ut error, dignissimos voluptatem fugit deserunt commodi nostrum eius suscipit itaque qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae enim atque dicta at, eos dolorum consequuntur dolor illo eligendi. Nesciunt quia, consectetur ratione numquam officiis accusantium doloremque possimus quas.</div>
                                    </>
                                    :
                                    <>
                                        {estagio === 'CURSOS' ?
                                            <>
                                                <h1 className={styles.h1}>Cursos</h1>
                                                <div className={styles.line2}></div>
                                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dolorem ea molestiae dol nesciunt ut error, dignissimos voluptatem fugit deserunt commodi nostrum eius suscipit itaque qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae enim atque dicta at, eos dolorum consequuntur dolor illo eligendi. Nesciunt quia, consectetur ratione numquam officiis accusantium doloremque possimus quas.</div>
                                            </>
                                            :
                                            <>
                                                {estagio === 'FORMAÇÃO' ?
                                                    <>
                                                        <h1 className={styles.h1}>Formação</h1>
                                                        <div className={styles.line2}></div>
                                                        <div>Lorem ipsum dolor, sit amet consectem ea molestiae dolore quia quae in accusamus nesciunt ut error, dignissimos voluptatem fugit deserunt commodi nostrum eius suscipit itaque qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae enim atque dicta at, eos dolorum consequuntur dolor illo eligendi. Nesciunt quia, consectetur ratione numquam officiis accusantium doloremque possimus quas.</div>
                                                    </>
                                                    :
                                                    ''
                                                }
                                            </>
                                        }
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;