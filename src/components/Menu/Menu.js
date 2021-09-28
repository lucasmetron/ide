import React, { useState } from 'react';
import { Button, Drawer, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    list: {
        fontFamily: 'GrandCru',
        backgroundColor: 'rgb(248, 248, 248, 0.9)',

    },
    btn: {
        color: 'white',
    },
})

export default function Menu() {

    const classes = useStyle();
    const [state, setstate] = useState(false);
    const toggleDrawer = (open) => (event) => {
        setstate(open)
    };

    const list = () => (
        <List onClick={toggleDrawer(false)} className={classes.list}>
            <Link style={{ textDecoration: 'none' }} to='/'> <ListItem button style={{ display: 'flex', justifyContent: 'flex-end', color: '#585858' }}> HOME </ListItem> </Link>
            <Link style={{ textDecoration: 'none' }} to='/quem-somos'> <ListItem button style={{ display: 'flex', justifyContent: 'flex-end', color: '#585858' }} > QUEM SOMOS </ListItem></Link>
            <Link style={{ textDecoration: 'none' }} to='/propositos'> <ListItem button style={{ display: 'flex', justifyContent: 'flex-end', color: '#585858' }}> PROPÓSITOS </ListItem> </Link>
            <Link style={{ textDecoration: 'none' }} to='/declaracao-de-fe'> <ListItem button style={{ display: 'flex', justifyContent: 'flex-end', color: '#585858' }}> DECLARAÇÃO DE FÉ </ListItem> </Link>
            <Link style={{ textDecoration: 'none' }} to='/ministerios'> <ListItem button style={{ display: 'flex', justifyContent: 'flex-end', color: '#585858' }}> MINISTÉRIOS</ListItem> </Link>
            <Link style={{ textDecoration: 'none' }} to='/contatos'><ListItem button style={{ display: 'flex', justifyContent: 'flex-end', color: '#585858' }}> CONTATOS </ListItem> </Link>
        </List>
    )

    return (
        <div>
            <Button onClick={toggleDrawer(true)} > <MenuIcon className={classes.btn} /> </Button>
            <Drawer
                anchor={'top'}
                open={state}
                onClose={toggleDrawer(false)}
                style={{ opacity: '0.9' }}
            >
                {list()}
            </Drawer>
        </div>
    );
}