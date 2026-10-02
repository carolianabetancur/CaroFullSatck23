import styled from 'styled-components';

const AlertContainer = styled.div`
  top: 0;
  left: 0;
  width: 40%;
  margin: 10px auto;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  border: 1px solid;
`;

const AlertMessage = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

const Alert = ({
  type,
  children,
}: {
  type: 'success' | 'warning' | 'error';
  children: React.ReactNode;
}) => {
  const alertColor = {
    success: 'green',
    warning: 'orange',
    error: 'red',
  }[type];

  return (
    <AlertContainer style={{ borderColor: alertColor || 'gray' }}>
      <AlertMessage>
        <h2>{type}</h2>
        {children}
      </AlertMessage>
    </AlertContainer>
  );
};

export default Alert;
