import { http, graphql, HttpResponse, delay } from "msw";
import { destinos, vuelos, hoteles } from "./data";

export const handlers = [
  // ===== FASE 2: REST =====

  // Lista de todos los destinos
  http.get("*/api/destinos", async () => {
    await delay(500); // simula la demora de un servidor real
    return HttpResponse.json(destinos);
  }),

  // Un destino por id (el :id llega en params)
  http.get("*/api/destinos/:id", async ({ params }) => {
    await delay(300);
    const destino = destinos.find((d) => d.id === params.id);
    if (!destino) {
      return HttpResponse.json(
        { mensaje: "Destino no encontrado" },
        { status: 404 }
      );
    }
    return HttpResponse.json(destino);
  }),

  // ===== FASE 3: GRAPHQL =====

  // Coincide con la query llamada ObtenerOpcionesViaje
  graphql.query("ObtenerOpcionesViaje", async ({ variables }) => {
    await delay(600);
    const { destinoId } = variables;

    const existe = destinos.some((d) => d.id === destinoId);
    if (!existe) {
      return HttpResponse.json({
        errors: [{ message: "Destino no encontrado" }],
      });
    }

    return HttpResponse.json({
      data: {
        vuelos: vuelos.filter((v) => v.destinoId === destinoId),
        hoteles: hoteles.filter((h) => h.destinoId === destinoId),
      },
    });
  }),
];