import React from 'react'
import './Header.css'
import logo from '../../assets/images/whiteLogo.svg'
import Hamburguer from '../Hamburguer/Hamburguer';
// import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../Menu/Menu'


export default function Header(props) {
    return (
        <div className='containerHeader'>
            <img src={logo} style={{ width: '50px', zIndex: 50, padding: '6px 8px' }} />
            <Menu />
        </div>
    );
}