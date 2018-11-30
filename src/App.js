import React, { Component } from "react";
import "./App.css";
import Header from "./componentes/Header";
import AgregarCita from "./componentes/AgregarCitas";
import ListaCitas from "./componentes/ListaCitas";
import AgregarDatosV from "./componentes/AgregarDatosV";
import ListaVerinario from "./componentes/ListaVeterinario";

class App extends Component {
  state = {
    citas: [], 
    veterinario: []
  };

  componentDidMount() {
    console.log("Esta listo, (componentDidMount)");
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  // componentWillMount() {
  //   console.log('yo me ejecuto antes,(componentWillMount) ');
  // }

  // componentWillUnmount() {
  //   console.log('yo hasta que cierra el componente, (componentWillUnmount)');
  // }

  componentDidUpdate() {
    console.log("Algo cambio, (componentDidUpdate)");
    localStorage.setItem(
      "citas",
      JSON.stringify(this.state.citas) // para que se almacen de manera temporal en el localStorage
    );
  }

  crearVeterinario =  newVeterinario => { 
    const veterinario = [...this.state.veterinario, newVeterinario];
    console.log('Veterinario',veterinario);
    
    this.setState({ 
      veterinario : veterinario
    })    
  }

  crearCita = newCita => {
    const citas = [...this.state.citas, newCita]; // obteniendo una copia del arreglo y agregando el nuevo

    console.log("Desde app.js", citas);

    // para almacenar los arreglos 0,1,2,3...
    this.setState({
      citas: citas
    });
  };

  deleteVeterinario = idV => { 
    console.log(idV);
   
    const veterinarioActuales = [...this.state.veterinario];

    /// borrammos elemento del state, para Json se usa delete
    const veterinario = veterinarioActuales.filter(veterinario => veterinario.idV !== idV);

    //Actualizar el State 
    this.setState({
      veterinario
    })

  }

  borrarCita = id => {
    console.log(id);
    // obtener copia del state
    const citasActuales = [...this.state.citas];

    console.log("Antes...");
    console.log(citasActuales);

    // borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);

    console.log("Despues....");
    console.log(citas);

    // Actualizar el state
    this.setState({
      citas
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo={"Administrador de Pacientes de veterinaria"} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} 
             borrarCita={this.borrarCita} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <AgregarDatosV 
              crearVeterinario={this.crearVeterinario}
            />
          </div>
          <div className="col-md-6">
            <ListaVerinario veterinario={this.state.veterinario}
             deleteVeterinario={this.deleteVeterinario}  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
