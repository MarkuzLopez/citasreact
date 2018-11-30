import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class ListaCitas extends Component {
    render() {
        const citas = this.props.citas;
        // console.log(Object.keys(citas).length); para contar el numero de areglos qiue hay

        const mensaje = Object.keys(citas).length === 0 ? '¡No hay Citas!' : 'Administra tus Citas Aquí';

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {
                            Object.keys(this.props.citas).map(cita => (
                                // etiqueta html para pasar los datos 
                                <Cita
                                    key={cita}
                                    info={this.props.citas[cita]}
                                    borrarCita={this.props.borrarCita}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = { 
    citas : PropTypes.array.isRequired,
    borrarCita : PropTypes.func.isRequired
}

export default ListaCitas;