import React, { Component } from 'react';
import api from "../../services/api";

import './styles.css';

export default class Main extends Component {

    state = {
        students: []
    }

    componentDidMount() {
        this.loadStudents();
    }

    loadStudents = async () => {
        const response = await api.get('/aluno');

        this.setState({ students: response.data });
        console.log(response.data);
    };

    render() {

        const { students } = this.state;
        return (
            <div className="student-list">
                <h1> Hello! Eu tenho a api! </h1>
                <h2> Contagem de estudantes: {students.length}</h2>
                {students.map((student, index) => (
                    <article key={index}>
                    <strong>{student.nome}</strong>
                    <p>{student.matricula}</p>
                    <p>{student.email}</p>
                    <p>{student.periodoEntrada}</p>
                    <a target="_blank" rel="noopener noreferrer" href={"https://prematriculabackend.herokuapp.com/api/aluno/" + student.email}>Ver aluno na API</a>
                    </article>
                ))}
            </div>
        );
    }
}
