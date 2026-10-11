# Carpetas, archivos y backend

## Dos aplicaciones en un repositorio

`frontend/` contiene la interfaz React que estás viendo en el navegador. `backend/` contiene Laravel. Cada una tiene sus dependencias y configuración. El frontend actual importa su catálogo local: que exista Laravel al lado no significa que React ya esté consultándolo.

```text
laravel-quiosco/
├── docs/                         Esta documentación
├── frontend/
│   ├── public/                   Recursos accesibles por URL
│   │   └── img/                  Imágenes del catálogo e iconos
│   ├── src/
│   │   ├── assets/helpers/       Funciones auxiliares
│   │   ├── components/           Piezas reutilizables de interfaz
│   │   ├── context/              Estado compartido y proveedor
│   │   ├── data/                 Catálogo local
│   │   ├── hooks/                Hook de acceso al contexto
│   │   ├── layouts/              Estructuras comunes de las páginas
│   │   └── views/                Páginas de las rutas
│   └── archivos de configuración
└── backend/
    ├── app/                      Clases de la aplicación PHP
    ├── bootstrap/                Arranque y proveedores
    ├── config/                   Configuraciones por servicio
    ├── database/                 Migraciones, factories y seeders
    ├── public/                   Entrada pública del servidor
    ├── resources/                Plantillas y recursos de Laravel
    ├── routes/                   Rutas web y comandos
    ├── storage/                  Logs, archivos y datos temporales
    └── tests/                    Pruebas PHP
```

## Archivos del frontend

| Archivo o carpeta | Función |
| --- | --- |
| `index.html` | Documento inicial; contiene `root` y carga `main.jsx`. |
| `src/main.jsx` | Monta React, el proveedor de contexto y el router. |
| `src/router.jsx` | Define las rutas y qué vistas aparecen en los layouts. |
| `src/context/QuioscoProvider.jsx` | Conserva categorías, categoría actual y booleano del modal; comparte funciones. |
| `src/hooks/useQuiosco.js` | Simplifica consumir ese contexto. |
| `src/layouts/Layout.jsx` | Distribuye Sidebar, Outlet y Resumen. |
| `src/layouts/AuthLayout.jsx` | Estructura compartida para Login y Registro. |
| `src/views/Inicio.jsx` | Filtra productos y crea sus tarjetas. |
| `src/views/Login.jsx` | Interfaz de inicio de sesión, sin conexión al servidor todavía. |
| `src/views/Registro.jsx` | Interfaz de registro, sin lógica de creación de cuenta todavía. |
| `src/components/Sidebar.jsx` | Logo, listado de categorías y botón Cancelar Orden. |
| `src/components/Categoria.jsx` | Icono, nombre, resaltado y selección de una categoría. |
| `src/components/Producto.jsx` | Imagen, nombre, precio y evento para alternar el estado del modal. |
| `src/components/Resumen.jsx` | Contenedor inicial del resumen, todavía solo texto. |
| `src/data/categorias.js` | Array de seis objetos con `id`, `nombre` e `icono`. |
| `src/data/productos.js` | Array de 59 objetos con `id`, `nombre`, `precio`, `imagen` y `categoria_id`. |
| `src/assets/helpers/index.js` | Exporta `formatearDinero`; usa USD. |
| `src/assets/logo.svg` | Logo importado por Sidebar. |
| `src/assets/vite.svg`, `hero.png` | Recursos de plantilla; no se importan en los componentes revisados. |
| `public/img/` | JPG de productos y SVG de categorías. Una URL `/img/cafe_01.jpg` sale de esta carpeta. |
| `public/favicon.svg` | Icono de la pestaña usado por index.html. |
| `public/icons.svg` | Recurso gráfico público; no se referencia en las vistas revisadas. |
| `src/index.css` | Entrada activa de Tailwind importada por main.jsx. |
| `src/App.css` | Estilos de plantilla para counter, hero, next-steps y otros selectores; no se importa en el código revisado. |
| `src/output.css` | Hoja con salida de estilos; no se importa desde main.jsx. No es la entrada de estilos activa. |
| `vite.config.js` | Activa el plugin React para Vite. |
| `tailwind.config.js` | Indica dónde buscar clases; no extiende el tema. |
| `postcss.config.js` | Procesa Tailwind durante el tratamiento del CSS. |
| `eslint.config.js` | Configura análisis de JavaScript, hooks y React Refresh. |
| `package.json` | Scripts y rangos de dependencias del frontend. |
| `package-lock.json` | Versiones resueltas y árbol de dependencias de npm. |
| `.gitignore` | Excluye dependencias, builds, logs y archivos locales del control de versiones. |
| `README.md` | Documento inicial del frontend; esta guía amplía la explicación en docs. |
| `node_modules/` | Dependencias instaladas, cuando existe; no es el código de negocio que debes editar. |
| `dist/` | Resultado de `npm run build`, cuando existe; se regenera desde el código fuente. |

El frontend declara React, React DOM, React Router y react-modal. React DOM conecta React con el navegador; React Router controla rutas; react-modal es una biblioteca para ventanas modales aún no usada por el layout revisado. ESLint, Vite, PostCSS y Tailwind participan en el desarrollo o compilación. Los paquetes `@types` ofrecen información de tipos al editor aunque tus archivos sean JavaScript.

## Backend: arranque y rutas

### `public/index.php`

Es el punto de entrada de las peticiones HTTP a Laravel. Importa `Application` y `Request`, guarda la hora inicial en `LARAVEL_START`, comprueba si hay un archivo de mantenimiento y lo incluye cuando existe. Después carga `vendor/autoload.php`, carga `bootstrap/app.php` y ejecuta:

```php
$app->handleRequest(Request::capture());
```

`Request::capture()` obtiene la petición actual; `handleRequest` la procesa. `require` carga un archivo; `__DIR__` representa la carpeta del archivo actual. Esto no es el `index.html` del frontend.

### `artisan`

Entrada de comandos PHP. Carga el autoloader y la aplicación como el punto de entrada web, pero usa `ArgvInput` para leer argumentos de terminal. `handleCommand` ejecuta el comando y `exit($status)` devuelve su código de salida. La primera línea permite invocarlo mediante un intérprete PHP disponible en el sistema.

### `bootstrap/app.php`

| Instrucción | Qué hace |
| --- | --- |
| `Application::configure(basePath: dirname(__DIR__))` | Configura la aplicación usando la carpeta backend como base. |
| `withRouting(...)` | Registra los archivos de rutas y la ruta de salud. |
| `web: .../routes/web.php` | Carga las rutas web. |
| `commands: .../routes/console.php` | Carga comandos de consola. |
| `health: '/up'` | Configura el endpoint de salud. |
| `withMiddleware(...)` | Punto para personalizar middleware; el cuerpo actual está vacío. |
| `withExceptions(...)` | Personaliza la representación de errores. |
| `shouldRenderJsonWhen(...)` | Indica cuándo responder errores como JSON. |
| `$request->is('api/*')` | Comprueba si la ruta tiene ese patrón. No crea rutas API. |
| `$request->expectsJson()` | Comprueba si la petición espera JSON. |
| `||` | Operador lógico «o»: basta una condición verdadera. |
| `create()` | Construye la aplicación configurada. |

### `bootstrap/providers.php` y `app/Providers/AppServiceProvider.php`

El primero devuelve una lista que registra `AppServiceProvider`. En el segundo, `register()` sirve para registrar servicios y `boot()` para inicializarlos cuando corresponde. Ambos métodos están vacíos en la versión revisada. Este proveedor PHP no comparte `categoriaActual` con React.

### `routes/web.php`

```php
Route::get('/', function () {
    return view('welcome');
});
```

`Route::get` registra una respuesta a GET `/` en el servidor Laravel. La función devuelve la plantilla `resources/views/welcome.blade.php`. Esta ruta es la página de bienvenida del backend, no el catálogo React.

### `routes/console.php`

Importa `Inspiring` y `Artisan`, registra el comando `inspire`, imprime una frase con `$this->comment(Inspiring::quote())` y define la descripción del comando mediante `purpose`. No participa en seleccionar productos.

### `app/Http/Controllers/Controller.php`

Clase base abstracta, todavía sin métodos. `abstract` significa que sirve como base para otras clases, no para instanciar directamente. No se encontraron controladores de categorías, productos o pedidos en el código revisado.

## Backend: datos

### `app/Models/User.php`

Representa usuarios para Eloquent y autenticación. `namespace App\Models` organiza el nombre de la clase. Las instrucciones `use` importan otras clases o traits.

| Código | Función |
| --- | --- |
| `#[Fillable(['name', 'email', 'password'])]` | Define los campos permitidos para asignación masiva. |
| `#[Hidden(['password', 'remember_token'])]` | Oculta esos campos al serializar el modelo. No elimina las columnas. |
| `class User extends Authenticatable` | Hereda comportamiento de usuario autenticable. |
| `use HasFactory, Notifiable` | Añade generación de registros mediante factories y notificaciones. |
| `protected function casts(): array` | Declara conversiones de atributos. |
| `'email_verified_at' => 'datetime'` | Trata la fecha como un valor de fecha y hora. |
| `'password' => 'hashed'` | Aplica el tratamiento de hash al atributo de contraseña. |

`=>` asocia claves y valores en un array PHP; no significa lo mismo que una función flecha de JavaScript. `->` accede a métodos o propiedades de un objeto PHP; `::` accede a miembros de clase. Los comentarios `/** ... */` ayudan a explicar y tipar, no se ejecutan.

### Migraciones en `database/migrations/`

Son clases anónimas que heredan `Migration`. `up()` aplica la estructura; `down()` la revierte. `Schema::create` crea una tabla, la función recibe un `Blueprint` llamado `$table`, y sus métodos declaran columnas. No se ejecutan por abrir el archivo en el editor.

| Archivo | Tablas que define |
| --- | --- |
| `0001_01_01_000000_create_users_table.php` | `users`, `password_reset_tokens`, `sessions`. |
| `0001_01_01_000001_create_cache_table.php` | `cache`, `cache_locks`. |
| `0001_01_01_000002_create_jobs_table.php` | `jobs`, `job_batches`, `failed_jobs`. |

Métodos que encontrarás:

| Método | Significado |
| --- | --- |
| `id()` | Clave identificadora autoincremental. |
| `string('name')` | Columna de texto corto. |
| `text`, `mediumText`, `longText` | Columnas de texto con distinta capacidad según el motor. |
| `integer`, `bigInteger` | Columnas enteras. |
| `unsignedInteger`, `unsignedSmallInteger` | Enteros declarados sin signo. |
| `timestamp` | Columna para fecha/hora. |
| `timestamps()` | Añade created_at y updated_at. |
| `rememberToken()` | Columna para recordar la autenticación. |
| `foreignId('user_id')` | Columna de identificador; en este código no va seguida de constrained, por lo que no declara por sí sola una restricción de clave foránea. |
| `nullable()` | Permite valor nulo. |
| `unique()` | Exige unicidad. |
| `primary()` | Establece clave primaria. |
| `index()` | Crea un índice para búsquedas. |
| `useCurrent()` | Usa la fecha/hora actual como valor predeterminado. |
| `Schema::dropIfExists(...)` | Elimina una tabla si existe al ejecutar la reversión. |

`users` contiene nombre, correo, contraseña y marcas temporales. `password_reset_tokens` guarda tokens de recuperación. `sessions` contiene datos de sesión, usuario, IP, agente de navegador y actividad. `cache` almacena valores temporales; `cache_locks`, bloqueos. `jobs` conserva trabajos pendientes; `job_batches`, lotes y contadores; `failed_jobs`, errores de trabajos.

No hay migraciones del catálogo ni del pedido en los archivos revisados. Los IDs de los productos JavaScript no vienen de estas migraciones.

### `database/factories/UserFactory.php`

`definition()` devuelve datos ficticios: `fake()->name()` crea un nombre, `unique()->safeEmail()` crea un correo de prueba único dentro del generador, `now()` produce una fecha y `Str::random(10)` un token aleatorio.

`static::$password ??= Hash::make('password')` calcula y conserva el hash en la propiedad estática cuando aún no tiene valor. `??=` asigna solo si el valor no está definido o es nulo. La contraseña literal es un dato de la factory de desarrollo.

`unverified()` devuelve un estado de factory que establece `email_verified_at` en `null`, para generar un usuario no verificado.

### `database/seeders/DatabaseSeeder.php`

`run()` crea un usuario de prueba mediante la factory y reemplaza su nombre y correo con los valores del archivo. La línea que generaría diez usuarios está comentada, por lo que no se ejecuta. `WithoutModelEvents` evita disparar eventos de modelos durante este sembrado.

## Backend: archivos de configuración

Las configuraciones son arrays PHP. `env('NOMBRE', valor)` consulta una variable de entorno y usa un valor de respaldo cuando corresponde. Los valores de `.env` no se copiaron ni se comprobaron en esta documentación, por lo que un valor predeterminado del archivo no demuestra la configuración efectiva de tu máquina.

| Archivo | Qué configura |
| --- | --- |
| `config/app.php` | Nombre, entorno, depuración, URL, zona horaria, idioma, cifrado y mantenimiento. |
| `config/auth.php` | Guard de sesión, proveedor de usuarios Eloquent, recuperación de contraseña y tiempos de espera. |
| `config/database.php` | Conexión por defecto, motores SQLite/MySQL/MariaDB/PostgreSQL/SQL Server, tabla de migraciones y Redis. |
| `config/cache.php` | Almacén de caché por defecto, alternativas como archivo/base de datos/Redis y prefijos. |
| `config/filesystems.php` | Discos local, público y S3, sus rutas y enlace público de storage. |
| `config/logging.php` | Canales de logs, archivo, rotación, severidad y destinos externos opcionales. |
| `config/mail.php` | Transporte de correo, servidores, alternativas y remitente. |
| `config/queue.php` | Conexiones de colas, reintentos, lotes y almacenamiento de fallos. |
| `config/services.php` | Referencias a variables de credenciales para servicios externos. |
| `config/session.php` | Almacenamiento, duración y opciones de cookie de sesión. |

Claves repetidas: `default` elige una configuración; `driver` el mecanismo; `host` y `port` el servidor; `database` o `table` el destino de datos; `username` y `password` las credenciales; `prefix` separa nombres; `connection` enlaza otra conexión; `path` una ruta; `level` la severidad de log. Una alternativa escrita en un array no significa que esté activa.

Funciones de rutas: `storage_path`, `database_path` y `public_path` construyen rutas dentro de esas carpetas. `Str::slug` transforma un texto en identificador simplificado; `explode` divide una cadena; `array_filter` filtra un array PHP. Las expresiones `(bool)`, `(int)` y `(string)` convierten tipos.

## Recursos, dependencias y servicios de Laravel

| Archivo o carpeta | Función |
| --- | --- |
| `composer.json` | Requisitos PHP y scripts. Declara PHP ^8.3 y Laravel ^13.17; son rangos, no prueba de la versión instalada. |
| `composer.lock` | Fija las versiones resueltas por Composer. |
| `vendor/` | Dependencias PHP instaladas y autoloader. |
| `package.json` | Dependencias de recursos del backend; son distintas de las del frontend. |
| `package-lock.json` | Versiones resueltas de sus dependencias npm. |
| `vite.config.js` | Compila resources/css/app.css y resources/js/app.js; activa Laravel, Tailwind y fuente Instrument Sans. |
| `resources/css/app.css` | Importa Tailwind y declara fuentes de detección de clases y tipografía. Aquí se usa la configuración del backend, con Tailwind 4. |
| `resources/js/app.js` | Archivo inicial de JS; actualmente contiene un comentario sin lógica. |
| `resources/views/welcome.blade.php` | Plantilla de bienvenida de Laravel, con HTML/Blade, estilos y elementos gráficos de la plantilla; no es Inicio.jsx. |
| `public/.htaccess` | Configuración Apache de acceso y reescritura para el punto de entrada público. |
| `public/robots.txt` | Instrucciones para rastreadores; el archivo revisado no declara rutas prohibidas. |
| `public/favicon.ico` | Icono de la página del backend. |
| `storage/app/private`, `storage/app/public` | Almacenamiento privado y público de archivos. |
| `storage/framework` | Sesiones, caché, vistas compiladas y archivos de pruebas. |
| `storage/logs` | Registros de eventos del servidor. |
| `bootstrap/cache` | Archivos de caché de arranque; no son código del catálogo. |
| `.gitignore` | Excluye .env, vendor, builds y otros archivos locales. |
| `.gitattributes` | Reglas de Git para tratar archivos. |
| `.editorconfig` | Define UTF-8, saltos LF, espacios e indentación, con excepciones por tipo de archivo. |
| `.npmrc` | Configuración local del gestor npm. |
| `.env`, `.env.example` | Configuración local y plantilla, cuando existen; no son código de componentes. |
| `AGENTS.md`, `CLAUDE.md` | Instrucciones para asistentes de desarrollo; no se ejecutan en la aplicación. |
| `README.md` | Documentación base del backend. |
| Archivos `.gitignore` internos | Mantienen carpetas y reglas de exclusión para su contenido generado. |

### `compose.yaml`

Define servicios Docker, no demuestra que estén ejecutándose:

- `laravel.test`: entorno de la aplicación, con runtime Sail 8.5.
- `mysql`: base de datos.
- `redis`: almacenamiento rápido para usos como caché o colas.
- `meilisearch`: motor de búsqueda.
- `mailpit`: captura correo en desarrollo.
- `selenium`: navegador para automatización.

`build` indica cómo crear la imagen; `image`, qué imagen usar; `ports`, qué puertos publicar; `environment`, variables; `volumes`, almacenamiento o carpetas montadas; `networks`, conectividad; `depends_on`, dependencias de arranque; `healthcheck`, comprobación de salud. Los volúmenes nombrados conservan datos fuera del contenedor. `${VARIABLE:-valor}` usa un valor de respaldo. El hecho de declarar todos estos servicios no significa que el catálogo local los necesite.

### Pruebas

`tests/TestCase.php` hereda el soporte de pruebas de Laravel. `tests/Feature/ExampleTest.php` solicita GET `/` y espera HTTP 200. `tests/Unit/ExampleTest.php` comprueba que `true` sea verdadero: es una prueba de plantilla, no del quiosco.

`phpunit.xml` agrupa Unit y Feature, carga el autoloader y configura un entorno de pruebas con correo y caché en memoria, entre otros valores. No hay pruebas funcionales del filtro React en esos archivos.

## Comandos del frontend

Desde la raíz del repositorio:

```bash
cd frontend
npm run dev
```

Vite imprime la URL disponible. `npm run build` compila a `dist`; `npm run preview` permite revisar ese resultado; `npm run lint` ejecuta ESLint. La compilación valida transformación y resolución de módulos, pero no prueba todos los clics ni todas las reglas de lint.

Los scripts de Laravel están definidos en su propio composer.json. Algunos instalan dependencias o ejecutan migraciones: no son necesarios para leer esta documentación ni para explicar el filtro local. No se ejecutaron como parte de esta tarea.
