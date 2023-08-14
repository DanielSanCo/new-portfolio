import { use, useState } from 'react';
import styles from './style.module.css';
import MainTop from '@/components/mainTop'
import linguagens from '@/utils/linguagens';

const Tecnologias = () => {
    const [wid1, setWid1] = useState(250)
    const [wid2, setWid2] = useState(250)
    const [wid3, setWid3] = useState(250)

    const [opacity1, setOpacity1] = useState(1)
    const [opacity2, setOpacity2] = useState(1)
    const [opacity3, setOpacity3] = useState(1)

    const [display1, setDisplay1] = useState('none')
    const [display2, setDisplay2] = useState('none')
    const [display3, setDisplay3] = useState('none')

    const [borderRadius, setBorderRadius] = useState('10px 10px 10px 10px')
    const [borderRadius2, setBorderRadius2] = useState('10px 10px 10px 10px')
    const [borderRadius3, setBorderRadius3] = useState('10px 10px 10px 10px')

    const [spaceHeight, setSpaceHeight] = useState(0)
    const [spaceHeight1, setSpaceHeight1] = useState(0)
    const [spaceHeight2, setSpaceHeight2] = useState(0)
    const [spaceHeight3, setSpaceHeight3] = useState(0)



    const changeWidth = (num: number) => {

        if (num === 1 && wid1 === 250) {
            setWid1(600)
            setSpaceHeight(300)
            setSpaceHeight1(300)
        } else if (num === 1 && wid1 === 600) {
            setWid1(250)
            setSpaceHeight(0)
            setSpaceHeight1(0)
        }

        if (num === 2 && wid2 === 250) {
            setWid2(600)
            setSpaceHeight(300)
            setSpaceHeight2(300)
        } else if (num === 2 && wid2 === 600) {
            setWid2(250)
            setSpaceHeight(0)
            setSpaceHeight2(0)
        }

        if (num === 3 && wid3 === 250) {
            setWid3(600)
            setSpaceHeight(300)
            setSpaceHeight3(300)
        } else if (num === 3 && wid3 === 600) {
            setWid3(250)
            setSpaceHeight(0)
            setSpaceHeight3(0)
        }
    }

    return (
        <div className={styles.main}>
            <MainTop />
            <div className={styles.buttonsArea}>
                <div className={`${styles.button} ${styles.button1}`} style={{ width: wid1, borderRadius: borderRadius }} onClick={() => { changeWidth(1), display1 == 'none' ? setBorderRadius('10px 10px 0 0') : setBorderRadius('10px 10px 10px 10px'), display1 == 'none' ? setDisplay1('flex') : setDisplay1('none') }}>Front End</div>
                <div className={styles.listTec} style={{ display: display1, height: spaceHeight1, width: wid1 }}>
                    {linguagens.map((item, index) => (
                        <>
                            {item.tipo === 'Front End' ?
                                <div className={styles.itemImg} key={index}>
                                    <img src={item.img} alt="" className={styles.img} />
                                    <div>{item.name}</div>
                                </div>
                                :
                                ''
                            }
                        </>
                    ))}
                </div>
                <div className={`${styles.button} ${styles.button2}`} style={{ width: wid2, borderRadius: borderRadius2 }} onClick={() => { changeWidth(2), display2 == 'none' ? setBorderRadius2('10px 10px 0 0') : setBorderRadius2('10px 10px 10px 10px'), display2 == 'none' ? setDisplay2('flex') : setDisplay2('none') }}>FullStack</div>
                <div className={styles.listTec} style={{ display: display2, height: spaceHeight2, width: wid2 }}>
                    {linguagens.map((item, index) => (
                        <div className={styles.itemImg} key={index}>
                            <img src={item.img} alt="" className={styles.img} />
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
                <div className={`${styles.button} ${styles.button3}`} style={{ width: wid3, borderRadius: borderRadius3 }} onClick={() => { changeWidth(3), display3 == 'none' ? setBorderRadius3('10px 10px 0 0') : setBorderRadius3('10px 10px 10px 10px'), display3 == 'none' ? setDisplay3('flex') : setDisplay3('none') }}>Back End</div>
                <div className={styles.listTec} style={{ display: display3, height: spaceHeight3, width: wid3 }}>
                    {linguagens.map((item, index) => (
                        <>
                            {item.tipo === 'Back End' ?
                                <div className={styles.itemImg} key={index}>
                                    <img src={item.img} alt="" className={styles.img} />
                                    <div>{item.name}</div>
                                </div>
                                :
                                ''
                            }
                        </>
                    ))}
                </div>
                <div className={styles.spaceDown} ></div>
            </div>
        </div>
    )
}

export default Tecnologias;