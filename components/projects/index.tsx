import { useState } from 'react';
import styles from './style.module.css';

const projetoList = [
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
    { name: 'Nome Projeto' },
]

const ProjetoList = () => {
    const [display, setDisplay] = useState(0);
    const [projeto, setProjeto] = useState(-1)

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
                        <div className={styles.eachProject} onMouseMove={() => { setDisplay(1) }} onMouseLeave={() => setDisplay(0)} key={index}>
                            <div className={styles.eachProjectImg}>
                                <div className={styles.tecName} style={{ opacity: display }}>
                                    <div className={styles.tecs} style={{ opacity: display }}>{item.name}</div>
                                </div>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.projectName}>
                                <div>Tecnologias Figure</div>
                                <div>Categoria</div>
                                <div>{projeto}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProjetoList;