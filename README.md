# Agencia de Viajes

Aplicación web para explorar destinos y consultar vuelos y hoteles. Proyecto de la actividad sumativa "Integrando nuestro frontend con backend" (Desarrollo Frontend II, Duoc UC).

## Tecnologías
- React + Vite
- React Router (HashRouter)
- Tailwind CSS
- MSW (Mock Service Worker) para simular el backend
- API REST mock: listado y detalle de destinos
- API GraphQL mock con Apollo Client: vuelos y hoteles por destino

## Funcionalidades
- Listado de destinos con país y actividades populares (REST), con buscador
- Detalle de destino con vuelos y hoteles: precios, fechas y disponibilidad (GraphQL)
- Filtro para mostrar solo opciones disponibles
- Estados de carga y de error
- Diseño responsive

## Instalación y ejecución
1. Clonar el repositorio: `git clone https://github.com/RafaelNavarrete/viajes-rafael-navarrete-pfy2202.git`
2. Entrar a la carpeta: `cd viajes-rafael-navarrete-pfy2202`
3. Instalar dependencias: `npm install`
4. Ejecutar: `npm run dev` y abrir http://localhost:5173
5. Publicar en GitHub Pages: `npm run deploy`

## Cómo usar la aplicación
1. En Inicio, pulsar "Ver destinos".
2. Elegir un destino y pulsar "Ver vuelos y hoteles".
3. Revisar las opciones y, si se desea, filtrar por disponibilidad.

## Estructura
- `src/mocks`: datos y handlers de MSW (REST y GraphQL)
- `src/services`: acceso a datos REST
- `src/graphql`: consultas GraphQL
- `src/components`: componentes reutilizables
- `src/pages`: vistas de la aplicación
- `src/utils`: funciones de formato

## Repositorio
https://github.com/RafaelNavarrete/viajes-rafael-navarrete-pfy2202

## Aplicación publicada
https://rafaelnavarrete.github.io/viajes-rafael-navarrete-pfy2202/

## Oryebas en navegadores
| Navegador | Destinos (REST) | Vuelos y hoteles (GraphQL) | Navegación | Resultado |
|---|---|---|---|---|
| Chrome | Correcto | Correcto | Correcto | Sin errores |
| Brave | Correcto | Correcto | Correcto | Sin errores |
| Opera | Correcto | Correcto | Correcto | Sin errores |