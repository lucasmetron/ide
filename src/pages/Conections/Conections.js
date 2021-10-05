import React, { useState, useEffect } from "react";
import './Conections.css'
import Footer from "../../components/Footer/Footer";
import Loading from '../../components/Loading/Loading';

const objTeste = [
    { title: 'Geral', date: 'Reunião quinta ás 20h', resp: 'Pr.Ildenor José', url: 'www.google.com.br' },
    { title: 'Geral', date: 'Reunião quinta ás 20h', resp: 'Pr.Ildenor José', url: 'www.google.com.br' },
    { title: 'Geral', date: 'Reunião quinta ás 20h', resp: 'Pr.Ildenor José', url: 'www.google.com.br' },
    { title: 'Geral', date: 'Reunião quinta ás 20h', resp: 'Pr.Ildenor José', url: 'www.google.com.br' },
    { title: 'Geral', date: 'Reunião quinta ás 20h', resp: 'Pr.Ildenor José', url: 'www.google.com.br' },
    { title: 'Geral', date: 'Reunião quinta ás 20h', resp: 'Pr.Ildenor José', url: 'www.google.com.br' },
    { title: 'Geral', date: 'Reunião quinta ás 20h', resp: 'Pr.Ildenor José', url: 'www.google.com.br' },
]

export default function Conections(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(objTeste)
    }, [])


    return (
        <div className='containerConections'>
            <h1 className='titleConections'>COLLEGE</h1>

            <div className='mainConections'>

                {list.length === 0 && typeof list.url === "string" ?
                    <Loading />
                    :
                    <>
                        <p>Nossas conexões acontecem, atualmente, online por videoconferências, em sua maioria, as quinta-feiras às 20h.
                            É nas conexões que nos conectamos para aprendermos mais sobre Jesus e Sua Palavra juntos em comunhão com um pequeno grupo.
                            Participe e  venha pertencer a uma das nossas conexões!<br />
                            Escolha abaixo a que mais se adequa a você:
                        </p>
                        {list.map((item, i) => (
                            <div className='descriptionConection'>
                                <h3>{`Conexão ${i + 1}`}</h3>
                                <p>{item.title}</p>
                                <p>{item.date}</p>
                                <p>{item.resp}</p>
                                <a style={{ textDecoration: 'none' }} href={item.url} target='_blank'><p className='btnConection'>Link da sala</p></a>
                            </div>
                        ))}

                    </>

                }



            </div>


            <Footer />


        </div>
    )
}