import React from "react";
import "../hojas-estilo/Album.css"
function Album(props) {
    return (
        <div className='contenedor-album'>
            <img
                className='imagen-album'
                src={require(`../imagenes/album-${props.imagen}.png`)}
                alt="Album de Rozes"
                />
            <div className="contenedor-texto-album">
                <p className="nombre-artista">{props.artista}</p>
                <p className="tipo-artista">{props.tipo}</p>
                <p className="nombre-cancion">{props.cancion}</p>
                <p className="an">{props.an}</p>
                <p className="boton">dance</p>            
            </div>
        </div>
    );
}

export default Album;