import React, { useState } from "react";
import './Hamburguer.css';

export default function Hamburguer(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='containerHamburguer'>

            <ul className='itemsHamburguer'>
                <li>X</li>
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