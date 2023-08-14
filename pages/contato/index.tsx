import { useState } from 'react';
import styles from './style.module.css';

const Contato = () => {

    const [nome, setNome] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.barraLateral}>
                    <div className={styles.proInfo}>
                        <div className={styles.proInfoItem}>
                            <div className={styles.nameImg}>
                                <div className={styles.proInfoTitle}>Contratar</div>
                                <img src="./contato/contrato.png" alt="" className={styles.img} />

                            </div>
                            <div className={styles.proInfoInfo}>Estou disponivel para trabalho, caso o contratante queira marcar um entrevista, é só entrar em contato.</div>
                        </div>
                        <div className={styles.proInfoItem}>
                            <div className={styles.nameImg}>
                                <div className={styles.proInfoTitle}>Sites</div>
                                <img src="./contato/site.png" alt="" className={styles.img} />

                            </div>
                            <div className={styles.proInfoInfo}>Crio sites com design amigavel e profissional, além de serem responsivos, isso é, que podem ser usados em qualquer aparelho.</div>
                        </div>
                        <div className={styles.proInfoItem}>
                            <div className={styles.nameImg}>
                                <div className={styles.proInfoTitle}>Tecnologias</div>
                                <img src="./contato/tec.png" alt="" className={styles.img} />

                            </div>
                            <div className={styles.proInfoInfo}>Trabalho com as tecnologias mais pedidas do mercado, sempre tentando manter-me atualizado com as novidades tecnologicas.</div>
                        </div>
                        <div className={styles.proInfoItem}>
                            <div className={styles.nameImg}>
                                <div className={styles.proInfoTitle}>Free Lancer</div>
                                <img src="./contato/freeLancer.png" alt="" className={styles.img} />

                            </div>
                            <div className={styles.proInfoInfo}>Tenho disponibilidade para realizar trabalhos autonomos na area de desenvolvimento de sistemas.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.contatoArea}>
                    <h2 className={styles.h2}>CONTATE-ME</h2>
                    <div className={styles.inputArea}>
                        <div className={styles.inputTitle}>Nome <span className={styles.span}>* Opcional</span></div>
                        <input type="text" className={styles.input} value={nome} placeholder='Seu nome...' onChange={(e) => setNome(e.target.value)} />
                        <div className={styles.inputTitle}>Empresa <span className={styles.span}>* Opcional</span></div>
                        <input type="text" className={styles.input} value={empresa} placeholder='Empresa...' onChange={(e) => setEmpresa(e.target.value)} />
                        <div className={styles.inputTitle}>Assunto <span className={styles.span}>* Opcional</span></div>
                        <input type="text" className={styles.input} value={assunto} placeholder='Assunto...' onChange={(e) => setAssunto(e.target.value)} />
                        <div className={styles.inputTitle}>Mensagem <span className={styles.span}>* Opcional</span></div>
                        <input type="text" className={styles.input} value={mensagem} placeholder='Mensagem...' onChange={(e) => setMensagem(e.target.value)} />
                        <a href={`mailto:daniel.santos3210@outlook.com?subject=${assunto}&body=Olá eu me chamo ${nome} falo em nome da empresa ${empresa}, ${mensagem}`} className={styles.buttonEnviar}>Contato</a>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.barraLateral}></div>
            </div>
        </div>
    )
}

export default Contato;