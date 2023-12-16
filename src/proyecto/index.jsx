import FormularioProductos from "./FormularioProductos";
import ListaProductos from "./ListaProductos";

function index() {
    return (
        <div>
            <div>
                <h1>Cargar laptop</h1>
            <FormularioProductos></FormularioProductos>    
            </div>
           
            <div>
                <h1>Catalogo de Laptos</h1>
                <ListaProductos></ListaProductos>
            </div>
        </div>
    )
}

export default index;