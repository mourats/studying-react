import React, { Component } from 'react';
import api from "../../services/api";

import './styles.css';

export default class Dis extends Component {

    state = {
        courses: []
    }

    componentDidMount() {
        this.loadCourses();
    }

    loadCourses = async () => {
        const response = await api.get('/disciplina');

        this.setState({ courses: response.data });
        console.log(response.data);
    };

    render() {

        const { courses } = this.state;
        return (
            <div className="courses-list">
                {courses.map((course, index) => (
                    <article key={index}>
                    <strong>Nome: {course.nome}</strong>
                    <p>Créditos: {course.numCreditos}</p>
                    <p>Carga Horária: {course.cargaHoraria}</p>
                    <a target="_blank" rel="noopener noreferrer" href={"https://prematriculabackend.herokuapp.com/api/disciplina/" + course.codigo}>Ver disciplina na API</a>
                    </article>
                ))}
            </div>
        );
    }
}
