function ListaProductos({ listaProductos, borrar }) {
 
 
    const filas = listaProductos.map(e => {
    return <tr key={e.id}>
        <td>{e.marca}</td>
        <td>{e.modelo}</td>
        <td>{e.ram}</td>
        <td>{e.disco}</td>
        <td>{e.placa}</td>
        <td> $ {e.precio}</td>
        <td>
          <button>Editar</button>
        </td>
        <td>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              borrar(e);
            }}
          >
            Borrar
          </button>
        </td>
      </tr>
    });

  return (
    <table id="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Modelo</th>
          <th>Memoria Ram en GB</th>
          <th>Disco Rigido: Tipo(SSD o HDD), Tamaño y Marca</th>
          <th>Placa de video</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{filas}</tbody>
    </table>
  );
}

export default ListaProductos;
