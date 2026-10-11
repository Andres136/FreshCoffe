# Cambios, errores y funcionamiento

Este registro resume el trabajo de la conversación. El archivo actual puede diferir de una corrección anterior si se editó después; las observaciones de abajo distinguen ambos casos.

## 1. Error de Vite por sintaxis y exportaciones

En el objeto `value` del proveedor faltaba una coma:

```jsx
// Incorrecto
value={{ categorias, categoriaActual handleClickCategoria }}

// Correcto
value={{ categorias, categoriaActual, handleClickCategoria }}
```

Un objeto separa sus propiedades con comas. Vite no podía transformar el archivo, por eso la petición del módulo devolvía 500. Ese 500 era del servidor de desarrollo, no una prueba de fallo de la base de datos Laravel.

También se intentó importar como predeterminado un hook exportado con nombre:

```jsx
// Incorrecto para este hook
import useQuiosco from '../hooks/useQuiosco'

// Correcto
import { useQuiosco } from '../hooks/useQuiosco'
```

Los atributos `type` y `onClick` deben estar dentro de la apertura del botón, antes de `>`; de lo contrario no definen el evento ni el tipo del elemento.

## 2. ID no definido y ejecución prematura

```jsx
// Antes: id no se extraía
const { icono, nombre } = categoria

// Después
const { id, icono, nombre } = categoria
```

```jsx
// Antes: llama durante el render
onClick={handleClickCategoria(id)}

// Después: llama al hacer clic
onClick={() => handleClickCategoria(id)}
```

`key={categoria.id}` en Sidebar no define `id` dentro del hijo: hay que recibir el objeto y extraer su propiedad.

## 3. El título no cambiaba

Antes:

```jsx
const handleClickCategoria = id => {
  console.log(id)
}
```

Después, como está en el proveedor revisado:

```jsx
const handleClickCategoria = id => {
  console.log(id)
  setCategoriaActual(categorias.find(categoria => categoria.id === id))
}
```

La nueva línea cambia el estado compartido. Inicio lo consume mediante `{categoriaActual.nombre}`, de modo que el título se vuelve a calcular. No necesitas manipular el HTML manualmente.

## 4. Zona clicable de la categoría

Se convirtió la fila completa en un botón para aceptar clics en el icono, texto y espacio libre. Más adelante el archivo se volvió a editar. En la versión revisada para esta guía, la estructura actual es un `div` que contiene la imagen y un `button`, y `onClick` está solamente en el botón.

Por tanto, el icono y espacio exterior no seleccionan en esa versión. `cursor-pointer` en el div solo cambia el cursor. No se modificó este comportamiento al escribir la documentación.

## 5. Resaltado y backticks

Código actual:

```jsx
const resaltar = categoriaActual?.id === id ? 'bg-amber-400' : 'bg-white'

<div className={`${resaltar} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
```

Se corrigió el cierre de cadena: el acento `´` no es un backtick. También se corrigió la referencia a una función que no existía: si defines `resaltar` como cadena, interpolas `${resaltar}` sin paréntesis.

La clase calculada muestra la selección actual. La clase `hover:` solo refleja dónde está el puntero.

## 6. Importación de productos

`producos` era un nombre mal escrito. El archivo exporta `productos`. Inicio ahora usa:

```jsx
import { productos as data } from '../data/productos'
```

El alias `data` permite llamar `productos` al resultado filtrado sin declarar dos variables locales con el mismo nombre.

## 7. El filtro dejaba la pantalla vacía

Antes:

```jsx
const productos = data.filter(
  producto => producto.categoriaId === categoriaActual.id
)
```

Después:

```jsx
const productos = data.filter(
  producto => producto.categoria_id === categoriaActual.id
)
```

Los objetos tienen `categoria_id`, no `categoriaId`. La propiedad incorrecta devolvía `undefined`; ninguna coincidía y el array quedaba vacío.

Se comprobó el resultado del filtro sobre los datos locales:

| Categoría | ID | Productos |
| --- | --- | --- |
| Café | 1 | 14 |
| Hamburguesas | 2 | 8 |
| Pizzas | 3 | 11 |
| Donas | 4 | 14 |
| Pasteles | 5 | 6 |
| Galletas | 6 | 6 |

## 8. handleClickModal no definido

Antes en Producto:

```jsx
const {} = useQuiosco()
```

Después:

```jsx
const { handleClickModal } = useQuiosco()
```

La función ya existía y se compartía desde el proveedor, pero el componente no la obtenía. Ahora el clic puede ejecutar la función. Esto elimina esa referencia inexistente, pero no implementa por sí solo la ventana visual ni un carrito.

## 9. Recorrido de un clic en Hamburguesas

1. Sidebar recorre `categorias` y entrega el objeto con ID 2 a Categoria.
2. Categoria extrae `id` y registra el callback del botón.
3. El clic llama a `handleClickCategoria(2)`.
4. El proveedor busca ese objeto con `find` y actualiza `categoriaActual`.
5. Los consumidores del contexto reciben el valor actualizado.
6. Categoria recalcula su fondo usando el ID seleccionado.
7. Inicio muestra «Hamburguesas» y filtra `data` por `categoria_id === 2`.
8. `map` produce ocho tarjetas Producto con sus props.

## 10. Recorrido de un clic en Agregar

1. Producto obtiene `handleClickModal` usando `useQuiosco`.
2. El callback del botón ejecuta esa función.
3. El proveedor invierte `modal` con `setModal(!modal)`.
4. Layout lee el nuevo valor e imprime el booleano.
5. No se renderiza una ventana porque todavía no hay un componente modal en ese layout.

Los mensajes `false` o `true` son resultados de `console.log`, no errores. Un error como `ReferenceError` sí señala una referencia inexistente.

## 11. Qué falta actualmente

| Parte | Estado real |
| --- | --- |
| Seleccionar categoría y filtrar | Implementado con estado y datos locales. |
| Resaltado | Implementado con comparación de IDs y clases. |
| Clic en toda la fila | Se implementó antes; el archivo actual tiene clic solo en el botón del nombre. |
| Modal | Estado y función disponibles; falta interfaz de ventana. |
| Producto seleccionado y cantidad | No hay ese estado en el proveedor revisado. |
| Pedido y totales | No implementados en Resumen. |
| Cancelar Orden | Botón visible sin manejador. |
| Login y registro | Formularios visuales sin envío a una API de autenticación. |
| Catálogo desde Laravel | No implementado; se importa desde JavaScript. |
| useEffect | No se usa todavía. |
| useQuery | No se usa ni se encontró su biblioteca en las dependencias declaradas. |

Se observaron además detalles en los formularios: `w- full` debería ser un único token `w-full`; algunas etiquetas de contraseña apuntan a `email`; la confirmación de contraseña repite el nombre `password`; `AuthLayout` usa `p-19`, que no está en la escala de Tailwind del frontend. Se documentan para estudio, sin cambiarlos en esta tarea.

## 12. Cómo leer un error

Busca primero el primer error de consola, su archivo y línea. Varios mensajes de recarga pueden ser consecuencias del mismo problema.

| Mensaje | Qué revisar |
| --- | --- |
| `ReferenceError: ... is not defined` | Variable no declarada, no importada o no obtenida del contexto. |
| `does not provide an export named ...` | Nombre exacto y exportación nombrada/predeterminada. |
| `SyntaxError` | Comas, paréntesis, etiquetas, llaves y comillas/backticks. |
| Lista vacía sin excepción | Campos usados en filter y valores/tipos de los IDs. |
| No cambia el título | Si se llama a setCategoriaActual, no solo console.log. |
| Clic no responde en un área | Qué elemento tiene realmente onClick. |

La compilación del frontend pasó después de las correcciones anteriores. Eso no significa que todas las funciones pendientes estén implementadas ni que los archivos editados después mantengan necesariamente ese resultado. Esta tarea agrega documentación; no ejecuta despliegues ni cambia lógica.
