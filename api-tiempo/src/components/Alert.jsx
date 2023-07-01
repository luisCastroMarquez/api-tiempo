//Componente de alerta que muestra un mensaje en un estilo de alerta específico.
const Alert = ({ mensaje, color }) => {
  // Renderización del componente Alert

  return <div className={`alert alert-${color}`}>{mensaje}</div>;
};

export default Alert;
