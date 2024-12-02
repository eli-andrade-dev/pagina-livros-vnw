import S from '../Footer/footer.module.scss'
import face from '../../assets/face.png'
import twitter from '../../assets/twitt.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/insta.png'

export default function footer(){
   
   <footer>
    
        <section className={S.boxSocial}>
            <h3>4002-8922</h3>

            <nav>
                <a href="#"><img src={face} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={youtube} alt="" /></a>
                <a href="#"><img src={linkedin} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
            </nav>

            <section className={S.boxText}> 
                <p>
                    Layout desenvolvido por Elisangela Andrade para fins educativos.
                </p>
            </section>

            <p>© 2023 - Todos os direitos reservados.</p>

        </section>
   
    </footer>
}