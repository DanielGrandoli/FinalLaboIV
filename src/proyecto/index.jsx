import { useState } from "react";
import FormularioProductos from "./FormularioProductos";
import ListaProductos from "./ListaProductos";

function index() {

    const [listaProductos,setListaProductos] = useState([]);

    const agregarProductos=(unProd)=>{
        setListaProductos([...listaProductos,unProd]);
    }


    const borrarProducto = (unProd) => {
        const nuevo = listaProductos.filter(item => item.id !== unProd.id);
        setListaProductos(nuevo);
    }

        const editarProducto = (unProd) =>{
        const nuevo = listaProductos.filter(item => item.id === unProd.id);
        setListaProductos(nuevo);
        }

    return (
        <div>
            <div>
                <h1>Cargar laptop</h1>
            <FormularioProductos agregarProducto={agregarProductos} editar={editarProducto}></FormularioProductos>    
            </div>
           
            <div>
                <h1>Catalogo de Laptos</h1>
                <ListaProductos listaProductos={listaProductos} 
                borrar={borrarProducto}></ListaProductos>
            </div>
        </div>
    )
}

export default index;