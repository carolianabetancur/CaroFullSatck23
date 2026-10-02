// Se puede crear un componente de función con una funcion de flecha o con una función normal.
const CompFunction = (props: { content: string }) => {
  return <h1>{props.content}</h1>;
};
export default CompFunction;
