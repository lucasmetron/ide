import React, { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';


export default function Loading(props) {

    return (
        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh', backgroundColor: '#252526', }}>
            <CircularProgress style={{ color: 'white' }} />
        </div>
    );
}