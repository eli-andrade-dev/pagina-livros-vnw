import Logo from '../../assets/logo.png'
import Busca from '../../assets/search.png'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../Pages/Inicio/inicio'
import QueroDoar from '../../Pages/QueroDoar/queroDoar'
import Doados from '../../Pages/Doados/doados'
import S from './header.module.scss' //No sass é necessário importar o estilo como 'S'. Para estilizar é necessáriochamar com 'S'dentro de chaves.


export default function header() {
    return (
        <BrowserRouter>

          <header>
              <section>
                  <img src={Logo} alt="" />
                  <h1>Livros Vai na Web</h1>
              </section>
              <nav className={S.boxmenu}>
                  <ul>
                      <li><Link to= "/">início</Link></li>
                      <li><Link to="livros">livros doados</Link></li>
                      <li><Link to="/doar">quero doar</Link></li>
                  </ul>
              </nav>

              <div className={S.busca}>  
              <input className={S.boxInput} type="text" placeholder="O que você procura?" />
              <img src={Busca} alt="" />
              </div>
          </header>

          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/livros" element={<Doados/>}/>
            <Route path="/doar" element={<QueroDoar/>}/>
          </Routes>

        </BrowserRouter>
    )
    
}