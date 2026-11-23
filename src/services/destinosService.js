export async function obtenerDestinos() {
  const respuesta = await fetch("/api/destinos");
  if (!respuesta.ok) {
    throw new Error("No se pudieron cargar los destinos");
  }
  return respuesta.json();
}

export async function obtenerDestino(id) {
  const respuesta = await fetch(`/api/destinos/${id}`);
  if (!respuesta.ok) {
    throw new Error("No se encontró el destino solicitado");
  }
  return respuesta.json();
}