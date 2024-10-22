/* eslint-disable no-unused-vars */
import React from "react";
import "./product.scss";
import Boton from "../Buttons/Contador"

const productos = [
  { id: 1, imagen: "/assets/images/image-waffle-desktop.jpg",  tipo: "Wafle", nombre: "Waffle with Berries", precio: 6.50 },
  { id: 2, imagen: "/assets/images/image-creme-brulee-desktop.jpg", tipo: "Créme Brúlee", nombre: "Vanilla Bean Créme Brulée",precio: 7.00},
  { id: 3, imagen: "/assets/images/image-macaron-desktop.jpg", tipo: "Macaron", nombre: "Macaron Mix Five", precio: 8.00 },
  { id: 4, imagen: "/assets/images/image-tiramisu-desktop.jpg", tipo: "Tirasimu", nombre: "Classic Tiramisu", precio: 5.50 },
  { id: 5, imagen: "/assets/images/image-baklava-desktop.jpg", tipo: "Baklava", nombre: "Pistachio Baklava", precio: 4.00 },
  { id: 6, imagen: "/assets/images/image-meringue-desktop.jpg", tipo: "Pie", nombre: "Lemon Meringue Pie", precio: 5.00 },
  { id: 7, imagen: "/assets/images/image-cake-desktop.jpg", tipo: "Cake", nombre: "Red Velvet", precio: 4.50 },
  { id: 8, imagen: "/assets/images/image-brownie-desktop.jpg", tipo: "Brownie", nombre: "Salted Caramel Brownie", precio: 5.50 },
  { id: 9, imagen: "/assets/images/image-panna-cotta-desktop.jpg", tipo: "Panna Corta", nombre: "Vanilla Panna Cotta", precio: 6.50 },
];

function listaProductos() {
  return (
    <>
      <h1 className='mainTitle'>Desserts</h1>
      <ul className="Product-list-grid">
        {productos.map((producto) => (
          <li key={producto.id} className="Product-list">
            <div className="image-container">
            <img src={producto.imagen} alt={producto.nombre} className="Product-image" />
            <div className="boton-cart">
            <Boton/>
            </div>
            </div>
            <span className="Tipos">{producto.tipo}</span>
            <span className="Nombres">{producto.nombre}</span>
            <span className="Precio">Precio: ${producto.precio.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default listaProductos;
