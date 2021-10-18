import React, { useState, useEffect } from "react";
import './College.css'
import Footer from "../../components/Footer/Footer";
import Loading from '../../components/Loading/Loading';

const objTeste = [
    { title: 'Melhor Decisção', modules: ['Quém é Deus?', 'Quem sou eu?', 'Por que estou aqui?'], beginDate: '01/01/2021', endDate: '30/01/2021', hoursCourse: '15h', url: 'www.google.com.br', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
    { title: 'DNA', modules: ['Quém é Deus?', 'Quem sou eu?', 'Por que estou aqui?'], beginDate: '01/01/2021', endDate: '30/01/2021', hoursCourse: '15h', url: 'www.google.com.br', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
    { title: 'Quero Servir', modules: ['Quém é Deus?', 'Quem sou eu?', 'Por que estou aqui?'], beginDate: '01/01/2021', endDate: '30/01/2021', hoursCourse: '15h', url: 'www.google.com.br', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
    { title: 'Cultura da Honra', modules: ['Quém é Deus?', 'Quem sou eu?', 'Por que estou aqui?'], beginDate: '01/01/2021', endDate: '30/01/2021', hoursCourse: '15h', url: 'www.google.com.br', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
    { title: 'Tempo a sós com Deus', modules: ['Quém é Deus?', 'Quem sou eu?', 'Por que estou aqui?'], beginDate: '01/01/2021', endDate: '30/01/2021', hoursCourse: '15h', url: 'www.google.com.br', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
    { title: 'Vida Abençoada', modules: ['Quém é Deus?', 'Quem sou eu?', 'Por que estou aqui?'], beginDate: '01/01/2021', endDate: '30/01/2021', hoursCourse: '15h', url: 'www.google.com.br', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
    ,
]

export default function College(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(objTeste)
    }, [])


    return (
        <div className='containerCollege'>
            <h1 className='titleCollege'>COLLEGE</h1>

            <div className='mainCollege'>

                {list.length === 0 && typeof list.url === "string" ?
                    <Loading />
                    :
                    <>
                        <p>
                            O Evangelho College é o centro de capacitação ministerial da Igreja do Evangelho.
                            A cada ciclo o College oferece vários cursos que tem entre 5 e 6 módulos com aulas on-line ministradas ao vivo através do Google Meet com módulos e questões aplicadas pelo Google Classroom. Encontre um curso e estude com a gente!
                        </p>
                        {list.map((item, i) => (
                            <div className='descriptionCollege'>
                                <h3 style={{ textAlign: 'center' }} >{item.title}</h3>
                                <p>{item.description}</p>
                                <b>Módulos:</b>
                                {item.modules.map((item, i) => (<p>{`${i + 1} - ${item}`}</p>))}
                                <p><b>Ínicio e fim do curso: </b>{`${item.beginDate} á ${item.endDate}`}</p>
                                <p><b>Carga Horária:</b> {item.hoursCourse}</p>
                                <a style={{ textDecoration: 'none' }} href={item.url} target='_blank'><p className='btnCollege'>Quero me inscrever</p></a>
                            </div>
                        ))}

                    </>

                }



            </div>


            <Footer />


        </div>
    )
}