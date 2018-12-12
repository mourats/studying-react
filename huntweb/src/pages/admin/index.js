import React, { Component } from 'react';
import api from "../../services/api";

import './styles.css';

export default class Admin extends Component {

    state = {
        admins: []
    }

    componentDidMount() {
        this.loadAdmin();
    }

    loadAdmin = async () => {
        const response = await api.get('/admin');

        this.setState({ admins: response.data });
        console.log(response.data);
    };

    render() {

        const { admins } = this.state;
        return (
            <div className="admin-list">
                {admins.map((admin, index) => (
                    <article key={index}>
                    <strong>E-mail: {admin.email}</strong>
                    </article>
                ))}
            </div>
        );
    }
}
