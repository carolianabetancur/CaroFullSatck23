import Alert from './Alert';

const AlertExample = () => {
  return (
    <div className="alert alert-primary" role="alert">
      <Alert type="success">
        <strong key="success">¡Éxito!</strong>
      </Alert>
      <Alert type="warning">
        <strong key="warning">Advertencia</strong>
      </Alert>
      <Alert type="error">
        <strong key="error">Error</strong>
      </Alert>
    </div>
  );
};

export default AlertExample;
