import S from '../Inicio/inicio.module.scss'
import Imagem1 from '../../assets/imagem1.png'
import Imagem2 from '../../assets/imagem2.png'
import Imagem3 from '../../assets/imagem3.png'
import Imagem4 from '../../assets/imagem4.png'

export default function Inicio(){
    return(


        <section className= {S.post}>

            <section className={S.boxInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={S.boxCards}>

                <h2>Por que devo doar?</h2>

                <section className={S.cardIcon}>
                    <div>
                        <img src={Imagem1} alt="" />
                        <h3> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</h3>
                    </div>
    
                    <div>
                        <img src={Imagem2} alt="" />
                        <h3>Estimula o hábito da leitura e o aprendizado contínuo.</h3>
                    </div>
                
                    <div>
                        <img src={Imagem3} alt="" />
                        <h3>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</h3>
                    </div>

                    <div>
                        <img src={Imagem4} alt="" />
                        <h3>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado</h3>
                    </div>
                </section>

                
            </section>
        </section>
        

        
    )
}

