# Conceptos del proyecto, con ejemplos

## 1. No todo se llama contexto

| Término | Qué es | En el proyecto |
| --- | --- | --- |
| React | Biblioteca para construir interfaces con componentes. | Sí. |
| Componente | Función que devuelve una descripción de la interfaz en JSX. | `Producto`, `Inicio`, `Sidebar`. |
| Prop | Dato que un padre entrega a un componente hijo. | `producto`, `categoria`. |
| Estado o state | Dato que React conserva entre renderizados y cuya actualización puede cambiar la pantalla. | `categoriaActual`, `modal`. |
| Hook | Función de React, o construida sobre sus hooks, que permite usar capacidades de React. | `useState`, `useContext`, `useQuiosco`. |
| Context | Mecanismo para compartir un valor con componentes descendientes. | `QuioscoContext`. |
| Provider | Componente que suministra ese valor al árbol que contiene. | `QuioscoProvider`. |
| Effect | Sincronización de un componente con algo externo. | No hay `useEffect` en el código revisado. |
| Query | Consulta de datos; su significado depende de la herramienta. | Se usa `filter` local; no hay `useQuery`. |
| Modal | Ventana que se muestra sobre la interfaz principal. | Está el estado, falta renderizar la ventana. |

## 2. JavaScript y JSX

**JavaScript** es el lenguaje del frontend. **JSX** es una sintaxis que permite escribir etiquetas dentro de JavaScript. Vite transforma ese JSX para que el navegador pueda ejecutar la aplicación.

```jsx
const nombre = 'Café'
return <h1>{nombre}</h1>
```

`const` declara una variable que no puede reasignarse. `nombre` contiene una cadena. `return` devuelve el resultado de la función. `<h1>` describe un título. `{nombre}` inserta el valor de JavaScript en JSX.

Las llaves tienen funciones distintas según dónde estén: bloque de función, objeto, desestructuración o expresión dentro de JSX.

```jsx
const producto = { nombre: 'Café', precio: 59.9 }
const { nombre, precio } = producto
```

La primera línea crea un **objeto** con propiedades. La segunda **desestructura** el objeto: crea variables a partir de sus propiedades. No inventa campos nuevos. Si una propiedad no existe, obtienes `undefined`.

Un **array** es una lista: `[producto1, producto2]`. Sus índices empiezan en cero; `categoriasDB[0]` obtiene la primera categoría.

## 3. Props: datos del padre al hijo

En `Inicio.jsx`:

```jsx
<Producto producto={producto} />
```

A la izquierda, `producto` es el nombre de la prop. Dentro de las llaves está el objeto que se entrega. En el hijo:

```jsx
export default function Producto({ producto }) {
  const { nombre, imagen, precio } = producto
}
```

El hijo recibe la prop y extrae los datos que necesita. Las props deben tratarse como solo lectura: para cambiar datos compartidos se llama a una función que actualiza el estado del propietario.

`key` es especial: ayuda a React a identificar elementos de una lista; no llega como una prop normal. `key={categoria.id}` no declara una variable `id` dentro de `Categoria`. Por eso también se pasa `categoria={categoria}`.

`children` es la prop que contiene lo escrito entre la apertura y el cierre de un componente:

```jsx
<QuioscoProvider>
  <RouterProvider router={router} />
</QuioscoProvider>
```

Aquí `children` representa el `RouterProvider`.

## 4. useState: recordar datos y actualizar la interfaz

Código real del proveedor:

```jsx
const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0])
const [modal, setModal] = useState(false)
```

`useState` devuelve dos elementos: el valor actual y una función para solicitar su actualización. Los corchetes desestructuran ese par.

- `categoriaActual`: objeto de la categoría seleccionada.
- `setCategoriaActual`: función que cambia ese estado.
- `categoriasDB[0]`: valor inicial al montar el proveedor.
- `modal`: booleano, `true` o `false`.
- `setModal`: función que actualiza el booleano.

```jsx
setCategoriaActual(categorias.find(categoria => categoria.id === id))
```

Busca la categoría y solicita que React vuelva a renderizar usando ese objeto. Un `console.log(id)` solo imprime: no cambia el estado.

Actualizar estado no cambia de inmediato la variable que ya leíste durante ese render. React procesa la actualización para un render posterior. No hace falta agregar un retraso para actualizar el título.

El código actual alterna el modal con `setModal(!modal)`. Otra forma, útil cuando el nuevo valor depende del anterior, es:

```jsx
setModal(anterior => !anterior)
```

Este último bloque es una explicación, no un cambio aplicado por esta documentación.

El estado actual está en memoria: al recargar se reinicia. No se guarda automáticamente en una base de datos ni en `localStorage`.

## 5. useContext y createContext: compartir datos

```jsx
const QuioscoContext = createContext()
```

Crea el contexto. Por sí solo no contiene una base de datos ni hace peticiones.

```jsx
<QuioscoContext.Provider value={{ categoriaActual, handleClickCategoria }}>
  {children}
</QuioscoContext.Provider>
```

`value` es el valor compartido. La llave exterior permite una expresión JSX; las interiores crean un objeto. `{ categoriaActual }` dentro de un objeto equivale a `{ categoriaActual: categoriaActual }`.

Un descendiente obtiene ese valor con:

```jsx
const contexto = useContext(QuioscoContext)
```

El proveedor más cercano por encima del componente determina el valor que recibe. En esta aplicación `main.jsx` coloca el proveedor alrededor del router.

El contexto no sustituye al estado: `useState` conserva el dato y el contexto lo distribuye. Tampoco equivale al proveedor de servicios PHP de Laravel, que tiene otra función.

## 6. useQuiosco: hook personalizado

```jsx
export const useQuiosco = () => {
  return useContext(QuioscoContext)
}
```

Agrupa la lectura del contexto para no repetir los mismos imports y la llamada en cada componente.

```jsx
const { handleClickModal } = useQuiosco()
```

Obtiene una propiedad del objeto compartido. `const {} = useQuiosco()` no extrae ninguna propiedad: esa era la causa del error en `Producto.jsx`.

Los hooks se llaman en el nivel superior de componentes o de otros hooks, antes de retornos condicionales; no dentro de un `if`, bucle o manejador de clic. Así React mantiene el orden de las llamadas.

## 7. useEffect: sincronizar con algo externo

**No se utiliza todavía en los archivos revisados.** Este ejemplo es didáctico:

```jsx
import { useEffect } from 'react'

useEffect(() => {
  document.title = categoriaActual.nombre
}, [categoriaActual.nombre])
```

La función es el efecto. Se ejecuta después de que React confirma el render cuando corresponde. La lista de dependencias indica los valores de los que depende: aquí, el nombre de la categoría.

| Dependencias | Cuándo vuelve a ejecutarse el efecto |
| --- | --- |
| Sin segundo argumento | Después de cada render confirmado. |
| `[]` | Al montar; en desarrollo con StrictMode puede haber un ciclo adicional de comprobación. |
| `[categoriaActual.nombre]` | Al montar y cuando cambia esa dependencia. |

Un efecto puede devolver una función de **limpieza** para quitar suscripciones o cancelar trabajo pendiente. React ejecuta la limpieza antes de repetir el efecto con nuevas dependencias y al desmontar.

No necesitas `useEffect` para calcular los productos filtrados. Esto ya basta dentro del componente:

```jsx
const productos = data.filter(
  producto => producto.categoria_id === categoriaActual.id
)
```

No confundas efecto con evento: el clic es un evento del usuario; `useEffect` sincroniza con un sistema externo. No pongas un `setState` sin control en un efecto que se repite por ese mismo cambio: puedes causar un bucle.

## 8. Query, useQuery, fetch y SQL

**Query** significa consulta. No es necesariamente un hook ni un contexto.

| Forma | Qué consulta | Situación actual |
| --- | --- | --- |
| `data.filter(...)` | Un array que ya está en memoria. | Se usa en `Inicio`. |
| `fetch('/api/productos')` | Un recurso HTTP de un servidor. | Ejemplo futuro; esa ruta no está implementada en el backend revisado. |
| `useQuery(...)` | Datos administrados por una biblioteca de consultas. | No está instalado TanStack Query ni hay llamadas a `useQuery` en el código revisado. |
| SQL `SELECT ...` | Tablas de una base de datos. | Los productos actuales no vienen de una tabla. |
| Query string `?categoria=2` | Parámetros de la URL. | No controla el filtro actual. |

`useQuery` no pertenece a React básico. En bibliotecas como TanStack Query suele coordinar la consulta, su caché y estados como carga y error. Requiere instalar y configurar la biblioteca; aquí no basta con escribir el nombre de la función.

`fetch` devuelve una **promesa**, un resultado que estará disponible más adelante. `async` define una función asíncrona y `await` espera una promesa dentro de ella. Una API es una interfaz para intercambiar datos; HTTP es el protocolo y JSON es un formato frecuente de respuesta.

El catálogo actual funciona sin esa consulta remota porque importa `productos.js`. Para conectarlo a Laravel harían falta rutas, datos persistidos y manejo de carga y errores, entre otras piezas.

## 9. Otros hooks que conviene distinguir

Estos hooks no aparecen en el código actual; se incluyen para reconocer sus nombres.

| Hook | Para qué sirve |
| --- | --- |
| `useRef` | Conserva una referencia entre renders; cambiar `.current` no provoca un render. Puede apuntar a un elemento del DOM. |
| `useMemo` | Conserva el resultado de un cálculo mientras sus dependencias no cambien; es una optimización, no un requisito para filtrar 59 productos. |
| `useCallback` | Conserva una referencia a una función mientras sus dependencias no cambien. |
| `useReducer` | Maneja estado mediante acciones y una función reductora; útil cuando hay varias transiciones relacionadas. |

## 10. find, filter y map

```jsx
categorias.find(categoria => categoria.id === id)
```

`find` devuelve el primer objeto que coincide, o `undefined`. El proveedor asume que el ID recibido existe; hoy los botones entregan IDs del propio catálogo.

```jsx
data.filter(producto => producto.categoria_id === categoriaActual.id)
```

`filter` devuelve un nuevo array con todas las coincidencias; si no hay, devuelve `[]`.

```jsx
productos.map(producto => <Producto key={producto.imagen} producto={producto} />)
```

`map` transforma cada elemento; aquí convierte datos en elementos React. No filtra. El array original no se modifica por usar estos métodos de esta forma.

`producto => ...` es una función flecha. `producto` es un parámetro que representa el elemento de cada iteración. `===` compara sin convertir automáticamente entre tipos: `2` y `'2'` son distintos.

## 11. Eventos, callbacks y botones

```jsx
onClick={() => handleClickCategoria(id)}
```

`onClick` recibe una función. La flecha crea un **callback** que se ejecutará cuando ocurra el clic. Dentro se llama al manejador con el ID.

```jsx
onClick={handleClickCategoria(id)}
```

Esta segunda forma ejecuta la función durante el render y pasa su resultado como manejador; era uno de los problemas que revisamos.

`type="button"` evita que el botón actúe como botón de envío si se encuentra dentro de un formulario. `type="submit"` sí envía un formulario.

`cursor-pointer` cambia el dibujo del cursor, pero no instala un evento. `hover:bg-amber-400` cambia el color al pasar el puntero, pero no actualiza el estado seleccionado.

## 12. Modal

Un modal es una ventana que aparece por encima de la página para una interacción concreta, por ejemplo elegir cantidad de un producto. Hay que distinguir:

- El estado de visibilidad: `modal`.
- La función que lo cambia: `handleClickModal`.
- El componente visual que dibuja la ventana: todavía no está usado en `Layout`.
- El producto seleccionado: todavía no hay un estado para él en el proveedor revisado.

El botón «Agregar» actualmente alterna el booleano. No añade un producto a un pedido ni calcula un total. Cuando se implemente la ventana, también será necesario controlar cierre, foco de teclado y un nombre accesible.

## 13. Imports, exports, alias y módulos

```jsx
export const useQuiosco = ...
import { useQuiosco } from '../hooks/useQuiosco'
```

Una exportación **nombrada** se importa con llaves y su nombre exacto.

```jsx
export default QuioscoContext
import QuioscoContext from '../context/QuioscoProvider'
```

Una exportación **predeterminada** se importa sin llaves. El nombre local puede ser distinto: `Categoria.jsx` exporta una función llamada `Categorias`, pero `Sidebar` la importa como `Categoria`; eso es válido.

```jsx
import { productos as data } from '../data/productos'
```

`as` crea un alias local: `data` es la lista completa; `productos` dentro de `Inicio` es la lista filtrada. No duplica los datos ni conecta una base de datos.

`./` indica la carpeta actual; `../`, la carpeta superior. Un paquete como `'react'` se resuelve desde las dependencias, no desde una carpeta relativa.

## 14. Backticks, operadores y valores

```jsx
const resaltar = categoriaActual?.id === id ? 'bg-amber-400' : 'bg-white'
<div className={`${resaltar} flex items-center`} />
```

Los backticks son `` ` ``; el acento `´` no los sustituye. Permiten cadenas con `${expresion}` y saltos de línea. `${resaltar}` inserta una variable; `${resaltarCategoriaActual()}` necesitaría una función declarada con ese nombre.

`?.` es encadenamiento opcional: si `categoriaActual` es `null` o `undefined`, esa lectura devuelve `undefined` en lugar de fallar. No protege otras lecturas como `categoriaActual.nombre` si ellas no lo usan.

`condicion ? A : B` es el operador ternario: elige A cuando la condición es verdadera y B cuando es falsa. `!modal` invierte el booleano. `undefined` indica ausencia de un valor definido; `null` representa una ausencia explícita. `false` es un booleano válido, no necesariamente un error.

## 15. Rutas, layouts, DOM y render

**DOM** es la estructura de elementos que el navegador mantiene. **Renderizar** es calcular qué interfaz corresponde a los datos actuales. **Montar** es incorporar un componente al árbol; **desmontar**, retirarlo.

`createRoot` conecta React al elemento HTML `root`. `StrictMode` activa comprobaciones de desarrollo; puede provocar ejecuciones adicionales para detectar problemas. No explica por sí solo cualquier evento duplicado ni se debe quitar para ocultar errores.

`createBrowserRouter` declara rutas del navegador. `RouterProvider` las activa. `Layout` es una estructura común. `Outlet` marca dónde se muestra la ruta hija. `Link` navega por el router. Un fragmento `<>...</>` agrupa elementos sin agregar un contenedor HTML extra.

Las rutas del frontend son `/`, `/auth/login` y `/auth/registro`. Las rutas PHP del backend son otro sistema: una dirección del router React no crea un endpoint de Laravel.

## 16. Estilos y herramientas

**CSS** define apariencia. **Tailwind** aporta clases pequeñas que se combinan. **Vite** sirve y compila el frontend. **HMR** es la actualización de módulos durante desarrollo. **ESLint** analiza problemas estáticos; compilar con Vite no equivale a pasar todas sus reglas.

| Clase | Efecto |
| --- | --- |
| `flex`, `grid` | Distribución flexible o en cuadrícula. |
| `items-center`, `gap-4` | Alineación transversal y separación. |
| `w-full`, `w-8` | Ancho completo o 2 rem en la escala predeterminada. |
| `p-3`, `px-5`, `py-1` | Espacio interior general, horizontal o vertical. |
| `mt-5`, `my-10` | Margen superior o vertical. |
| `text-lg`, `text-4xl` | Tamaños de letra. |
| `font-bold`, `font-black` | Grosor de letra. |
| `bg-white`, `bg-amber-400` | Colores de fondo. |
| `hover:bg-amber-400` | Fondo al pasar el puntero. |
| `md:grid-cols-2`, `xl:grid-cols-3` | Columnas desde los puntos de cambio indicados. |
| `truncate` | Recorta texto en una línea con puntos suspensivos. |
| `h-screen`, `overflow-scroll` | Alto del viewport y desbordamiento con scroll. |
| `w-[100px]` | Valor personalizado de ancho. |

Con la configuración revisada de Tailwind 3, `md` corresponde a 768 px y `xl` a 1280 px. En los formularios aparece `w- full`, que son dos tokens y no equivale a `w-full`. `p-19` no está en la escala predeterminada usada por el frontend.

## 17. Vocabulario de Laravel

**PHP**: lenguaje del backend. **Laravel**: framework PHP. **Composer**: gestor de dependencias PHP. **Artisan**: consola de comandos de Laravel. **Eloquent**: herramienta para trabajar con registros mediante modelos. **Modelo**: clase que representa datos persistidos. **Migración**: código que define cambios del esquema de tablas. **Seeder**: código que inserta datos iniciales. **Factory**: genera registros de prueba. **Middleware**: procesamiento alrededor de una petición. **Controlador**: organiza la respuesta a acciones o peticiones. **Blade**: plantillas de Laravel. **Provider de servicios**: registra e inicia servicios del backend; no es el Context Provider de React.

**Sesión** conserva información entre peticiones; **caché** almacena resultados temporalmente; **cola** procesa trabajos; **log** registra eventos. **Docker Compose** define varios servicios y su comunicación. Un **puerto** identifica un servicio de red; una **variable de entorno** configura la aplicación sin escribir el valor directamente en su código.
