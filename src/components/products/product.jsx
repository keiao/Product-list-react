/* eslint-disable no-unused-vars */
import React from "react";

const productos = [
    { id: 1, nombre:'Product 1', description: 'texto', precio: 100},
    { id: 2, nombre:'Product 1', description: 'texto', precio: 100},
    { id: 3, nombre:'Product 1', description: 'texto', precio: 100},
    { id: 4, nombre:'Product 1', description: 'texto', precio: 100}
]

function listaProductos() {
    return (
        <>
        <h2>lista de productos</h2>
        <ul>
            {productos.map((producto) =>  (
                <li key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>{producto.description}</p>
                    <p>Precio: ${producto.precio}</p>
                </li>
            ))}
        </ul>
        </>
    )
}


export default listaProductos;