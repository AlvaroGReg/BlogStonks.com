/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"


export const Articulos = () => {

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    let data = [{
      _id: 1,
      titulo: "Titulo 1",
      contenido: "Contenido"
    },{
      _id: 2,
      titulo: "Titulo 2",
      contenido: "Contenido"
    },{
      _id: 3,
      titulo: "Titulo 3",
      contenido: "Contenido"
    },{
      _id: 4,
      titulo: "Titulo 4",
      contenido: "Contenido"
    }]

    setArticulos(data)
  }, [])
  return (
    <>
      {articulos.map(articulo => {
        return(
          <article className="articulo-item" key={articulo._id}>
            <div className="mask">
              <img src="./src/assets/crocodile.webp" alt="Cocodrilo" />
            </div>
            <h3 className="title">{articulo.titulo}</h3>
            <p className="description">{articulo.contenido}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>
        )
      })}
    </>
  )
}
