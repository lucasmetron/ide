import React, { useState } from 'react';
// import { Drawer } from '@material-ui/core';
import { Button, Drawer, List, ListItem } from '@material-ui/core';
// import { List } from '@mui/material/List';
// import { ListItem } from '@mui/material/ListItem';





export default function Menu() {

    const [state, setstate] = useState(false);
    const toggleDrawer = (open) => (event) => {
        setstate(open)
    }

    const list = () => (
        <List>
            <ListItem button> Teste </ListItem>
        </List>
    )

    return (
        <div>
            <Button onClick={toggleDrawer(true)} > Open from top </Button>
            <Drawer
                anchor={'top'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}