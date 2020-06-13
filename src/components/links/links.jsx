import React from 'react';
import { Link } from 'react-router-dom';


function Links ({link, nombre, clases}){

    return (
        <Link to={link} className={clases}>{nombre}</Link>
    );
}


export default Links;