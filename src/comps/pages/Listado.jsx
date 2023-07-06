/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

export const Listado = ({articulos, setArticulos}) => {
  return (
    articulos.map(articulo => {
        return (
            <article key={articulo._id} className="articulo-item">
                <div className="mask">
                    <img src="./src/assets/crocodile.webp" alt="Cocodrilo" />
                </div>
                <h3 className="title">{articulo.title}</h3>
                <p className="description">{articulo.content}</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
        )
    })
  )
}
