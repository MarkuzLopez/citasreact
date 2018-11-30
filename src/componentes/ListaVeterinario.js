import React, { Component } from 'react';
import Veterinario from './Veterinario';

class ListaVerinario extends Component { 
    render() { 
        const veterinario  = this.props.veterinario;

        const titulo = Object.keys( veterinario).length === 0 ? 'No hay Veterinario' : 'Lista de Veterinarios';
        return (
            <div className="card mt-5">
               <div className="card-body">
                 <h2 className="card-title text-center">{titulo}</h2>
                  <div className="lista-citas" >
                 { 
                     Object.keys(this.props.veterinario).map( datos => (
                        <Veterinario 
                            key={datos}
                            info={this.props.veterinario[datos]}
                            deleteVeterinario={this.props.deleteVeterinario}
                        />
                     ))
                 }                   
                  </div>    
               </div>
            </div>
        );
    }
}

export default ListaVerinario;