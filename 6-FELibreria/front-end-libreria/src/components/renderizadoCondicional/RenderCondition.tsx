const sesion = false;

const RenderCondition = () => {
  return (
    <>{sesion ? <h3>Sesion Iniciada</h3> : <h3>No hay sesion iniciada</h3>}</>
  );
};

export default RenderCondition;
