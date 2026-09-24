import { useQuiosco }from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import logo from "../assets/logo.svg"


export default function Sidebar() {
  const { categorias } = useQuiosco()

  return (
    
    <aside className="md:w-[164px] md:shrink-0">
    <div className="h-[88px]">
      <img
         className="w-[100px]"
         src={logo}
         alt="Imagen Logo"
      />
    
    </div>
     <div>
         {categorias.map( categoria => (
           <Categoria
                key={categoria.id}
                categoria={categoria} />
         ))}
     </div>
      <div className="px-[7px] py-3">
        <button
        type="button"
        className="text-center bg-red-500 w-full py-2 text-[10px] font-bold text-white
        truncate"
        >
        Cancelar Orden
        </button>

      </div>
    </aside>
  )
}
