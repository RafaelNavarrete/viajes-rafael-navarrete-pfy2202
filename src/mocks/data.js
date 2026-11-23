export const destinos = [
  { id: "1", nombre: "Cusco", pais: "Perú", emoji: "🏔️", actividades: ["Machu Picchu", "Valle Sagrado", "Gastronomía andina"] },
  { id: "2", nombre: "Buenos Aires", pais: "Argentina", emoji: "💃", actividades: ["Tango", "Parrilladas", "Barrio de San Telmo"] },
  { id: "3", nombre: "Río de Janeiro", pais: "Brasil", emoji: "🏖️", actividades: ["Playa de Copacabana", "Cristo Redentor", "Pan de Azúcar"] },
  { id: "4", nombre: "Cancún", pais: "México", emoji: "🌴", actividades: ["Snorkel", "Chichén Itzá", "Isla Mujeres"] },
  { id: "5", nombre: "Madrid", pais: "España", emoji: "🏛️", actividades: ["Museo del Prado", "Parque del Retiro", "Tapas"] },
];

export const vuelos = [
  { __typename: "Vuelo", id: "v1", destinoId: "1", aerolinea: "LATAM", origen: "Santiago", precio: 280000, fechaSalida: "2027-01-15", fechaRegreso: "2027-01-22", disponible: true },
  { __typename: "Vuelo", id: "v2", destinoId: "1", aerolinea: "Sky Airline", origen: "Santiago", precio: 245000, fechaSalida: "2027-02-05", fechaRegreso: "2027-02-12", disponible: false },
  { __typename: "Vuelo", id: "v3", destinoId: "2", aerolinea: "Aerolíneas Argentinas", origen: "Santiago", precio: 190000, fechaSalida: "2027-01-10", fechaRegreso: "2027-01-17", disponible: true },
  { __typename: "Vuelo", id: "v4", destinoId: "2", aerolinea: "LATAM", origen: "Santiago", precio: 205000, fechaSalida: "2027-02-14", fechaRegreso: "2027-02-20", disponible: true },
  { __typename: "Vuelo", id: "v5", destinoId: "3", aerolinea: "LATAM", origen: "Santiago", precio: 420000, fechaSalida: "2027-01-20", fechaRegreso: "2027-01-30", disponible: true },
  { __typename: "Vuelo", id: "v6", destinoId: "3", aerolinea: "Gol", origen: "Santiago", precio: 395000, fechaSalida: "2027-03-01", fechaRegreso: "2027-03-10", disponible: false },
  { __typename: "Vuelo", id: "v7", destinoId: "4", aerolinea: "Avianca", origen: "Santiago", precio: 650000, fechaSalida: "2027-02-01", fechaRegreso: "2027-02-10", disponible: true },
  { __typename: "Vuelo", id: "v8", destinoId: "4", aerolinea: "LATAM", origen: "Santiago", precio: 690000, fechaSalida: "2027-03-12", fechaRegreso: "2027-03-20", disponible: true },
  { __typename: "Vuelo", id: "v9", destinoId: "5", aerolinea: "Iberia", origen: "Santiago", precio: 880000, fechaSalida: "2027-01-25", fechaRegreso: "2027-02-08", disponible: true },
  { __typename: "Vuelo", id: "v10", destinoId: "5", aerolinea: "LATAM", origen: "Santiago", precio: 910000, fechaSalida: "2027-03-05", fechaRegreso: "2027-03-19", disponible: false },
];

export const hoteles = [
  { __typename: "Hotel", id: "h1", destinoId: "1", nombre: "Hotel Inti Cusco", estrellas: 4, precioNoche: 75000, fechaDesde: "2027-01-15", fechaHasta: "2027-01-22", disponible: true },
  { __typename: "Hotel", id: "h2", destinoId: "1", nombre: "Hostal Plaza de Armas", estrellas: 3, precioNoche: 38000, fechaDesde: "2027-01-15", fechaHasta: "2027-02-12", disponible: true },
  { __typename: "Hotel", id: "h3", destinoId: "2", nombre: "Hotel Palermo Soho", estrellas: 4, precioNoche: 68000, fechaDesde: "2027-01-10", fechaHasta: "2027-01-17", disponible: true },
  { __typename: "Hotel", id: "h4", destinoId: "2", nombre: "Hostel San Telmo", estrellas: 2, precioNoche: 22000, fechaDesde: "2027-01-10", fechaHasta: "2027-02-20", disponible: false },
  { __typename: "Hotel", id: "h5", destinoId: "3", nombre: "Hotel Copacabana Beach", estrellas: 5, precioNoche: 120000, fechaDesde: "2027-01-20", fechaHasta: "2027-01-30", disponible: true },
  { __typename: "Hotel", id: "h6", destinoId: "3", nombre: "Pousada Ipanema", estrellas: 3, precioNoche: 45000, fechaDesde: "2027-01-20", fechaHasta: "2027-03-10", disponible: true },
  { __typename: "Hotel", id: "h7", destinoId: "4", nombre: "Resort Caribe Azul", estrellas: 5, precioNoche: 140000, fechaDesde: "2027-02-01", fechaHasta: "2027-02-10", disponible: true },
  { __typename: "Hotel", id: "h8", destinoId: "4", nombre: "Hotel Zona Hotelera", estrellas: 4, precioNoche: 85000, fechaDesde: "2027-02-01", fechaHasta: "2027-03-20", disponible: false },
  { __typename: "Hotel", id: "h9", destinoId: "5", nombre: "Hotel Gran Vía", estrellas: 4, precioNoche: 110000, fechaDesde: "2027-01-25", fechaHasta: "2027-02-08", disponible: true },
  { __typename: "Hotel", id: "h10", destinoId: "5", nombre: "Hostal Retiro", estrellas: 3, precioNoche: 60000, fechaDesde: "2027-01-25", fechaHasta: "2027-03-19", disponible: true },
];