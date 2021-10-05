import React from "react";
import './Schedule.css'
import Footer from "../../components/Footer/Footer";
import foto from '../../assets/fotos/IGREJA.jpg'
import { height } from "@material-ui/system";


export default function Schedule(props) {
    return (
        <div className='containerSchedule'>
            <h1 className='titleSchedule'>PROGRAMAÇÃO</h1>


            <div className='mainSchedule'>
                <p>Confira nossa programação e fique por dentro das nossas novidades!</p>
                <img className='imgSchedule' src={foto} />
            </div>


            <Footer />
        </div>
    )
}