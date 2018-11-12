import React from 'react';

import Post from './Post'

export default class App extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello World!</h1>
            <Post title="Estou aprendendo React!"/>
            <Post title="Vou estudar mais sprint-boot!"/>
            <Post title="Tenho que aprender a mexer com MongoDB!"/>

            </div>
        );
    }
}