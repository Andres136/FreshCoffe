
import { useQuiosco } from "../hooks/useQuiosco"
export default function Categorias({categoria}) {
   
  const {handleClickCategoria, categoriaActual} = useQuiosco();
  const  {id,icono, nombre}= categoria
  const resaltar = categoriaActual?.id === id ? 'bg-amber-400' : 'bg-white'

  return (
    <div className={`${resaltar} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
      <img
        alt="Imagen Icono"
        src={`/img/icono_${icono}.svg`}
        className="w-8"
        />
        <button 
        className="text-lg font-bold cursor-pointer truncate"
        type="button"
        onClick={() => handleClickCategoria(id)}

          >{nombre}</button>
    </div>
  )
}
