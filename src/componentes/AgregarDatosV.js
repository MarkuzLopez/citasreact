import React, { Component } from 'react';
import uuid from 'uuid';

class AgregarDatosV extends Component {

    /// variables para recibir datos 

    nombreVeterinarioRef = React.createRef();
    telefonoRef = React.createRef();
    emailRef = React.createRef();
    domicilioRef = React.createRef();

    state = {
        error: false
    }

    guardarVeterinario = evnt => {
        evnt.preventDefault();
        // console.log(this.nombreVeterinarioRef.current.value);
        const veterinario = this.nombreVeterinarioRef.current.value,
            telefono = this.telefonoRef.current.value,
            email = this.emailRef.current.value,
            domicilio = this.domicilioRef.current.value;
        if (veterinario === '' || telefono === '' || email === '' || domicilio === '') {

            this.setState({
                error: true
            })
        } else {

            const nuevoVeterinario = {
                idV: uuid(),
                veterinario,
                telefono,
                email,
                domicilio
            }
            this.props.crearVeterinario(nuevoVeterinario);

            evnt.currentTarget.reset();

            this.setState({
                error: false
            })
        }
    }

    render() {

        const erroExiste = this.state.error;

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agregar Datos de Veterinario</h2>
                    <form onSubmit={this.guardarVeterinario} >
                        <div className="form-group row" >
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Veterinario</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.nombreVeterinarioRef} className="form-control" placeholder="nombre del Medico" />
                            </div>
                        </div>
                        <div className="form-group row" >
                            <label className="col-sm-4 col-lg-2 col-form-label">Telefono</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.telefonoRef} className="form-control" placeholder="55-55-66-77-88" />
                            </div>
                        </div>
                        <div className="form-group row" >
                            <label className="col-sm-4 col-lg-2 col-form-label">Email</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="email" ref={this.emailRef} className="form-control" placeholder="mar1info2@gmail" />
                            </div>
                        </div>
                        <div className="form-group row" >
                            <label className="col-sm-4 col-lg-2 col-form-label">Domicilio</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.domicilioRef} className="form-control" placeholder="Domiclio " />
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Guardar</button>
                            </div>
                        </div>
                    </form>
                    {
                        erroExiste ? <div className="alert alert-danger text-center">
                            Todos los daos del veterinario son obligatorios</div> : ''
                    }
                </div>
            </div>
        );
    }
}

export default AgregarDatosV;