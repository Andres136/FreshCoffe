import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { categorias as categoriasDB } from "../data/categorias"

const QuioscoContext = createContext();
const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
       const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])


const handleClickCategoria = id => {
  console.log(id)
  setCategoriaActual(categorias.find(categoria => categoria.id === id))
}
 
 const handleClickModal = () => {
  setModal(!modal)
 }

 const handleSetProducto = producto => {
  setProducto(producto)
 
 }

 const handleAgregarPedido = ({categoria_id,  ...producto})  => {
 
       if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
          const pedidoActualizado = pedido.map(pedidoState => pedidoState.id ===
            producto.id? producto : pedidoState)
            setPedido(pedidoActualizado)
              toast.success('Guardado correctamente')
            
      
 }else {
  setPedido([...pedido, producto])
  toast.success('Agregado al pedidio')
 }
 
}
const handleEditarCantidad = id => {
  const productoActualizar = pedido.filter(pedidoState => pedidoState.id === id)[0]
  setProducto(productoActualizar)
  setModal(!modal)
}
const handleEliminarProducto = id => {
  const pedidoActualizado = pedido.filter(pedidoState => pedidoState.id !== id)
  setPedido(pedidoActualizado)
  toast.success('Producto eliminado correctamente')
}
  return (
    <QuioscoContext.Provider 
    value={{
       categorias,
       categoriaActual,
       handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProducto,
        total,


    }}
    >{children}
    </QuioscoContext.Provider>
  )
}

export {
    QuioscoProvider
}
export default QuioscoContext
