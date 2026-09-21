

export default function Categorias({categoria}) {
   
  const  {icono, nombre}= categoria

  return (
    <div className="flex min-h-[39px] items-center gap-2 border-b w-full py-1 
    hover:bg-amber-400 cursor-pointer">
      <img
        alt="Imagen Icono"
        src={`/img/icono_${icono}.svg`}
        className="w-8"
        />
        <p className="text-[11px] font-bold cursor-pointer truncate">{nombre}</p>
    </div>
  )
}
