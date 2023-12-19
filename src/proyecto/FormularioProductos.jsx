import { useState } from "react";
var contador = 0;

function FormularioProductos({agregarProducto,editar}) {
  
    

    const productoInicial = {
    id: 0,
    marca: "",
    modelo: "",
    ram: "",
    disco: "",
    placa: "",
    precio: 0.0,
  };


  const [productos, setProductos] = useState(productoInicial);
  
  const handleChange = (evt) => {
    
    evt.preventDefault();
    const nombre = evt.target.name;
    const valor = evt.target.value;
    setProductos({ ...productos, [nombre]: valor,id:contador}); // setea a cada targeta su valor a travez del name

    //esta funcion sirve para cada vez q hay un cambio actualiza la pagina
  };

  const handleGuardar = (evt) =>{
    contador++;
    evt.preventDefault();
    agregarProducto(productos);
    setProductos(productoInicial);
  }

  
  return (
    

    <form action="" id="carga">
      <div>
        <label htmlFor="marca">Marca: </label>
        <input
          type="text"
          id="marca"
          name="marca"
          value={productos.marca}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="modelo">Modelo: </label>
        <input
          type="text"
          id="modelo"
          name="modelo"
          value={productos.modelo}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="ram">Memoria RAM en GB</label>
        <input
          type="text"
          id="ram"
          name="ram"
          value={productos.ram}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="disco">Disco Rigido (tipo, tamaño y marca) :</label>
        <input
          type="text"
          id="disco"
          name="disco"
          value={productos.disco}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="placa">Placa de video:</label>
        <input
          type="text"
          id="placa"
          name="placa"
          value={productos.placa}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="precio">Precio</label>
        <input
          type="text"
          id="precio"
          name="precio"
          value={productos.precio}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleGuardar}>Guardar</button>
    </form>
  );
}

export default FormularioProductos;
