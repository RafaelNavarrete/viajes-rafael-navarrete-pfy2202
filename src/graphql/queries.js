import { gql } from "@apollo/client";

export const OBTENER_OPCIONES_VIAJE = gql`
    query ObtenerOpcionesViaje($destinoId: ID!) {
        vuelos(destinoId: $destinoId) {
            id
            aerolinea
            precio
            fechaSalida
            fechaRegreso
            disponible
        }
        hoteles(destinoId: $destinoId) {
            id
            nombre
            estrellas
            precioNoche
            fechaDesde
            fechaHasta
            disponible
        }
    }
`;