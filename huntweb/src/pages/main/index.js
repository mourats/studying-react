import React, { Component } from 'react';
import api from "../../services/api";

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
        return (
            <div className="student-list">
                <h1> Hello! Eu tenho a api! </h1>
                <h2> Contagem de estudantes: {this.state.students.length}</h2>
                {this.state.students.map((student, index) => (
                    <h3 key={index}>{student.nome}</h3>
                ))}
            </div>
        );
    }
}
