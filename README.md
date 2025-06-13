# Product Search App

Simple buscador de productos construido con **Next.js** (React + TypeScript) para el frontend y **Express** (TypeScript) para el backend.

## Características

* Búsqueda instantánea de un catálogo ficticio (sin dependencias externas).
* Renderizado híbrido (SSR/CSR) con Next.js.
* API REST en Express que sirve los datos de producto directamente desde memoria.
* Monorepo con un solo comando para desarrollo.

## Requisitos

* **Node.js v20** o superior
* **npm** (incluido con Node)

## Instalación y ejecución

```bash
# Clona el repositorio
git https://github.com/Ljerson02/mini-meli.git
cd product-search-app

# Instala dependencias de todo el monorepo
npm install

# Inicia entorno de desarrollo
npm run dev
```

La aplicación estará disponible en **[http://localhost:8080](http://localhost:8080)**.

## Scripts disponibles

| Comando         | Descripción                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Arranca backend y frontend en modo desarrollo. |

## Estructura del proyecto

```
/
├── apps/
│   ├── web/        # Next.js (React + TS)
│   └── api/        # Express + TS
├── package.json    # Scripts y dependencias raíz
└── ...
```

## Tecnologías principales

* Next.js 14
* React 18
* TypeScript
* Express.js 5 (beta)

## Licencia

MIT
