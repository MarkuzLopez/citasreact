import React, { Component } from 'react';

class Veterinario extends Component { 

    deleteVeterinario = () =>  { 
        this.props.deleteVeterinario(this.props.info.idV)
    }

    render() { 
        const {domiclio, email, telefono, veterinario } =  this.props.info;
        return(
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">Veterinario: {veterinario} </h3>                     
                     <p className="card-text"> <span>Telefono: </span> {telefono} </p>
                     <p className="card-text"> <span>Email: </span> {email} </p>
                     <p className="card-text"> <span>Dirección: </span>  </p>
                     <p className="card-text"> {domiclio} </p>

                     <button onClick={this.deleteVeterinario} className="btn btn-danger">Eliminar Veterinario</button>
                </div>
            </div>
        )
    }
}

export default Veterinario;