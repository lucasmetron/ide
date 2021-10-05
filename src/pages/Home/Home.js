import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import programacao from '../../assets/images/inciatialScreen/programacao.svg'
import celebracoes from '../../assets/images/inciatialScreen/celebracoes.svg'
import conexoes from '../../assets/images/inciatialScreen/conexoes.svg'
import college from '../../assets/images/inciatialScreen/college.svg'
import orePorMim from '../../assets/images/inciatialScreen/orePorMim.svg'
import contribuicao from '../../assets/images/inciatialScreen/contribuicao.svg'
import queroPertencer from '../../assets/images/inciatialScreen/queroPertencer.svg'
import missoes from '../../assets/images/inciatialScreen/missoes.svg'
import Footer from '../../components/Footer/Footer';

export default function Home(props) {
    return (
        <div className='containerHome'>
            <div className='titleHome'>
                <h1>BEM-VINDO À IDEVANGELHO </h1>
            </div>

            <div className='optionsMenu'>
                <div className='divOptionMenu'>
                    <Link to='/programacao'> <img src={programacao} className='IconOptionMenu' /></Link>
                    <p>PROGRAMAÇÃO</p>
                </div>

                <div className='divOptionMenu'>
                    <Link to='/'> <img src={celebracoes} className='IconOptionMenu' /></Link>
                    <p>CELEBRAÇÕES</p>
                </div>

                <div className='divOptionMenu'>
                    <Link to='/'> <img src={conexoes} className='IconOptionMenu' /></Link>
                    <p>CONEXOES</p>
                </div>

                <div className='divOptionMenu'>
                    <Link to='/'> <img src={college} className='IconOptionMenu' /></Link>
                    <p>COLLEGE</p>
                </div>

                <div className='divOptionMenu'>
                    <Link to='/'> <img src={orePorMim} className='IconOptionMenu' /></Link>
                    <p>ORE POR MIM</p>
                </div>

                <div className='divOptionMenu'>
                    <Link to='/'> <img src={contribuicao} className='IconOptionMenu' /></Link>
                    <p>CONTRIBUIÇÃO</p>
                </div>

                <div className='divOptionMenu'>
                    <Link to='/'> <img src={queroPertencer} className='IconOptionMenu' /></Link>
                    <p>QUERO PERTENCER</p>
                </div>

                <div className='divOptionMenu'>
                    <Link to='/'> <img src={missoes} className='IconOptionMenu' /></Link>
                    <p>MISSÕES</p>
                </div>

            </div>

            <Footer />
        </div>
    );
}