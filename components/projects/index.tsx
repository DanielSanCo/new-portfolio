import { useState } from 'react';
import styles from './style.module.css';
import projetoList from '@/utils/projects';

const catelist = [
    { name: 'Todas', setname: 'Categorias' },
    { name: 'Blog', setname: 'Blog' },
    { name: 'Portfolio', setname: 'Portfolio' },
    { name: 'E-commerce', setname: 'E-commerce' },
    { name: 'Site', setname: 'Site' }
]
const teclist = [
    { name: 'Todas', setname: 'Tecnologias', img: 'https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-logotipo-de-aneis-de-alta-tecnologia.png' },
    { name: 'HTML5', setname: 'HTML5', img: './linguagens/html.png' },
    { name: 'CSS3', setname: 'CSS3', img: './linguagens/css.png' },
    { name: 'JavaScript', setname: 'Javascript', img: './linguagens/javascript.png' },
    { name: 'React.js', setname: 'React.js', img: './linguagens/react.png' },
    { name: 'Next.js', setname: 'Next.js', img: './linguagens/next.png' },
    { name: 'Nest.js', setname: 'Nest.js', img: './linguagens/nest.png' },
]

const ProjetoList = () => {
    const [display, setDisplay] = useState(0);
    const [projeto, setProjeto] = useState(-1);
    const [id, setId] = useState(-1);
    const [idd, setIdd] = useState(0)
    const [categoria, setCategoria] = useState('Categorias');
    const [tecnologia, setTecnologia] = useState('Tecnologias');

    const [visu, setVisu] = useState('none');
    const [visu2, setVisu2] = useState('none');

    const [radius, setRadius] = useState('5px');
    const [radius2, setRadius2] = useState('5px');

    const showName = (i: number) => {
        setDisplay(1)
        setId(i)
    }

    const changeVisu = () => {
        { visu === 'none' ? setVisu('flex') : setVisu('none') }
        { radius === '5px' ? setRadius('10px 10px 0px 0px') : setRadius('5px') }
    }
    const changeVisu2 = () => {
        { visu2 === 'none' ? setVisu2('flex') : setVisu2('none') }
        { radius2 === '5px' ? setRadius2('10px 10px 0px 0px') : setRadius2('5px') }
    }

    return (
        <div className={styles.main}>
            <div className={styles.projetoListTop}>
                <div className={styles.filterArea}>
                    <div>
                        <div className={styles.categorieFilter} onClick={() => changeVisu()} style={{ borderRadius: radius }}>{categoria}</div>
                        <div className={styles.listaCate} style={{ display: visu }} onClick={() => changeVisu()}>
                            {catelist.map((item, index) => (
                                <div className={styles.eachCate} key={index} onClick={() => setCategoria(item.setname)}>{item.name}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={styles.categorieFilter} onClick={() => changeVisu2()} style={{ borderRadius: radius2 }}>
                            <div className={styles.eachTecList}>
                                <img src={teclist[idd].img} alt="" className={styles.imgTec} />
                                <div>{tecnologia}</div>
                            </div>
                        </div>
                        <div className={styles.listaCate} style={{ display: visu2 }} onClick={() => changeVisu2()}>
                            {teclist.map((item, index) => (
                                <div className={styles.eachCate} onClick={() => { setTecnologia(item.setname), setIdd(index) }}>
                                    <img src={item.img} alt="" className={styles.imgTec} />
                                    <div key={index} >{item.name}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.projetoList}>
                <div className={styles.projetoArea}>
                    <>
                        {projetoList.map((item, index) => (
                            <>
                                {(item.categoria === categoria || categoria === 'Categorias') && item.tec.find(i => i.name === tecnologia || tecnologia === 'Tecnologias') ?
                                    <>
                                        {index === id ?
                                            <div className={styles.eachProject} onMouseMove={() => showName(index)} onMouseLeave={() => setDisplay(0)} key={index}>
                                                <div className={styles.eachProjectImg} style={{ backgroundImage: `url(${item.img})` }}>
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
                                                <div className={styles.eachProjectImg} style={{ backgroundImage: `url(${item.img})` }}>
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
                                    :
                                    ''
                                }
                            </>
                        ))}
                    </>
                    <>
                        
                    </>
                </div>

            </div>
        </div>
    )
}

export default ProjetoList;