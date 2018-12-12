import React, { Component } from 'react';
import api from "../../services/api";

import './styles.css';

export default class PreMatricula extends Component {

    state = {
        preMatriculas: []
    }

    componentDidMount() {
        this.loadPreMatriculas();
    }

    loadPreMatriculas = async () => {
        const response = await api.get('/prematricula');

        this.setState({ preMatriculas: response.data });
        console.log(response.data);
    };

    render() {

        const { preMatriculas } = this.state;
        return (
            <div className="prematricula-list">
                {preMatriculas.map((preMatricula, index) => (
                    <article key={index}>
                        <strong>ID: {preMatricula.id}</strong>
                        <p>E-mail: {preMatricula.email}</p>
                        <p>Disciplinas: </p>
                        <ul>
                            {preMatricula.disciplina.map((disciplina, index) => (
                            <li key={index}>{disciplina.nome}</li>
                            ))}
                        </ul>
                        <a target="_blank" rel="noopener noreferrer" href={"https://prematriculabackend.herokuapp.com/api/prematricula/" + preMatricula.email}>Ver Pré-Matricula na API</a>
                    </article>
                ))}
            </div>
        );
    }
}
