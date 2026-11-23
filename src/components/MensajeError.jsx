export default function MensajeError({ mensaje }) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-center">
      {mensaje}
    </div>
  );
}