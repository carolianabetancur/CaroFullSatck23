//Componente de clase, se hacen a partir de clases
import React from 'react';

// El interface define la forma de las props que el componente espera recibir
interface CompClaseProps {
  content: string;
}

//Estamos heredando de una super clase llama React.Component, que nos permite crear un componente de clase
class CompClase extends React.Component<CompClaseProps> {
  constructor(props: CompClaseProps) {
    super(props);
    console.log('Constructor de CompClase');
  }

  render() {
    return (
      <div>
        <h1>{this.props.content}</h1>
      </div>
    );
  }

  componentDidMount(): void {
    console.log('Componente montado');
  }
  componentDidUpdate(): void {
    console.log('Componente actualizado');
  }
  componentWillUnmount(): void {
    console.log('Componente desmontado');
  }
}

export default CompClase;
