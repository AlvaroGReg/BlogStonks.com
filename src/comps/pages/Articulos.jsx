/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"


export const Articulos = () => {

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    conseguirArticulos()
  }, [])


  const conseguirArticulos = async() => {

    
    const url = "http://localhost:3900/api/articles/"

    fetch(url).then(response =>
      response.json()
    ).then((data) => {
      setArticulos(data.articles)
    })
    

/*      let peticion = await fetch(url, {
      method: "GET"
     })

     let datos = await peticion.json()
     console.log(datos)

     if(datos.status === "succes"){
      setArticulos(datos.articles)
     } */
  }

  return (
    <>
      {
      articulos.length >= 1 ? (
        articulos.map(articulo => {
          return(
            <article 
              key={articulo._id}
              className="articulo-item">
              <div className="mask">
                <img src="./src/assets/crocodile.webp" alt="Cocodrilo" />
              </div>
              <h3 className="title">{articulo.title}</h3>
              <p className="description">{articulo.content}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </article>
          )})): (<h1>No hay articulos</h1>)}
    </>
  )
}
