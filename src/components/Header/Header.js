import React from 'react'
import './Header.css'
import logo from '../../assets/images/whiteLogo.svg'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

const styleLogo = {
    width: '50px',
    zIndex: 50,
    paddingBottom: '1.1rem',
    paddingTop: '6px',
    paddingLeft: '10px',
    paddingRight: '6px ',
}

export default function Header(props) {
    return (
        <div className='containerHeader'>
            <Link to='/'><img src={logo} style={styleLogo} /></Link>
            <Menu />
        </div>
    );
}