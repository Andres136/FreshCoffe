import { createContext, useState } from 'react'
import { toast } from 'react-toastify';
import { categorias as categoriasDB } from "../data/categorias"

const QuioscoContext = createContext();
const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);


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

 const handleAgregarPedido = ({categoria_id, imagen, ...producto})  => {
 
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
        handleAgregarPedido

    }}
    >{children}
    </QuioscoContext.Provider>
  )
}

export {
    QuioscoProvider
}
export default QuioscoContext
