import React, { useState, useEffect } from "react";
import './Celebrations.css'
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

const objTeste = [
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-youtube-thumbnail-template-design-7beb6c33baf72b81f4246accf906252c_screen.jpg?ts=1592922309', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-youtube-thumbnail-template-design-ed78d8ed72fd4763927211913ea989c3_screen.jpg?ts=1592504072', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-thumbnail-template-youtube-design-acd3f619ef8bbb7e02d933cbfb3e3128_screen.jpg?ts=1591258964', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-youtube-thumbnail-template-design-93e4a1c53fff4a23b6b75a7dbbd549ab_screen.jpg?ts=1591269057', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-youtube-thumbnail-template-design-1d68bc23861feca22ad0231618dfdda3_screen.jpg?ts=1592567148', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-youtube-thumbnail-template-design-7beb6c33baf72b81f4246accf906252c_screen.jpg?ts=1592922309', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-youtube-thumbnail-template-design-ed78d8ed72fd4763927211913ea989c3_screen.jpg?ts=1592504072', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-thumbnail-template-youtube-design-acd3f619ef8bbb7e02d933cbfb3e3128_screen.jpg?ts=1591258964', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-youtube-thumbnail-template-design-93e4a1c53fff4a23b6b75a7dbbd549ab_screen.jpg?ts=1591269057', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
    { thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church-youtube-thumbnail-template-design-1d68bc23861feca22ad0231618dfdda3_screen.jpg?ts=1592567148', url: 'https://www.youtube.com/c/IgrejadoEvangelho/videos' },
]

export default function Celebration(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(objTeste)
    }, [])


    return (
        <div className='containerCelebration'>
            <h1 className='titleCelebration'>CELEBRAÇÕES</h1>

            {list.length === 0 && typeof list.url === "string" ?
                <Loading />
                :
                <>
                    <div className='mainCelebration'>
                        <p> {list.length === 0 ? 'Não há vídeos dísponiveis :/' : 'Confira nossa programação e fique por dentro das nossas novidades!'}</p>

                        {list.map(item => (
                            <a href={item.url} target='_blank'> <img className='imgCelebration' src={item.thumb} /> </a>
                        ))}

                    </div>


                    <Footer />
                </>

            }

        </div>
    )
}