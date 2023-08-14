import { useState } from 'react';
import styles from './style.module.css';
import projetoList from '@/utils/projects';

const ProjetoList = () => {
    const [display, setDisplay] = useState(0);
    const [projeto, setProjeto] = useState(-1)
    const [id, setId] = useState(-1)

    const showName = (i: number) => {
        setDisplay(1)
        setId(i)
    }

    return (
        <div className={styles.main}>
            <div className={styles.projetoListTop}>
                <div className={styles.filterArea}>
                    <div className={styles.categorieFilter}>Categoria</div>
                    <div className={styles.categorieFilter}>Tecnologia</div>
                </div>
            </div>
            <div className={styles.projetoList}>
                <div className={styles.projetoArea}>
                    {projetoList.map((item, index) => (
                        <>
                            {index === id ?
                                <div className={styles.eachProject} onMouseMove={() => showName(index)} onMouseLeave={() => setDisplay(0)} key={index}>
                                    <div className={styles.eachProjectImg} style={{backgroundImage: `url(${item.img})`}}>
                                        <div className={styles.tecName} style={{ opacity: display }}>
                                            <div className={styles.tecs} style={{ opacity: display }}>{item.name}</div>
                                        </div>
                                    </div>
                                    <div className={styles.projectName}>
                                        <div className={styles.tecList}>
                                            {item.tec.map((item, index) => (
                                                <div key={index}>
                                                    <img src={item.img} alt="" className={styles.tecImg} />
                                                </div>
                                            ))}
                                        </div>
                                        <div>{item.categoria}</div>
                                    </div>
                                </div>
                                :
                                <div className={styles.eachProject} onMouseMove={() => showName(index)} onMouseLeave={() => setDisplay(0)} key={index}>
                                    <div className={styles.eachProjectImg}  style={{backgroundImage: `url(${item.img})`}}>
                                    </div>
                                    <div className={styles.projectName}>
                                        <div className={styles.tecList}>
                                            {item.tec.map((item, index) => (
                                                <div key={index}>
                                                    <img src={item.img} alt="" className={styles.tecImg} />
                                                </div>
                                            ))}
                                        </div>
                                        <div>{item.categoria}</div>
                                    </div>
                                </div>
                            }
                        </>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProjetoList;