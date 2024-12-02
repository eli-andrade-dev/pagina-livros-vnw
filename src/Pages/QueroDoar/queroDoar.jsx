import S from './queroDoar.module.scss'
import Vetor from '../../assets/querodoar.png'

export default function QueroDoar() {
    return (
       <section>

            <section className={S.principal}>

                  <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
           
                <form action="" className={S.forms}>
             
               
                   <div>
                     <img src={Vetor} alt="" />
                     <h3>Informações do livro</h3>
                   </div>

                    <label htmlFor="livro"></label>
                    <input type="text" id="livro" placeholder='Título' name="livro" required />

                    <label htmlFor="genero"></label>
                    <input type="text" id="genero" placeholder='Gênero' name="genero" required />

                    <label htmlFor="autor"></label>
                    <input type="text" id="autor" placeholder='Autor' name="autor" required />

                    <label htmlFor=""></label>
                    <input type="" id='' placeholder= 'Link da imagem' value="" />
                              
                    <label htmlFor='submit'></label>                
                    <input className={S.doar} type="submit" id='submit' value="Doar" />

                </form>

            </section>

       </section>
    )
}