import { useEffect, useState } from "react"
import { Global } from "../../helpers/Global"
import { Peticiones } from "../../helpers/Peticiones"
import { Listado } from "./Listado"

export const Articulos = () => {
	const [articulos, setArticulos] = useState([])
	const [cargando, setCargando] = useState(true)

	useEffect(() => {
		conseguirArticulos()
	}, [])

	const conseguirArticulos = async () => {
		const url = Global.url
		const { datos, cargando } = await Peticiones(url + "articles", "GET")

		if (datos.status === "success") {
			setArticulos(datos.articles)
		}

		setCargando(cargando)
	}

	return (
		<>
			{cargando ?
				( "Cargando...") :
				( articulos.length >= 1 ?
					<Listado
						articulos={articulos}
						setArticulos={setArticulos}
					/> :
					<h1>No hay articulos</h1> )
			}
		</>
	)
}
