# Frontend explicado línea por línea

Cada tabla conserva el número de línea del archivo revisado. El código es una fotografía, no una segunda implementación. Las líneas vacías y cierres también se incluyen. Los archivos de CSS de plantilla y generado se describen en el documento de estructura.

## frontend/src/main.jsx

[Abrir archivo](../frontend/src/main.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import { StrictMode } from &#x27;react&#x27;</code> | Importa comprobaciones adicionales de React para desarrollo. |
| 2 | <code>import { createRoot } from &#x27;react-dom/client&#x27;</code> | Importa la función que crea la raíz de React en el DOM. |
| 3 | <code>import { RouterProvider } from &#x27;react-router-dom&#x27;</code> | Importa el componente que activa el router. |
| 4 | <code>import { QuioscoProvider } from &#x27;./context/QuioscoProvider&#x27;</code> | Importa el proveedor como exportación nombrada. |
| 5 | <code>import router from &#x27;./router&#x27;</code> | Importa el router configurado. |
| 6 | <code>import &#x27;./index.css&#x27;</code> | Importa los estilos globales y las directivas Tailwind. |
| 7 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 8 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 9 | <code>createRoot(document.getElementById(&#x27;root&#x27;)).render(</code> | Busca el nodo root de index.html, crea una raíz React y empieza a renderizar. |
| 10 | <code>&lt;StrictMode&gt;</code> | Activa StrictMode para sus descendientes. |
| 11 | <code>&lt;QuioscoProvider&gt;</code> | Coloca el proveedor encima del router, de modo que las vistas accedan al contexto. |
| 12 | <code>&lt;RouterProvider router={router} /&gt;</code> | Renderiza el router y le entrega su configuración mediante una prop. |
| 13 | <code>&lt;/QuioscoProvider&gt;</code> | Cierra el proveedor. |
| 14 | <code>&lt;/StrictMode&gt;,</code> | Cierra StrictMode; la coma final es válida. |
| 15 | <code>)</code> | Finaliza la llamada a render. |

## frontend/src/router.jsx

[Abrir archivo](../frontend/src/router.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import {createBrowserRouter} from &quot;react-router-dom&quot;</code> | Importa la creación del router basado en las URLs del navegador. |
| 2 | <code>import Layout from &quot;./layouts/Layout&quot;</code> | Importa el layout del catálogo. |
| 3 | <code>import AuthLayout from &quot;./layouts/AuthLayout&quot;</code> | Importa el layout para acceso y registro. |
| 4 | <code>import Inicio from &quot;./views/Inicio&quot;</code> | Importa Inicio. |
| 5 | <code>import Login from &quot;./views/Login&quot;</code> | Importa Login. |
| 6 | <code>import Registro from &quot;./views/Registro&quot;</code> | Importa Registro. |
| 7 | <code>const router = createBrowserRouter([</code> | Crea el router a partir de un array de objetos de rutas. |
| 8 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 9 | <code>{</code> | Abre un objeto o bloque. |
| 10 | <code>path: &#x27;/&#x27;,</code> | Define la ruta raíz /. |
| 11 | <code>element:&lt;Layout /&gt;,</code> | Asocia la estructura Layout a la ruta raíz. |
| 12 | <code>children: [</code> | Comienza sus rutas hijas. |
| 13 | <code>{</code> | Abre un objeto o bloque. |
| 14 | <code>index: true,</code> | Marca esta hija como vista por defecto de su padre. |
| 15 | <code>element: &lt;Inicio /&gt;</code> | Muestra Inicio en el Outlet del layout. |
| 16 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 17 | <code>]</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 18 | <code>},</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 19 | <code>{</code> | Abre un objeto o bloque. |
| 20 | <code>path: &#x27;/auth&#x27;,</code> | Define la ruta padre /auth. |
| 21 | <code>element: &lt;AuthLayout /&gt;,</code> | Usa AuthLayout para esa rama. |
| 22 | <code>children: [</code> | Comienza las rutas hijas de autenticación. |
| 23 | <code>{</code> | Abre un objeto o bloque. |
| 24 | <code>path: &#x27;/auth/login&#x27;,</code> | Define /auth/login. |
| 25 | <code>element: &lt;Login /&gt;</code> | Muestra Login dentro del Outlet de AuthLayout. |
| 26 | <code>},</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 27 | <code>{</code> | Abre un objeto o bloque. |
| 28 | <code>path: &#x27;/auth/registro&#x27;,</code> | Define /auth/registro. |
| 29 | <code>element: &lt;Registro /&gt;</code> | Muestra Registro dentro del Outlet de AuthLayout. |
| 30 | <code>},</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 31 | <code>]</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 32 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 33 | <code>])</code> | Termina la configuración y la creación del router. |
| 34 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 35 | <code>export default router</code> | Exporta el router por defecto. |

## frontend/src/context/QuioscoProvider.jsx

[Abrir archivo](../frontend/src/context/QuioscoProvider.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import { createContext, useState } from &#x27;react&#x27;</code> | Importa las herramientas de React para crear contexto y conservar estado. |
| 2 | <code>import { categorias as categoriasDB } from &quot;../data/categorias&quot;</code> | Importa las categorías locales con el alias categoriasDB; el nombre no implica una conexión a base de datos. |
| 3 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 4 | <code>const QuioscoContext = createContext();</code> | Crea el canal de contexto; no establece un valor predeterminado explícito. |
| 5 | <code>const QuioscoProvider = ({ children }) =&gt; {</code> | Declara el proveedor y recibe children, los componentes que envolverá. |
| 6 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 7 | <code>const [categorias, setCategorias] = useState(categoriasDB);</code> | Inicializa la lista de categorías y su actualizador. setCategorias no se usa en el código actual. |
| 8 | <code>const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0]);</code> | Inicializa la categoría seleccionada con el primer elemento del catálogo. |
| 9 | <code>const [modal, setModal] = useState(false);</code> | Inicializa la visibilidad del modal en false. |
| 10 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 11 | <code>const handleClickCategoria = id =&gt; {</code> | Declara la función de selección; id es el parámetro recibido al pulsar. |
| 12 | <code>console.log(id)</code> | Imprime el ID para depurar; no cambia la interfaz. |
| 13 | <code>setCategoriaActual(categorias.find(categoria =&gt; categoria.id === id))</code> | Busca la categoría con ese ID y actualiza categoriaActual. Si no existe, find devuelve undefined. |
| 14 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 15 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 16 | <code>const handleClickModal = () =&gt; {</code> | Declara la función que alterna la visibilidad del modal. |
| 17 | <code>setModal(!modal)</code> | Invierte el booleano de este render y solicita actualizar el estado. |
| 18 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 19 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 20 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 21 | <code>&lt;QuioscoContext.Provider</code> | Abre el proveedor del contexto. |
| 22 | <code>value={{</code> | Comienza el objeto que se compartirá mediante la prop value. |
| 23 | <code>categorias,</code> | Expone la lista de categorías. |
| 24 | <code>categoriaActual,</code> | Expone el objeto de la categoría seleccionada. |
| 25 | <code>handleClickCategoria,</code> | Expone la función para cambiar de categoría. |
| 26 | <code>modal,</code> | Expone el booleano modal. |
| 27 | <code>handleClickModal</code> | Expone la función que alterna modal. |
| 28 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 29 | <code>}}</code> | Cierra el objeto compartido y la expresión JSX. |
| 30 | <code>&gt;{children}</code> | Cierra la apertura del proveedor y coloca sus componentes hijos. |
| 31 | <code>&lt;/QuioscoContext.Provider&gt;</code> | Cierra el proveedor. |
| 32 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 33 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 34 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 35 | <code>export {</code> | Comienza la lista de exportaciones nombradas. |
| 36 | <code>QuioscoProvider</code> | Exporta QuioscoProvider como nombre público. |
| 37 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 38 | <code>export default QuioscoContext</code> | Exporta el contexto como exportación predeterminada. |

## frontend/src/hooks/useQuiosco.js

[Abrir archivo](../frontend/src/hooks/useQuiosco.js)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import { useContext } from &quot;react&quot;;</code> | Importa el hook useContext de React. |
| 2 | <code>import QuioscoContext from &quot;../context/QuioscoProvider&quot;;</code> | Importa la exportación predeterminada del archivo del contexto. |
| 3 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 4 | <code>export const useQuiosco = () =&gt; {</code> | Declara y exporta el hook personalizado useQuiosco. |
| 5 | <code>return useContext(QuioscoContext);</code> | Devuelve el value del proveedor de QuioscoContext más cercano por encima. |
| 6 | <code>};</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/src/layouts/Layout.jsx

[Abrir archivo](../frontend/src/layouts/Layout.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import { Outlet } from &quot;react-router-dom&quot;;</code> | Importa Outlet para colocar la vista hija de la ruta. |
| 2 | <code>import Sidebar from &quot;../components/Sidebar&quot;;</code> | Importa la barra lateral. |
| 3 | <code>import Resumen from &quot;../components/Resumen&quot;;</code> | Importa el resumen. |
| 4 | <code>import { useQuiosco } from &quot;../hooks/useQuiosco&quot;;</code> | Importa el acceso al contexto. |
| 5 | <code>export default function Layout() {</code> | Declara el layout principal. |
| 6 | <code>const { modal } = useQuiosco();</code> | Obtiene modal del contexto. |
| 7 | <code>console.log(modal)</code> | Imprime el booleano en cada render del componente; no dibuja una ventana. |
| 8 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 9 | <code>&lt;div className=&quot; md:flex&quot;&gt;</code> | Desde md distribuye los hijos con flex. |
| 10 | <code>&lt;Sidebar /&gt;</code> | Renderiza la barra lateral. |
| 11 | <code>&lt;main className=&quot; flex-1 h-screen overflow-scroll bg-gray-100 p-3&quot;&gt;</code> | Crea la zona principal flexible, del alto de la ventana, con scroll, fondo gris y padding. |
| 12 | <code>&lt;Outlet/&gt;</code> | Aquí se renderiza Inicio al visitar /. |
| 13 | <code>&lt;/main&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 14 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 15 | <code>&lt;Resumen /&gt;</code> | Renderiza el componente Resumen. |
| 16 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 17 | <code>);</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 18 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/src/components/Sidebar.jsx

[Abrir archivo](../frontend/src/components/Sidebar.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import { useQuiosco }from &quot;../hooks/useQuiosco&quot;</code> | Importa el acceso al contexto. |
| 2 | <code>import Categoria from &quot;./Categoria&quot;</code> | Importa el componente de cada categoría. |
| 3 | <code>import logo from &quot;../assets/logo.svg&quot;</code> | Importa el SVG del logo como recurso gestionado por Vite. |
| 4 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 5 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 6 | <code>export default function Sidebar() {</code> | Declara y exporta la barra lateral. |
| 7 | <code>const { categorias } = useQuiosco()</code> | Lee la lista de categorías del contexto. |
| 8 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 9 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 10 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 11 | <code>&lt;aside className=&quot;md:w-[164px] md:shrink-0&quot;&gt;</code> | Abre la barra lateral; desde md fija ancho de 164 px y evita que se encoja. |
| 12 | <code>&lt;div className=&quot;h-[88px]&quot;&gt;</code> | Reserva 88 px de altura para la zona del logo. |
| 13 | <code>&lt;img</code> | Comienza una imagen. |
| 14 | <code>className=&quot;w-[100px]&quot;</code> | Fija el ancho del logo en 100 px. |
| 15 | <code>src={logo}</code> | Usa la URL generada por la importación del logo. |
| 16 | <code>alt=&quot;Imagen Logo&quot;</code> | Texto alternativo para el logo. |
| 17 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 18 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 19 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 20 | <code>&lt;div&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 21 | <code>{categorias.map( categoria =&gt; (</code> | Recorre las categorías y devuelve un componente por cada una. |
| 22 | <code>&lt;Categoria</code> | Abre el componente Categoria. |
| 23 | <code>key={categoria.id}</code> | Asigna el ID como key de React. |
| 24 | <code>categoria={categoria} /&gt;</code> | Entrega la categoría completa y cierra el elemento. |
| 25 | <code>))}</code> | Cierra el recorrido map y la expresión JSX. |
| 26 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 27 | <code>&lt;div className=&quot;px-[7px] py-3&quot;&gt;</code> | Añade espacio alrededor del botón de cancelar. |
| 28 | <code>&lt;button</code> | Comienza un botón interactivo. |
| 29 | <code>type=&quot;button&quot;</code> | Define el tipo de control: email valida formato básico, password oculta visualmente lo escrito, text admite texto, button no envía y submit envía. |
| 30 | <code>className=&quot;text-center bg-red-500 w-full py-2 text-[10px] font-bold text-white</code> | Comienza una cadena de clases para el botón rojo, de ancho completo y letra pequeña. |
| 31 | <code>truncate&quot;</code> | Completa la cadena: truncate recorta el texto si no cabe. |
| 32 | <code>&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 33 | <code>Cancelar Orden</code> | Etiqueta del botón. Actualmente no tiene onClick, así que no cancela una orden. |
| 34 | <code>&lt;/button&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 35 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 36 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 37 | <code>&lt;/aside&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 38 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 39 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/src/components/Categoria.jsx

[Abrir archivo](../frontend/src/components/Categoria.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 2 | <code>import { useQuiosco } from &quot;../hooks/useQuiosco&quot;</code> | Importa el hook personalizado. |
| 3 | <code>export default function Categorias({categoria}) {</code> | Declara la función Categorias y recibe la prop categoria. Es exportación predeterminada: puede importarse como Categoria. |
| 4 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 5 | <code>const {handleClickCategoria, categoriaActual} = useQuiosco();</code> | Obtiene la función de selección y la categoría actual del contexto. |
| 6 | <code>const  {id,icono, nombre}= categoria</code> | Extrae ID, nombre del icono y nombre visible de la prop. |
| 7 | <code>const resaltar = categoriaActual?.id === id ? &#x27;bg-amber-400&#x27; : &#x27;bg-white&#x27;</code> | Calcula el fondo: amarillo si coincide el ID, blanco en otro caso. ?. evita fallar en esta lectura si no hay categoría. |
| 8 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 9 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 10 | <code>&lt;div className={`${resaltar} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}&gt;</code> | Abre la fila con un template literal: inserta resaltar en className. El div actual no tiene onClick. |
| 11 | <code>&lt;img</code> | Comienza una imagen. |
| 12 | <code>alt=&quot;Imagen Icono&quot;</code> | Define el texto alternativo del icono. |
| 13 | <code>src={`/img/icono_${icono}.svg`}</code> | Construye una ruta como /img/icono_cafe.svg a partir del dato icono. |
| 14 | <code>className=&quot;w-8&quot;</code> | Da al icono ancho w-8. |
| 15 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 16 | <code>&lt;button</code> | Comienza un botón interactivo. |
| 17 | <code>className=&quot;text-lg font-bold cursor-pointer truncate&quot;</code> | Da tamaño y peso a la etiqueta del botón y recorta el texto que no cabe. |
| 18 | <code>type=&quot;button&quot;</code> | Define un botón que no envía formularios. |
| 19 | <code>onClick={() =&gt; handleClickCategoria(id)}</code> | Registra una función para ejecutar handleClickCategoria(id) al pulsar el botón. |
| 20 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 21 | <code>&gt;{nombre}&lt;/button&gt;</code> | Muestra nombre y cierra el botón. |
| 22 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 23 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 24 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/src/views/Inicio.jsx

[Abrir archivo](../frontend/src/views/Inicio.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import {productos as data} from &#x27;../data/productos&#x27;</code> | Importa productos con el alias data: conserva la lista completa bajo otro nombre. |
| 2 | <code>import Producto from &#x27;../components/Producto&#x27;</code> | Importa el componente que dibuja una tarjeta de producto. |
| 3 | <code>import { useQuiosco } from &#x27;../hooks/useQuiosco&#x27;</code> | Importa el hook que permite consultar el contexto. |
| 4 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 5 | <code>export default function Inicio() {</code> | Declara y exporta la vista Inicio. |
| 6 | <code>const { categoriaActual } = useQuiosco()</code> | Lee la categoría seleccionada del contexto. |
| 7 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 8 | <code>const productos = data.filter(producto =&gt; producto.categoria_id === categoriaActual.id)</code> | Crea un array con productos cuyo categoria_id coincide con el ID seleccionado. Se recalcula al renderizar. |
| 9 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 10 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 11 | <code>&lt;&gt;</code> | Abre un fragmento React: agrupa elementos sin crear un div adicional. |
| 12 | <code>&lt;h1 className=&#x27;text-4xl font-black&#x27;&gt;{categoriaActual.nombre}&lt;/h1&gt;</code> | Muestra el nombre de la categoría actual en el título. |
| 13 | <code>&lt;p className=&#x27;text-2xl my-10&#x27;&gt;</code> | Texto o continuación de la expresión anterior; completa el contenido del bloque mostrado. |
| 14 | <code>Elige y personaliza tu pedido a continuacion</code> | Texto visible de instrucciones al usuario. |
| 15 | <code>&lt;/p&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 16 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 17 | <code>&lt;div className=&#x27;grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3&#x27;&gt;</code> | Abre una cuadrícula: una columna inicialmente, dos desde md y tres desde xl. |
| 18 | <code>{productos.map(producto =&gt; (</code> | Transforma cada producto filtrado en un elemento React. |
| 19 | <code>&lt;Producto</code> | Comienza una tarjeta Producto. |
| 20 | <code>key={producto.imagen}</code> | Asigna una identidad a la tarjeta para la reconciliación de React; no se entrega como prop normal. |
| 21 | <code>producto={producto}</code> | Entrega el objeto completo mediante la prop producto. |
| 22 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 23 | <code>))}</code> | Cierra la tarjeta por iteración, la llamada map y la expresión JSX. |
| 24 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 25 | <code>&lt;/&gt;</code> | Cierra el fragmento. |
| 26 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 27 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/src/components/Producto.jsx

[Abrir archivo](../frontend/src/components/Producto.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import { formatearDinero } from &#x27;../assets/helpers&#x27;</code> | Importa la función de formato monetario. |
| 2 | <code>import { useQuiosco } from &#x27;../hooks/useQuiosco&#x27;</code> | Importa el hook del contexto. |
| 3 | <code>export default function Producto({ producto }) {</code> | Declara el componente y recibe la prop producto. |
| 4 | <code>const { handleClickModal } = useQuiosco()</code> | Extrae handleClickModal del contexto; sin esta línea el nombre usado en el clic no estaría definido. |
| 5 | <code>const { nombre, imagen, precio } = producto</code> | Extrae nombre, imagen y precio del producto. |
| 6 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 7 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 8 | <code>&lt;div className=&#x27;border p-3  shadow bg-white&#x27;&gt;</code> | Abre la tarjeta con borde, espacio interior, sombra y fondo blanco. |
| 9 | <code>&lt;img</code> | Comienza una imagen. |
| 10 | <code>alt={`Imagen ${nombre}`}</code> | Construye un texto alternativo que incluye el nombre del producto. |
| 11 | <code>className=&#x27;w-full&#x27;</code> | La imagen ocupa el ancho de su contenedor. |
| 12 | <code>src={`/img/${imagen}.jpg`}</code> | Construye la ruta de imagen, por ejemplo /img/cafe_01.jpg. |
| 13 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 14 | <code>&lt;div className=&#x27;p-5&#x27;&gt;</code> | Abre el área de texto con espacio interior. |
| 15 | <code>&lt;h3 className=&#x27;text-2xl font-bold&#x27;&gt;{nombre}&lt;/h3&gt;</code> | Muestra el nombre como título de la tarjeta. |
| 16 | <code>&lt;p className=&quot;mt-5 font-black text-4xl text-amber-500&quot;&gt;{formatearDinero(precio)}&lt;/p&gt;</code> | Formatea el precio como USD y lo muestra en color ámbar. |
| 17 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 18 | <code>&lt;button</code> | Comienza un botón interactivo. |
| 19 | <code>type=&quot;button&quot;</code> | Evita comportamiento de envío de formulario. |
| 20 | <code>className=&quot;bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase&quot;</code> | Define estilos del botón: fondo índigo, texto blanco, ancho completo y mayúsculas visuales. |
| 21 | <code>onClick={() =&gt;{ handleClickModal()</code> | Abre el callback de clic y llama a handleClickModal sin argumentos. No agrega el producto al pedido. |
| 22 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 23 | <code>}}</code> | Cierra el callback y la expresión que asigna onClick. |
| 24 | <code>&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 25 | <code>Agregar</code> | Etiqueta visible del botón. |
| 26 | <code>&lt;/button&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 27 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 28 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 29 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 30 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/src/components/Resumen.jsx

[Abrir archivo](../frontend/src/components/Resumen.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 2 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 3 | <code>export default function Resumen() {</code> | Declara el componente Resumen. |
| 4 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 5 | <code>&lt;div className=&quot;w-72&quot;&gt;</code> | Abre un contenedor de ancho w-72 (18 rem en la escala predeterminada). |
| 6 | <code>Resumen</code> | Muestra solo el texto Resumen; aún no calcula productos ni totales. |
| 7 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 8 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 9 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/eslint.config.js

[Abrir archivo](../frontend/eslint.config.js)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import js from &#x27;@eslint/js&#x27;</code> | Importa reglas recomendadas de JavaScript. |
| 2 | <code>import globals from &#x27;globals&#x27;</code> | Importa listas de variables globales conocidas. |
| 3 | <code>import reactHooks from &#x27;eslint-plugin-react-hooks&#x27;</code> | Importa reglas de hooks de React. |
| 4 | <code>import reactRefresh from &#x27;eslint-plugin-react-refresh&#x27;</code> | Importa reglas relacionadas con React Refresh. |
| 5 | <code>import { defineConfig, globalIgnores } from &#x27;eslint/config&#x27;</code> | Importa helpers de configuración. |
| 6 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 7 | <code>export default defineConfig([</code> | Exporta la lista de configuraciones. |
| 8 | <code>globalIgnores([&#x27;dist&#x27;]),</code> | Excluye dist, que es salida generada. |
| 9 | <code>{</code> | Abre un objeto o bloque. |
| 10 | <code>files: [&#x27;**/*.{js,jsx}&#x27;],</code> | Aplica reglas a archivos .js y .jsx. |
| 11 | <code>extends: [</code> | Comienza configuraciones heredadas. |
| 12 | <code>js.configs.recommended,</code> | Activa reglas recomendadas de JavaScript. |
| 13 | <code>reactHooks.configs.flat.recommended,</code> | Activa reglas recomendadas de hooks. |
| 14 | <code>reactRefresh.configs.vite,</code> | Activa compatibilidad de React Refresh con Vite. |
| 15 | <code>],</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 16 | <code>languageOptions: {</code> | Abre opciones del lenguaje. |
| 17 | <code>globals: globals.browser,</code> | Reconoce variables del navegador como document. |
| 18 | <code>parserOptions: { ecmaFeatures: { jsx: true } },</code> | Permite analizar sintaxis JSX. |
| 19 | <code>},</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 20 | <code>},</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 21 | <code>])</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/index.html

[Abrir archivo](../frontend/index.html)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>&lt;!doctype html&gt;</code> | Declara un documento HTML moderno. |
| 2 | <code>&lt;html lang=&quot;en&quot;&gt;</code> | Abre HTML y declara idioma inglés; la interfaz escrita está en español. |
| 3 | <code>&lt;head&gt;</code> | Abre metadatos. |
| 4 | <code>&lt;meta charset=&quot;UTF-8&quot; /&gt;</code> | Usa codificación UTF-8 para caracteres como tildes. |
| 5 | <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot; href=&quot;/favicon.svg&quot; /&gt;</code> | Carga el favicon desde public/favicon.svg. |
| 6 | <code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</code> | Ajusta el viewport para pantallas móviles. |
| 7 | <code>&lt;title&gt;frontend&lt;/title&gt;</code> | Título de la pestaña: frontend. |
| 8 | <code>&lt;/head&gt;</code> | Cierra metadatos. |
| 9 | <code>&lt;body&gt;</code> | Abre el cuerpo. |
| 10 | <code>&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</code> | Crea el nodo donde main.jsx montará React. |
| 11 | <code>&lt;script type=&quot;module&quot; src=&quot;/src/main.jsx&quot;&gt;&lt;/script&gt;</code> | Carga main.jsx como módulo. |
| 12 | <code>&lt;/body&gt;</code> | Cierra el cuerpo. |
| 13 | <code>&lt;/html&gt;</code> | Cierra HTML. |

## frontend/package.json

[Abrir archivo](../frontend/package.json)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>{</code> | Abre un objeto o bloque. |
| 2 | <code>&quot;name&quot;: &quot;frontend&quot;,</code> | Nombre del paquete. |
| 3 | <code>&quot;private&quot;: true,</code> | Evita su publicación accidental mediante npm cuando es true. |
| 4 | <code>&quot;version&quot;: &quot;0.0.0&quot;,</code> | Versión declarada del proyecto. |
| 5 | <code>&quot;type&quot;: &quot;module&quot;,</code> | Usa módulos ES cuando vale module. |
| 6 | <code>&quot;scripts&quot;: {</code> | Comandos ejecutables con npm run. |
| 7 | <code>&quot;dev&quot;: &quot;vite&quot;,</code> | Arranca Vite en desarrollo. |
| 8 | <code>&quot;build&quot;: &quot;vite build&quot;,</code> | Genera la distribución de producción. |
| 9 | <code>&quot;lint&quot;: &quot;eslint .&quot;,</code> | Ejecuta el análisis ESLint. |
| 10 | <code>&quot;preview&quot;: &quot;vite preview&quot;</code> | Sirve localmente la compilación para revisión. |
| 11 | <code>},</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 12 | <code>&quot;dependencies&quot;: {</code> | Dependencias de la aplicación. |
| 13 | <code>&quot;react&quot;: &quot;^19.2.8&quot;,</code> | Declara la dependencia react y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 14 | <code>&quot;react-dom&quot;: &quot;^19.2.8&quot;,</code> | Declara la dependencia react-dom y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 15 | <code>&quot;react-modal&quot;: &quot;^3.16.3&quot;,</code> | Declara la dependencia react-modal y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 16 | <code>&quot;react-router-dom&quot;: &quot;^7.18.3&quot;</code> | Declara la dependencia react-router-dom y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 17 | <code>},</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 18 | <code>&quot;devDependencies&quot;: {</code> | Herramientas de desarrollo y compilación. |
| 19 | <code>&quot;@eslint/js&quot;: &quot;^10.0.1&quot;,</code> | Declara la dependencia @eslint/js y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 20 | <code>&quot;@types/react&quot;: &quot;^19.2.18&quot;,</code> | Declara la dependencia @types/react y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 21 | <code>&quot;@types/react-dom&quot;: &quot;^19.2.4&quot;,</code> | Declara la dependencia @types/react-dom y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 22 | <code>&quot;@vitejs/plugin-react&quot;: &quot;^6.1.0&quot;,</code> | Declara la dependencia @vitejs/plugin-react y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 23 | <code>&quot;eslint&quot;: &quot;^10.9.0&quot;,</code> | Declara la dependencia eslint y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 24 | <code>&quot;eslint-plugin-react-hooks&quot;: &quot;^7.1.1&quot;,</code> | Declara la dependencia eslint-plugin-react-hooks y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 25 | <code>&quot;eslint-plugin-react-refresh&quot;: &quot;^0.5.4&quot;,</code> | Declara la dependencia eslint-plugin-react-refresh y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 26 | <code>&quot;globals&quot;: &quot;^17.11.0&quot;,</code> | Declara la dependencia globals y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 27 | <code>&quot;tailwindcss&quot;: &quot;^3.4.19&quot;,</code> | Declara la dependencia tailwindcss y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 28 | <code>&quot;vite&quot;: &quot;^8.2.2&quot;</code> | Declara la dependencia vite y su rango de versiones; no demuestra qué versión exacta está instalada.. |
| 29 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 30 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/postcss.config.js

[Abrir archivo](../frontend/postcss.config.js)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import tailwindcss from &#x27;tailwindcss&#x27;</code> | Importa Tailwind como plugin de PostCSS. |
| 2 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 3 | <code>export default {</code> | Exporta un objeto de configuración. |
| 4 | <code>plugins: [tailwindcss()],</code> | Ejecuta Tailwind al procesar CSS. |
| 5 | <code>}</code> | Cierra la configuración. |

## frontend/src/assets/helpers/index.js

[Abrir archivo](../frontend/src/assets/helpers/index.js)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>export const formatearDinero = (cantidad) =&gt; {</code> | Declara y exporta una función que recibe una cantidad numérica. |
| 2 | <code>return cantidad.toLocaleString(&#x27;es-US&#x27;, {</code> | Convierte el número a texto localizado usando es-US y las opciones siguientes. |
| 3 | <code>style: &#x27;currency&#x27;,</code> | Selecciona formato monetario. |
| 4 | <code>currency: &#x27;USD&#x27;,</code> | Usa dólares estadounidenses (USD), no pesos colombianos. |
| 5 | <code>});</code> | Cierra las opciones y devuelve el texto formateado. |
| 6 | <code>};</code> | Cierra la función. |

## frontend/src/data/categorias.js

[Abrir archivo](../frontend/src/data/categorias.js)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>const categorias = [</code> | Declara el array local que contiene los registros del catálogo. |
| 2 | <code>{</code> | Abre el objeto de un registro. |
| 3 | <code>icono: &quot;cafe&quot;,</code> | Nombre base del icono SVG; Categoria añade /img/icono_ y .svg. |
| 4 | <code>nombre: &quot;Café&quot;,</code> | Nombre visible de este registro. |
| 5 | <code>id:1</code> | Identificador numérico de este registro. |
| 6 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 7 | <code>{</code> | Abre el objeto de un registro. |
| 8 | <code>icono: &quot;hamburguesa&quot;,</code> | Nombre base del icono SVG; Categoria añade /img/icono_ y .svg. |
| 9 | <code>nombre: &quot;Hamburguesas&quot;,</code> | Nombre visible de este registro. |
| 10 | <code>id: 2</code> | Identificador numérico de este registro. |
| 11 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 12 | <code>{</code> | Abre el objeto de un registro. |
| 13 | <code>icono: &quot;pizza&quot;,</code> | Nombre base del icono SVG; Categoria añade /img/icono_ y .svg. |
| 14 | <code>nombre: &quot;Pizzas&quot;,</code> | Nombre visible de este registro. |
| 15 | <code>id: 3</code> | Identificador numérico de este registro. |
| 16 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 17 | <code>{</code> | Abre el objeto de un registro. |
| 18 | <code>icono: &quot;dona&quot;,</code> | Nombre base del icono SVG; Categoria añade /img/icono_ y .svg. |
| 19 | <code>nombre: &quot;Donas&quot;,</code> | Nombre visible de este registro. |
| 20 | <code>id: 4</code> | Identificador numérico de este registro. |
| 21 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 22 | <code>{</code> | Abre el objeto de un registro. |
| 23 | <code>icono: &quot;pastel&quot;,</code> | Nombre base del icono SVG; Categoria añade /img/icono_ y .svg. |
| 24 | <code>nombre: &quot;Pasteles&quot;,</code> | Nombre visible de este registro. |
| 25 | <code>id: 5</code> | Identificador numérico de este registro. |
| 26 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 27 | <code>{</code> | Abre el objeto de un registro. |
| 28 | <code>icono: &quot;galletas&quot;,</code> | Nombre base del icono SVG; Categoria añade /img/icono_ y .svg. |
| 29 | <code>nombre: &quot;Galletas&quot;,</code> | Nombre visible de este registro. |
| 30 | <code>id: 6</code> | Identificador numérico de este registro. |
| 31 | <code>}</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 32 | <code>]</code> | Cierra el array de registros. |
| 33 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 34 | <code>export {</code> | Comienza una exportación nombrada. |
| 35 | <code>categorias</code> | Hace disponible el array para importarlo desde otros archivos. |
| 36 | <code>}</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |

## frontend/src/data/productos.js

[Abrir archivo](../frontend/src/data/productos.js)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>const productos = [</code> | Declara el array local que contiene los registros del catálogo. |
| 2 | <code>{</code> | Abre el objeto de un registro. |
| 3 | <code>nombre: &quot;Café Caramel con Chocolate&quot;,</code> | Nombre visible de este registro. |
| 4 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 5 | <code>imagen: &quot;cafe_01&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 6 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 7 | <code>id: 1</code> | Identificador numérico de este registro. |
| 8 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 9 | <code>{</code> | Abre el objeto de un registro. |
| 10 | <code>nombre: &quot;Café Frio con Chocolate Grande&quot;,</code> | Nombre visible de este registro. |
| 11 | <code>precio: 49.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 12 | <code>imagen: &quot;cafe_02&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 13 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 14 | <code>id: 2</code> | Identificador numérico de este registro. |
| 15 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 16 | <code>{</code> | Abre el objeto de un registro. |
| 17 | <code>nombre: &quot;Latte Frio con Chocolate Grande&quot;,</code> | Nombre visible de este registro. |
| 18 | <code>precio: 54.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 19 | <code>imagen: &quot;cafe_03&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 20 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 21 | <code>id: 3</code> | Identificador numérico de este registro. |
| 22 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 23 | <code>{</code> | Abre el objeto de un registro. |
| 24 | <code>nombre: &quot;Latte Frio con Chocolate Grande&quot;,</code> | Nombre visible de este registro. |
| 25 | <code>precio: 54.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 26 | <code>imagen: &quot;cafe_04&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 27 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 28 | <code>id: 4</code> | Identificador numérico de este registro. |
| 29 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 30 | <code>{</code> | Abre el objeto de un registro. |
| 31 | <code>nombre: &quot;Malteada Fria con Chocolate Grande&quot;,</code> | Nombre visible de este registro. |
| 32 | <code>precio: 54.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 33 | <code>imagen: &quot;cafe_05&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 34 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 35 | <code>id: 5</code> | Identificador numérico de este registro. |
| 36 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 37 | <code>{</code> | Abre el objeto de un registro. |
| 38 | <code>nombre: &quot;Café Mocha Caliente Chico&quot;,</code> | Nombre visible de este registro. |
| 39 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 40 | <code>imagen: &quot;cafe_06&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 41 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 42 | <code>id: 6</code> | Identificador numérico de este registro. |
| 43 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 44 | <code>{</code> | Abre el objeto de un registro. |
| 45 | <code>nombre: &quot;Café Mocha Caliente Grande con Chocolate&quot;,</code> | Nombre visible de este registro. |
| 46 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 47 | <code>imagen: &quot;cafe_07&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 48 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 49 | <code>id: 7</code> | Identificador numérico de este registro. |
| 50 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 51 | <code>{</code> | Abre el objeto de un registro. |
| 52 | <code>nombre: &quot;Café Caliente Capuchino Grande&quot;,</code> | Nombre visible de este registro. |
| 53 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 54 | <code>imagen: &quot;cafe_08&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 55 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 56 | <code>id: 8</code> | Identificador numérico de este registro. |
| 57 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 58 | <code>{</code> | Abre el objeto de un registro. |
| 59 | <code>nombre: &quot;Café Mocha Caliente Mediano&quot;,</code> | Nombre visible de este registro. |
| 60 | <code>precio: 49.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 61 | <code>imagen: &quot;cafe_09&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 62 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 63 | <code>id: 9</code> | Identificador numérico de este registro. |
| 64 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 65 | <code>{</code> | Abre el objeto de un registro. |
| 66 | <code>nombre: &quot;Café Mocha Frio con Caramelo Mediano&quot;,</code> | Nombre visible de este registro. |
| 67 | <code>precio: 49.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 68 | <code>imagen: &quot;cafe_10&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 69 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 70 | <code>id: 10</code> | Identificador numérico de este registro. |
| 71 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 72 | <code>{</code> | Abre el objeto de un registro. |
| 73 | <code>nombre: &quot;Café Mocha Frio con Chocolate Mediano&quot;,</code> | Nombre visible de este registro. |
| 74 | <code>precio: 49.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 75 | <code>imagen: &quot;cafe_11&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 76 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 77 | <code>id: 11</code> | Identificador numérico de este registro. |
| 78 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 79 | <code>{</code> | Abre el objeto de un registro. |
| 80 | <code>nombre: &quot;Café Espresso&quot;,</code> | Nombre visible de este registro. |
| 81 | <code>precio: 29.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 82 | <code>imagen: &quot;cafe_12&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 83 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 84 | <code>id: 12</code> | Identificador numérico de este registro. |
| 85 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 86 | <code>{</code> | Abre el objeto de un registro. |
| 87 | <code>nombre: &quot;Café Capuchino Grande con Caramelo&quot;,</code> | Nombre visible de este registro. |
| 88 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 89 | <code>imagen: &quot;cafe_13&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 90 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 91 | <code>id: 13</code> | Identificador numérico de este registro. |
| 92 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 93 | <code>{</code> | Abre el objeto de un registro. |
| 94 | <code>nombre: &quot;Café Caramelo Grande&quot;,</code> | Nombre visible de este registro. |
| 95 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 96 | <code>imagen: &quot;cafe_14&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 97 | <code>categoria_id: 1,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 98 | <code>id: 14</code> | Identificador numérico de este registro. |
| 99 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 100 | <code>{</code> | Abre el objeto de un registro. |
| 101 | <code>nombre: &quot;Paquete de 3 donas de Chocolate&quot;,</code> | Nombre visible de este registro. |
| 102 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 103 | <code>imagen: &quot;donas_01&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 104 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 105 | <code>id: 15</code> | Identificador numérico de este registro. |
| 106 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 107 | <code>{</code> | Abre el objeto de un registro. |
| 108 | <code>nombre: &quot;Paquete de 3 donas Glaseadas&quot;,</code> | Nombre visible de este registro. |
| 109 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 110 | <code>imagen: &quot;donas_02&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 111 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 112 | <code>id: 16</code> | Identificador numérico de este registro. |
| 113 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 114 | <code>{</code> | Abre el objeto de un registro. |
| 115 | <code>nombre: &quot;Dona de Fresa &quot;,</code> | Nombre visible de este registro. |
| 116 | <code>precio: 19.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 117 | <code>imagen: &quot;donas_03&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 118 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 119 | <code>id: 17</code> | Identificador numérico de este registro. |
| 120 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 121 | <code>{</code> | Abre el objeto de un registro. |
| 122 | <code>nombre: &quot;Dona con Galleta de Chocolate &quot;,</code> | Nombre visible de este registro. |
| 123 | <code>precio: 19.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 124 | <code>imagen: &quot;donas_04&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 125 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 126 | <code>id: 18</code> | Identificador numérico de este registro. |
| 127 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 128 | <code>{</code> | Abre el objeto de un registro. |
| 129 | <code>nombre: &quot;Dona glass con Chispas Sabor Fresa &quot;,</code> | Nombre visible de este registro. |
| 130 | <code>precio: 19.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 131 | <code>imagen: &quot;donas_05&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 132 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 133 | <code>id: 19</code> | Identificador numérico de este registro. |
| 134 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 135 | <code>{</code> | Abre el objeto de un registro. |
| 136 | <code>nombre: &quot;Dona glass con Chocolate &quot;,</code> | Nombre visible de este registro. |
| 137 | <code>precio: 19.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 138 | <code>imagen: &quot;donas_06&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 139 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 140 | <code>id: 20</code> | Identificador numérico de este registro. |
| 141 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 142 | <code>{</code> | Abre el objeto de un registro. |
| 143 | <code>nombre: &quot;Dona de Chocolate con MÁS Chocolate &quot;,</code> | Nombre visible de este registro. |
| 144 | <code>precio: 19.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 145 | <code>imagen: &quot;donas_07&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 146 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 147 | <code>id: 21</code> | Identificador numérico de este registro. |
| 148 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 149 | <code>{</code> | Abre el objeto de un registro. |
| 150 | <code>nombre: &quot;Paquete de 3 donas de Chocolate &quot;,</code> | Nombre visible de este registro. |
| 151 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 152 | <code>imagen: &quot;donas_08&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 153 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 154 | <code>id: 22</code> | Identificador numérico de este registro. |
| 155 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 156 | <code>{</code> | Abre el objeto de un registro. |
| 157 | <code>nombre: &quot;Paquete de 3 donas con Vainilla y Chocolate &quot;,</code> | Nombre visible de este registro. |
| 158 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 159 | <code>imagen: &quot;donas_09&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 160 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 161 | <code>id: 23</code> | Identificador numérico de este registro. |
| 162 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 163 | <code>{</code> | Abre el objeto de un registro. |
| 164 | <code>nombre: &quot;Paquete de 6 Donas&quot;,</code> | Nombre visible de este registro. |
| 165 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 166 | <code>imagen: &quot;donas_10&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 167 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 168 | <code>id: 24</code> | Identificador numérico de este registro. |
| 169 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 170 | <code>{</code> | Abre el objeto de un registro. |
| 171 | <code>nombre: &quot;Paquete de 3 Variadas&quot;,</code> | Nombre visible de este registro. |
| 172 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 173 | <code>imagen: &quot;donas_11&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 174 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 175 | <code>id: 25</code> | Identificador numérico de este registro. |
| 176 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 177 | <code>{</code> | Abre el objeto de un registro. |
| 178 | <code>nombre: &quot;Dona Natural con Chocolate&quot;,</code> | Nombre visible de este registro. |
| 179 | <code>precio: 19.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 180 | <code>imagen: &quot;donas_12&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 181 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 182 | <code>id: 26</code> | Identificador numérico de este registro. |
| 183 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 184 | <code>{</code> | Abre el objeto de un registro. |
| 185 | <code>nombre: &quot;Paquete de 3 Donas de Chocolate con Chispas&quot;,</code> | Nombre visible de este registro. |
| 186 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 187 | <code>imagen: &quot;donas_13&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 188 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 189 | <code>id: 27</code> | Identificador numérico de este registro. |
| 190 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 191 | <code>{</code> | Abre el objeto de un registro. |
| 192 | <code>nombre: &quot;Dona Chocolate y Coco&quot;,</code> | Nombre visible de este registro. |
| 193 | <code>precio: 19.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 194 | <code>imagen: &quot;donas_14&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 195 | <code>categoria_id: 4,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 196 | <code>id: 28</code> | Identificador numérico de este registro. |
| 197 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 198 | <code>{</code> | Abre el objeto de un registro. |
| 199 | <code>nombre: &quot;Paquete Galletas de Chocolate&quot;,</code> | Nombre visible de este registro. |
| 200 | <code>precio: 29.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 201 | <code>imagen: &quot;galletas_01&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 202 | <code>categoria_id: 6,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 203 | <code>id: 29</code> | Identificador numérico de este registro. |
| 204 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 205 | <code>{</code> | Abre el objeto de un registro. |
| 206 | <code>nombre: &quot;Paquete Galletas de Chocolate y Avena&quot;,</code> | Nombre visible de este registro. |
| 207 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 208 | <code>imagen: &quot;galletas_02&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 209 | <code>categoria_id: 6,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 210 | <code>id: 30</code> | Identificador numérico de este registro. |
| 211 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 212 | <code>{</code> | Abre el objeto de un registro. |
| 213 | <code>nombre: &quot;Paquete de Muffins de Vainilla&quot;,</code> | Nombre visible de este registro. |
| 214 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 215 | <code>imagen: &quot;galletas_03&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 216 | <code>categoria_id: 6,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 217 | <code>id: 31</code> | Identificador numérico de este registro. |
| 218 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 219 | <code>{</code> | Abre el objeto de un registro. |
| 220 | <code>nombre: &quot;Paquete de 4 Galletas de Avena&quot;,</code> | Nombre visible de este registro. |
| 221 | <code>precio: 24.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 222 | <code>imagen: &quot;galletas_04&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 223 | <code>categoria_id: 6,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 224 | <code>id: 32</code> | Identificador numérico de este registro. |
| 225 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 226 | <code>{</code> | Abre el objeto de un registro. |
| 227 | <code>nombre: &quot;Galletas de Mantequilla Variadas&quot;,</code> | Nombre visible de este registro. |
| 228 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 229 | <code>imagen: &quot;galletas_05&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 230 | <code>categoria_id: 6,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 231 | <code>id: 33</code> | Identificador numérico de este registro. |
| 232 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 233 | <code>{</code> | Abre el objeto de un registro. |
| 234 | <code>nombre: &quot;Galletas de sabores frutales&quot;,</code> | Nombre visible de este registro. |
| 235 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 236 | <code>imagen: &quot;galletas_06&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 237 | <code>categoria_id: 6,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 238 | <code>id: 34</code> | Identificador numérico de este registro. |
| 239 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 240 | <code>{</code> | Abre el objeto de un registro. |
| 241 | <code>nombre: &quot;Hamburguesa Sencilla&quot;,</code> | Nombre visible de este registro. |
| 242 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 243 | <code>imagen: &quot;hamburguesas_01&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 244 | <code>categoria_id: 2,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 245 | <code>id: 35</code> | Identificador numérico de este registro. |
| 246 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 247 | <code>{</code> | Abre el objeto de un registro. |
| 248 | <code>nombre: &quot;Hamburguesa de Pollo&quot;,</code> | Nombre visible de este registro. |
| 249 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 250 | <code>imagen: &quot;hamburguesas_02&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 251 | <code>categoria_id: 2,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 252 | <code>id: 36</code> | Identificador numérico de este registro. |
| 253 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 254 | <code>{</code> | Abre el objeto de un registro. |
| 255 | <code>nombre: &quot;Hamburguesa de Pollo y Chili&quot;,</code> | Nombre visible de este registro. |
| 256 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 257 | <code>imagen: &quot;hamburguesas_03&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 258 | <code>categoria_id: 2,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 259 | <code>id: 37</code> | Identificador numérico de este registro. |
| 260 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 261 | <code>{</code> | Abre el objeto de un registro. |
| 262 | <code>nombre: &quot;Hamburguesa Queso y  Pepinos&quot;,</code> | Nombre visible de este registro. |
| 263 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 264 | <code>imagen: &quot;hamburguesas_04&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 265 | <code>categoria_id: 2,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 266 | <code>id: 38</code> | Identificador numérico de este registro. |
| 267 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 268 | <code>{</code> | Abre el objeto de un registro. |
| 269 | <code>nombre: &quot;Hamburguesa Cuarto de Libra&quot;,</code> | Nombre visible de este registro. |
| 270 | <code>precio: 59.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 271 | <code>imagen: &quot;hamburguesas_05&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 272 | <code>categoria_id: 2,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 273 | <code>id: 39</code> | Identificador numérico de este registro. |
| 274 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 275 | <code>{</code> | Abre el objeto de un registro. |
| 276 | <code>nombre: &quot;Hamburguesa Doble Queso&quot;,</code> | Nombre visible de este registro. |
| 277 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 278 | <code>imagen: &quot;hamburguesas_06&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 279 | <code>categoria_id: 2,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 280 | <code>id: 40</code> | Identificador numérico de este registro. |
| 281 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 282 | <code>{</code> | Abre el objeto de un registro. |
| 283 | <code>nombre: &quot;Hot Dog Especial&quot;,</code> | Nombre visible de este registro. |
| 284 | <code>precio: 49.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 285 | <code>imagen: &quot;hamburguesas_07&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 286 | <code>categoria_id: 2,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 287 | <code>id: 41</code> | Identificador numérico de este registro. |
| 288 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 289 | <code>{</code> | Abre el objeto de un registro. |
| 290 | <code>nombre: &quot;Paquete 2 Hot Dogs&quot;,</code> | Nombre visible de este registro. |
| 291 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 292 | <code>imagen: &quot;hamburguesas_08&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 293 | <code>categoria_id: 2,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 294 | <code>id: 42</code> | Identificador numérico de este registro. |
| 295 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 296 | <code>{</code> | Abre el objeto de un registro. |
| 297 | <code>nombre: &quot;4 Rebanadas de Pay de Queso&quot;,</code> | Nombre visible de este registro. |
| 298 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 299 | <code>imagen: &quot;pastel_01&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 300 | <code>categoria_id: 5,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 301 | <code>id: 43</code> | Identificador numérico de este registro. |
| 302 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 303 | <code>{</code> | Abre el objeto de un registro. |
| 304 | <code>nombre: &quot;Waffle Especial&quot;,</code> | Nombre visible de este registro. |
| 305 | <code>precio: 49.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 306 | <code>imagen: &quot;pastel_02&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 307 | <code>categoria_id: 5,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 308 | <code>id: 44</code> | Identificador numérico de este registro. |
| 309 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 310 | <code>{</code> | Abre el objeto de un registro. |
| 311 | <code>nombre: &quot;Croissants De la casa&quot;,</code> | Nombre visible de este registro. |
| 312 | <code>precio: 39.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 313 | <code>imagen: &quot;pastel_03&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 314 | <code>categoria_id: 5,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 315 | <code>id: 45</code> | Identificador numérico de este registro. |
| 316 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 317 | <code>{</code> | Abre el objeto de un registro. |
| 318 | <code>nombre: &quot;Pay de Queso&quot;,</code> | Nombre visible de este registro. |
| 319 | <code>precio: 19.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 320 | <code>imagen: &quot;pastel_04&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 321 | <code>categoria_id: 5,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 322 | <code>id: 46</code> | Identificador numérico de este registro. |
| 323 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 324 | <code>{</code> | Abre el objeto de un registro. |
| 325 | <code>nombre: &quot;Pastel de Chocolate&quot;,</code> | Nombre visible de este registro. |
| 326 | <code>precio: 29.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 327 | <code>imagen: &quot;pastel_05&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 328 | <code>categoria_id: 5,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 329 | <code>id: 47</code> | Identificador numérico de este registro. |
| 330 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 331 | <code>{</code> | Abre el objeto de un registro. |
| 332 | <code>nombre: &quot;Rebanada Pastel de Chocolate&quot;,</code> | Nombre visible de este registro. |
| 333 | <code>precio: 29.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 334 | <code>imagen: &quot;pastel_06&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 335 | <code>categoria_id: 5,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 336 | <code>id: 48</code> | Identificador numérico de este registro. |
| 337 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 338 | <code>{</code> | Abre el objeto de un registro. |
| 339 | <code>nombre: &quot;Pizza Spicy con Doble Queso&quot;,</code> | Nombre visible de este registro. |
| 340 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 341 | <code>imagen: &quot;pizzas_01&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 342 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 343 | <code>id: 49</code> | Identificador numérico de este registro. |
| 344 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 345 | <code>{</code> | Abre el objeto de un registro. |
| 346 | <code>nombre: &quot;Pizza Jamón y Queso&quot;,</code> | Nombre visible de este registro. |
| 347 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 348 | <code>imagen: &quot;pizzas_02&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 349 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 350 | <code>id: 50</code> | Identificador numérico de este registro. |
| 351 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 352 | <code>{</code> | Abre el objeto de un registro. |
| 353 | <code>nombre: &quot;Pizza Doble Queso&quot;,</code> | Nombre visible de este registro. |
| 354 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 355 | <code>imagen: &quot;pizzas_03&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 356 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 357 | <code>id: 51</code> | Identificador numérico de este registro. |
| 358 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 359 | <code>{</code> | Abre el objeto de un registro. |
| 360 | <code>nombre: &quot;Pizza Especial de la Casa&quot;,</code> | Nombre visible de este registro. |
| 361 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 362 | <code>imagen: &quot;pizzas_04&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 363 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 364 | <code>id: 52</code> | Identificador numérico de este registro. |
| 365 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 366 | <code>{</code> | Abre el objeto de un registro. |
| 367 | <code>nombre: &quot;Pizza Chorizo&quot;,</code> | Nombre visible de este registro. |
| 368 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 369 | <code>imagen: &quot;pizzas_05&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 370 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 371 | <code>id: 53</code> | Identificador numérico de este registro. |
| 372 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 373 | <code>{</code> | Abre el objeto de un registro. |
| 374 | <code>nombre: &quot;Pizza Hawaiana&quot;,</code> | Nombre visible de este registro. |
| 375 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 376 | <code>imagen: &quot;pizzas_06&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 377 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 378 | <code>id: 54</code> | Identificador numérico de este registro. |
| 379 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 380 | <code>{</code> | Abre el objeto de un registro. |
| 381 | <code>nombre: &quot;Pizza Tocino&quot;,</code> | Nombre visible de este registro. |
| 382 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 383 | <code>imagen: &quot;pizzas_07&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 384 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 385 | <code>id: 55</code> | Identificador numérico de este registro. |
| 386 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 387 | <code>{</code> | Abre el objeto de un registro. |
| 388 | <code>nombre: &quot;Pizza Vegetales y Queso&quot;,</code> | Nombre visible de este registro. |
| 389 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 390 | <code>imagen: &quot;pizzas_08&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 391 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 392 | <code>id: 56</code> | Identificador numérico de este registro. |
| 393 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 394 | <code>{</code> | Abre el objeto de un registro. |
| 395 | <code>nombre: &quot;Pizza Pepperoni y Queso&quot;,</code> | Nombre visible de este registro. |
| 396 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 397 | <code>imagen: &quot;pizzas_09&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 398 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 399 | <code>id: 57</code> | Identificador numérico de este registro. |
| 400 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 401 | <code>{</code> | Abre el objeto de un registro. |
| 402 | <code>nombre: &quot;Pizza Aceitunas y Queso&quot;,</code> | Nombre visible de este registro. |
| 403 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 404 | <code>imagen: &quot;pizzas_10&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 405 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 406 | <code>id: 58</code> | Identificador numérico de este registro. |
| 407 | <code>},</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 408 | <code>{</code> | Abre el objeto de un registro. |
| 409 | <code>nombre: &quot;Pizza Queso, Jamón y Champiñones&quot;,</code> | Nombre visible de este registro. |
| 410 | <code>precio: 69.9,</code> | Precio numérico que se formatea al mostrarlo. |
| 411 | <code>imagen: &quot;pizzas_11&quot;,</code> | Nombre base del JPG; Producto añade /img/ y .jpg. |
| 412 | <code>categoria_id: 3,</code> | ID de la categoría a la que pertenece este producto; se usa en el filtro. |
| 413 | <code>id: 59</code> | Identificador numérico de este registro. |
| 414 | <code>}</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |
| 415 | <code>]</code> | Cierra el array de registros. |
| 416 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 417 | <code>export {</code> | Comienza una exportación nombrada. |
| 418 | <code>productos</code> | Hace disponible el array para importarlo desde otros archivos. |
| 419 | <code>}</code> | Cierra el objeto o el bloque de exportación; la coma separa registros cuando aparece. |

## frontend/src/index.css

[Abrir archivo](../frontend/src/index.css)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>@tailwind base;</code> | Inyecta estilos base de Tailwind. |
| 2 | <code>@tailwind components;</code> | Inyecta la capa de componentes de Tailwind. |
| 3 | <code>@tailwind utilities;</code> | Inyecta las clases utilitarias de Tailwind. |
| 4 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |

## frontend/src/layouts/AuthLayout.jsx

[Abrir archivo](../frontend/src/layouts/AuthLayout.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import { Outlet } from &#x27;react-router-dom&#x27;</code> | Importa el espacio para rutas hijas. |
| 2 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 3 | <code>export default function AuthLayout() {</code> | Declara el layout de autenticación. |
| 4 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 5 | <code>&lt;main className=&quot;max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center&quot;&gt;</code> | Abre una zona centrada, de ancho limitado, en columna inicialmente y en fila desde md. |
| 6 | <code>&lt;img</code> | Comienza una imagen. |
| 7 | <code>src=&quot;/img/logo.svg&quot;</code> | Busca el logo en public/img/logo.svg. |
| 8 | <code>alt=&quot;imagen logotipo&quot;</code> | Texto alternativo del logo. |
| 9 | <code>className=&quot;max-w-xs&quot;</code> | Limita el ancho de la imagen. |
| 10 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 11 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 12 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 13 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 14 | <code>&lt;div className=&#x27;p-19 w-full&#x27;&gt;</code> | Contenedor de ancho completo. p-19 no pertenece a la escala predeterminada del Tailwind 3 configurado. |
| 15 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 16 | <code>&lt;Outlet/&gt;</code> | Muestra Login o Registro según la ruta. |
| 17 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 18 | <code>&lt;/main&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 19 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 20 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/src/views/Login.jsx

[Abrir archivo](../frontend/src/views/Login.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import { Link } from &#x27;react-router-dom&#x27;</code> | Importa Link para navegar entre rutas React. |
| 2 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 3 | <code>export default function Login() {</code> | Declara la vista de inicio de sesión. |
| 4 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 5 | <code>&lt;&gt;</code> | Abre un fragmento React: agrupa elementos sin crear un div adicional. |
| 6 | <code>&lt;h1 className=&quot;text-4xl font-black&quot;&gt;Iniciar Sesion&lt;/h1&gt;</code> | Título visible del formulario. |
| 7 | <code>&lt;p&gt;Para crear un pedidio debes iniciar sesion&lt;/p&gt;</code> | Texto informativo; contiene la errata pedidio. |
| 8 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 9 | <code>&lt;div className=&quot;bg-white shadow-md rounded-md mt-10 px-5 py-10&quot;&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 10 | <code>&lt;form action=&quot;&quot;&gt;</code> | Abre un formulario sin onSubmit ni integración de autenticación. action vacío no inicia una sesión en Laravel. |
| 11 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 12 | <code>&lt;div className=&quot;mb-4&quot;&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 13 | <code>&lt;label</code> | Comienza una etiqueta descriptiva de un campo. |
| 14 | <code>className = &#x27;text-slate-800&#x27;</code> | Asigna clases CSS/Tailwind al elemento; consulta el glosario de estilos. |
| 15 | <code>htmlFor=&quot;email&quot;</code> | Asocia la etiqueta al campo email. |
| 16 | <code>&gt;Email&lt;/label&gt;</code> | Termina la apertura del label, muestra su texto y cierra la etiqueta. |
| 17 | <code>&lt;input</code> | Comienza un campo de entrada o control de formulario. |
| 18 | <code>type=&quot;email&quot;</code> | Define el tipo de control: email valida formato básico, password oculta visualmente lo escrito, text admite texto, button no envía y submit envía. |
| 19 | <code>id=&quot;email&quot;</code> | Identificador del elemento HTML; permite asociar su label. |
| 20 | <code>className=&quot;mt-2 w- full p-3 block bg-gray-50 &quot;</code> | Estilos del campo; w- full está separado y no aplica el ancho w-full. |
| 21 | <code>name=&quot;email&quot;</code> | Nombre con el que el campo participa en los datos del formulario. |
| 22 | <code>placeholder=&quot;Tu Email&quot;</code> | Pista visible cuando el campo está vacío; no sustituye al label. |
| 23 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 24 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 25 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 26 | <code>&lt;div className=&quot;mb-4&quot;&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 27 | <code>&lt;label</code> | Comienza una etiqueta descriptiva de un campo. |
| 28 | <code>className = &#x27;text-slate-800&#x27;</code> | Asigna clases CSS/Tailwind al elemento; consulta el glosario de estilos. |
| 29 | <code>htmlFor=&quot;email&quot;</code> | Esta etiqueta de contraseña apunta por error a email; debería asociarse al ID password. |
| 30 | <code>&gt;Password:&lt;/label&gt;</code> | Termina la apertura del label, muestra su texto y cierra la etiqueta. |
| 31 | <code>&lt;input</code> | Comienza un campo de entrada o control de formulario. |
| 32 | <code>type=&quot;password&quot;</code> | Define el tipo de control: email valida formato básico, password oculta visualmente lo escrito, text admite texto, button no envía y submit envía. |
| 33 | <code>id=&quot;password&quot;</code> | Identificador del elemento HTML; permite asociar su label. |
| 34 | <code>className=&quot;mt-2 w- full p-3 block bg-gray-50 &quot;</code> | Estilos del campo; w- full tiene la misma separación incorrecta. |
| 35 | <code>name=&quot;password&quot;</code> | Nombre con el que el campo participa en los datos del formulario. |
| 36 | <code>placeholder=&quot;Tu Password&quot;</code> | Pista visible cuando el campo está vacío; no sustituye al label. |
| 37 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 38 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 39 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 40 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 41 | <code>&lt;input</code> | Comienza un campo de entrada o control de formulario. |
| 42 | <code>type=&quot;submit&quot;</code> | Crea el control de envío del formulario. |
| 43 | <code>value=&quot;Iniciar Sesion&quot;</code> | Texto del botón de envío. |
| 44 | <code>className=&quot;bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer&quot;</code> | Asigna clases CSS/Tailwind al elemento; consulta el glosario de estilos. |
| 45 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 46 | <code>&lt;/form&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 47 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 48 | <code>&lt;nav className=&quot;mt-5&quot;&gt;</code> | Abre una zona de navegación y aplica sus clases. |
| 49 | <code>&lt;Link to=&quot;/auth/registro&quot;&gt;</code> | Enlace a la vista de registro. |
| 50 | <code>¿No tienes cuenta? Crea Una</code> | Texto visible del enlace. |
| 51 | <code>&lt;/Link&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 52 | <code>&lt;/nav&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 53 | <code>&lt;/&gt;</code> | Cierra el fragmento. |
| 54 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 55 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/src/views/Registro.jsx

[Abrir archivo](../frontend/src/views/Registro.jsx)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import {Link } from &#x27;react-router-dom&#x27;</code> | Importa Link. |
| 2 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 3 | <code>export default function Registro() {</code> | Declara la vista de registro. |
| 4 | <code>return (</code> | Comienza el JSX que devuelve el componente. |
| 5 | <code>&lt;&gt;</code> | Abre un fragmento React: agrupa elementos sin crear un div adicional. |
| 6 | <code>&lt;h1 className=&quot;text-4xl font-black&quot;&gt;Crea tu Cuenta&lt;/h1&gt;</code> | Muestra el título. |
| 7 | <code>&lt;p&gt;Crea tu cuenta llenando el formulario&lt;/p&gt;</code> | Muestra instrucciones. |
| 8 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 9 | <code>&lt;div className=&quot;bg-white shadow-md rounded-md mt-10 px-5 py-10&quot;&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 10 | <code>&lt;form action=&quot;&quot;&gt;</code> | Formulario todavía sin lógica onSubmit para registrar en el backend. |
| 11 | <code>&lt;div className=&quot;mb-4&quot;&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 12 | <code>&lt;label</code> | Comienza una etiqueta descriptiva de un campo. |
| 13 | <code>className = &#x27;text-slate-800&#x27;</code> | Asigna clases CSS/Tailwind al elemento; consulta el glosario de estilos. |
| 14 | <code>htmlFor=&quot;name&quot;</code> | Asocia la etiqueta con el ID de un input. |
| 15 | <code>&gt;Nombre&lt;/label&gt;</code> | Termina la apertura del label, muestra su texto y cierra la etiqueta. |
| 16 | <code>&lt;input</code> | Comienza un campo de entrada o control de formulario. |
| 17 | <code>type=&quot;text&quot;</code> | Define el tipo de control: email valida formato básico, password oculta visualmente lo escrito, text admite texto, button no envía y submit envía. |
| 18 | <code>id=&quot;name&quot;</code> | Identificador del elemento HTML; permite asociar su label. |
| 19 | <code>className=&quot;mt-2 w- full p-3 block bg-gray-50 &quot;</code> | Estilos: w- full no equivale a w-full. |
| 20 | <code>name=&quot;name&quot;</code> | Nombre con el que el campo participa en los datos del formulario. |
| 21 | <code>placeholder=&quot;Tu Nombre&quot;</code> | Pista visible cuando el campo está vacío; no sustituye al label. |
| 22 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 23 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 24 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 25 | <code>&lt;div className=&quot;mb-4&quot;&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 26 | <code>&lt;label</code> | Comienza una etiqueta descriptiva de un campo. |
| 27 | <code>className = &#x27;text-slate-800&#x27;</code> | Asigna clases CSS/Tailwind al elemento; consulta el glosario de estilos. |
| 28 | <code>htmlFor=&quot;email&quot;</code> | Asocia la etiqueta con el ID de un input. |
| 29 | <code>&gt;Email&lt;/label&gt;</code> | Termina la apertura del label, muestra su texto y cierra la etiqueta. |
| 30 | <code>&lt;input</code> | Comienza un campo de entrada o control de formulario. |
| 31 | <code>type=&quot;email&quot;</code> | Define el tipo de control: email valida formato básico, password oculta visualmente lo escrito, text admite texto, button no envía y submit envía. |
| 32 | <code>id=&quot;email&quot;</code> | Identificador del elemento HTML; permite asociar su label. |
| 33 | <code>className=&quot;mt-2 w- full p-3 block bg-gray-50 &quot;</code> | Estilos: w- full no equivale a w-full. |
| 34 | <code>name=&quot;email&quot;</code> | Nombre con el que el campo participa en los datos del formulario. |
| 35 | <code>placeholder=&quot;Tu Email&quot;</code> | Pista visible cuando el campo está vacío; no sustituye al label. |
| 36 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 37 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 38 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 39 | <code>&lt;div className=&quot;mb-4&quot;&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 40 | <code>&lt;label</code> | Comienza una etiqueta descriptiva de un campo. |
| 41 | <code>className = &#x27;text-slate-800&#x27;</code> | Asigna clases CSS/Tailwind al elemento; consulta el glosario de estilos. |
| 42 | <code>htmlFor=&quot;email&quot;</code> | La etiqueta Password apunta por error al campo email. |
| 43 | <code>&gt;Password:&lt;/label&gt;</code> | Termina la apertura del label, muestra su texto y cierra la etiqueta. |
| 44 | <code>&lt;input</code> | Comienza un campo de entrada o control de formulario. |
| 45 | <code>type=&quot;password&quot;</code> | Define el tipo de control: email valida formato básico, password oculta visualmente lo escrito, text admite texto, button no envía y submit envía. |
| 46 | <code>id=&quot;password&quot;</code> | Identificador del elemento HTML; permite asociar su label. |
| 47 | <code>className=&quot;mt-2 w- full p-3 block bg-gray-50 &quot;</code> | Estilos: w- full no equivale a w-full. |
| 48 | <code>name=&quot;password&quot;</code> | Nombre con el que el campo participa en los datos del formulario. |
| 49 | <code>placeholder=&quot;Tu Password&quot;</code> | Pista visible cuando el campo está vacío; no sustituye al label. |
| 50 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 51 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 52 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 53 | <code>&lt;div className=&quot;mb-4&quot;&gt;</code> | Abre un contenedor y aplica los estilos indicados. |
| 54 | <code>&lt;label</code> | Comienza una etiqueta descriptiva de un campo. |
| 55 | <code>className = &#x27;text-slate-800&#x27;</code> | Asigna clases CSS/Tailwind al elemento; consulta el glosario de estilos. |
| 56 | <code>htmlFor=&quot;password_confirmation&quot;</code> | Asocia la etiqueta a password_confirmation. |
| 57 | <code>&gt;Repetir Password:&lt;/label&gt;</code> | Termina la apertura del label, muestra su texto y cierra la etiqueta. |
| 58 | <code>&lt;input</code> | Comienza un campo de entrada o control de formulario. |
| 59 | <code>type=&quot;password&quot;</code> | Define el tipo de control: email valida formato básico, password oculta visualmente lo escrito, text admite texto, button no envía y submit envía. |
| 60 | <code>id=&quot;password_confirmation&quot;</code> | Identificador del elemento HTML; permite asociar su label. |
| 61 | <code>className=&quot;mt-2 w- full p-3 block bg-gray-50 &quot;</code> | Estilos: w- full no equivale a w-full. |
| 62 | <code>name=&quot;password&quot;</code> | El nombre del campo de confirmación vuelve a ser password; no distingue password_confirmation en un envío por nombre. |
| 63 | <code>placeholder=&quot;Repetir Password&quot;</code> | Pista visible cuando el campo está vacío; no sustituye al label. |
| 64 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 65 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 66 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 67 | <code>&lt;input</code> | Comienza un campo de entrada o control de formulario. |
| 68 | <code>type=&quot;submit&quot;</code> | Declara el control de envío. |
| 69 | <code>value=&quot;Crear Cuenta&quot;</code> | Texto del botón. |
| 70 | <code>className=&quot;bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer&quot;</code> | Asigna clases CSS/Tailwind al elemento; consulta el glosario de estilos. |
| 71 | <code>/&gt;</code> | Termina la apertura de la etiqueta; /> también cierra el elemento sin hijos. |
| 72 | <code>&lt;/form&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 73 | <code>&lt;/div&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 74 | <code>&lt;nav className=&quot;mt-5&quot;&gt;</code> | Abre una zona de navegación y aplica sus clases. |
| 75 | <code>&lt;Link to=&quot;/auth/Login&quot;&gt;</code> | Enlace escrito como /auth/Login; la ruta declarada usa /auth/login. Conviene mantener la misma escritura. |
| 76 | <code>¿Ya cuenta? Inicia Sesion</code> | Texto del enlace, con una frase incompleta. |
| 77 | <code>&lt;/Link&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 78 | <code>&lt;/nav&gt;</code> | Cierra el elemento HTML o componente indicado. |
| 79 | <code>&lt;/&gt;</code> | Cierra el fragmento. |
| 80 | <code>)</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 81 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |

## frontend/tailwind.config.js

[Abrir archivo](../frontend/tailwind.config.js)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>/** @type {import(&#x27;tailwindcss&#x27;).Config} */</code> | Comentario de tipo para ayudar al editor. |
| 2 | <code>export default {</code> | Exporta la configuración. |
| 3 | <code>content: [</code> | Lista los archivos donde se buscarán clases. |
| 4 | <code>&quot;./index.html&quot;,</code> | Incluye el HTML de entrada. |
| 5 | <code>&quot;./src/**/*.{js,jsx}&quot;,</code> | Incluye archivos JS y JSX de cualquier subcarpeta de src. |
| 6 | <code>],</code> | Cierra la lista. |
| 7 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 8 | <code>theme: {</code> | Abre la configuración del tema. |
| 9 | <code>extend: {},</code> | No añade extensiones a la escala predeterminada. |
| 10 | <code>},</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 11 | <code>plugins: [],</code> | No configura plugins adicionales. |
| 12 | <code>}</code> | Cierra los bloques, listas o llamadas abiertos arriba; los separadores no generan contenido visible. |
| 13 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |

## frontend/vite.config.js

[Abrir archivo](../frontend/vite.config.js)

| Línea | Código | Qué hace |
| --- | --- | --- |
| 1 | <code>import react from &#x27;@vitejs/plugin-react&#x27;</code> | Importa el plugin de React. |
| 2 | <code>import { defineConfig } from &#x27;vite&#x27;</code> | Importa el helper de configuración de Vite. |
| 3 | <code>(vacía)</code> | Línea vacía: separa bloques para facilitar la lectura; no ejecuta nada. |
| 4 | <code>// https://vite.dev/config/</code> | Comentario con referencia de configuración. |
| 5 | <code>export default defineConfig({</code> | Exporta la configuración. |
| 6 | <code>plugins: [</code> | Abre la lista de plugins. |
| 7 | <code>react(),</code> | Activa procesamiento de React y soporte de desarrollo. |
| 8 | <code>],</code> | Cierra plugins. |
| 9 | <code>})</code> | Cierra la configuración. |

