const Alert = ({ mensaje, color }) => {
  // Renderización del componente Alert

  return <div className={`alert alert-${color}`}>{mensaje}</div>;
};

export default Alert;
