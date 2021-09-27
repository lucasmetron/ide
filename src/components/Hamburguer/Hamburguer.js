import React from "react";
import './Hamburguer.css'

export default function Hamburguer(props) {
    return (
        <div className='containerHamburguer'>
            <p>X</p>
            <ul>
                <li>Home</li>
                <li>Quem Somos</li>
                <li>Propósitos</li>
                <li>Declaração de Fé</li>
                <li>Ministérios</li>
                <li>Contatos</li>
            </ul>
        </div>
    )
}