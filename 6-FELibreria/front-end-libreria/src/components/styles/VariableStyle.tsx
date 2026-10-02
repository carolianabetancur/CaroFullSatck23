import './StylesFile.css';

const styleParagraph = {
  backgroundColor: '#f0f0f0',
  color: '#333',
  padding: '10px',
  borderRadius: '5px',
};
const VariableStyle = () => {
  return (
    <>
      <h1>Variable Style</h1>
      <p style={styleParagraph}>This is a paragraph with variable styles.</p>
    </>
  );
};
export default VariableStyle;
