import S from '../../Pages/Doados/doados.module.scss'
import Livro from '../../assets/livro.png'

export default function Doados() {
    return (
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>

            <section className={S.boxBooks}> 
                <article>
                    <img src={Livro} alt="" />
                    <h3>Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}