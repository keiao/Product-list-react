/* eslint-disable no-unused-vars */
import React from "react";
import "./product.scss";

const productos = [
  { id: 1,  tipo: "Wafle", nombre: "Waffle with Berries", precio: 6.50 },
  { id: 2, tipo: "Créme Brúlee", nombre: "Vanilla Bean Créme Brulée",precio: 7.00},
  { id: 3, tipo: "Macaron", nombre: "Macaron Mix Five", precio: 8.00 },
  { id: 4, tipo: "Tirasimu", nombre: "Classic Tiramisu", precio: 5.50 },
  { id: 5, tipo: "Baklava", nombre: "Pistachio Baklava", precio: 4.00 },
  { id: 6, tipo: "Pie", nombre: "Lemon Meringue Pie", precio: 5.00 },
  { id: 7, tipo: "Cake", nombre: "Red Velvet", precio: 4.50 },
  { id: 8, tipo: "Brownie", nombre: "Salted Caramel Brownie", precio: 5.50 },
  { id: 9, tipo: "Panna Corta", nombre: "Vanilla Panna Cotta", precio: 6.50 },
];

function listaProductos() {
  return (
    <>
      <ul className="Product-list-grid">
        {productos.map((producto) => (
          <li key={producto.id} className="Product-list">
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
