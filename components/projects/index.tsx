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

const listAreas = [
    { nome: 'Home', img: './projetos/portfolio.png' },
    { nome: 'Home', img: './projetos/portfolio2.png' },
    { nome: 'Home', img: './projetos/portfolio3.png' },
    { nome: 'Home', img: './projetos/portfolio4.png' },
    { nome: 'Home', img: './projetos/portfolio5.png' },
    { nome: 'Home', img: './projetos/portfolio7.png' },
    { nome: 'Home', img: './projetos/portfolio8.png' },
]

const ProjetoList = () => {
    const [display, setDisplay] = useState(0);
    const [projeto, setProjeto] = useState(-1);
    const [id, setId] = useState(-1);
    const [idd, setIdd] = useState(0);
    const [iddd, setIddd] = useState(0);
    const [categoria, setCategoria] = useState('Categorias');
    const [tecnologia, setTecnologia] = useState('Tecnologias');

    const [visu, setVisu] = useState('none');
    const [visu2, setVisu2] = useState('none');
    const [visuali, setVisualizacao] = useState('none')

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


            <div className={styles.main2} style={{ display: visuali }} >
                <div className={styles.center}>
                    <div className={styles.right}>
                        <div className={styles.titleArea}>
                            <div className={styles.title}>{projetoList[iddd].name}</div>
                            <div className={styles.close}>
                                <img src="./close.png" alt="" className={styles.closeImg} onClick={() => setVisualizacao('none')} />
                            </div>
                        </div>
                        <div className={styles.projText}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex mollitia nesciunt quis recusandae corrupti sapiente aspernatur aliquid aperiam, nisi, optio fuga laboriosam commodi officia rem! Eveniet porro blanditiis amet?
                        </div>
                        <div className={styles.date}>{projetoList[iddd].date}</div>
                        <div className={styles.space}></div>
                    </div>
                    <div className={styles.left}>
                        <img src={projetoList[iddd].img} alt="" className={styles.img} />
                        <div className={styles.buttonsArea}>
                            <a href={projetoList[iddd].link}><div className={styles.button}>Acessar</div></a>
                            <a href={projetoList[iddd].github}><div className={styles.button}>Github</div></a>
                            <a href={projetoList[iddd].linkedin}><div className={styles.button}>Linkedin</div></a>
                        </div>
                    </div>
                </div>
            </div>

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
                                            <div className={styles.eachProject} onClick={() => {setVisualizacao('flex'), setIddd(index)}} onMouseMove={() => showName(index)} onMouseLeave={() => setDisplay(0)} key={index}>
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
                                            <div className={styles.eachProject} onClick={() => {setVisualizacao('flex'), setIddd(index)}} onMouseMove={() => showName(index)} onMouseLeave={() => setDisplay(0)} key={index}>
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
                        {projetoList.map((item, index) => (
                            <>
                                {(item.categoria === categoria || categoria === 'Categorias') && item.tec.find(i => i.name === tecnologia || tecnologia === 'Tecnologias') ?
                                    <>
                                        {index === id ?
                                            <div className={styles.eachProject2} onClick={() => {setVisualizacao('flex'), setIddd(index)}}>
                                                <img src={item.img} alt="" className={styles.img} />
                                                <div className={styles.projName}>
                                                    <div className={styles.names}>{item.name}</div>
                                                    <div className={styles.tecs}>
                                                        {item.tec.map((item, index) => (
                                                            <div key={index}>
                                                                <img src={item.img} alt="" className={styles.tecImg2} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className={styles.cateItem}>{item.categoria}</div>
                                                </div>
                                                <div className={styles.border}></div>
                                            </div>
                                            :
                                            <div className={styles.eachProject2} onClick={() => {setVisualizacao('flex'), setIddd(index)}}>
                                                <img src={item.img} alt="" className={styles.img} />
                                                <div className={styles.projName}>
                                                    <div className={styles.names}>{item.name}</div>
                                                    <div className={styles.tecs}>
                                                        {item.tec.map((item, index) => (
                                                            <div key={index}>
                                                                <img src={item.img} alt="" className={styles.tecImg2} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className={styles.cateItem}>{item.categoria}</div>
                                                </div>
                                                <div className={styles.border}></div>
                                            </div>
                                        }
                                    </>
                                    :
                                    ''
                                }
                            </>
                        ))}
                    </>
                </div>

            </div>
        </div>
    )
}

export default ProjetoList;