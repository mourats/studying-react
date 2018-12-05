import React from 'react';

import Comment from './Comment'

export default class Post extends React.Component {
    state = {
        comments: [],
        newCommentText: ''
    };

    componentWillMount() {
        // O render vai ser executado, quer fazer algo antes?
        this.setState({ loading: true });
    }
    
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <form onSubmit={this.handSubmit}>
                    <input value={this.state.newCommentText} onChange={this.handTextChange} />
                    <button type="submit">Comentar</button>
                </form>

                {this.state.comments.map((comment, index) => { return <Comment key={index} text={comment.text} /> })}

            </div>
        );
    }

    componentDidMount() {
        // O render já executou, o que faremos agora? Chamar a API!
    }

    handSubmit =(e)=> {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        });
        this.setState({ newCommentText: '' });
        e.preventDefault();
    }

    handTextChange = (e) => {
        this.setState({ newCommentText: e.target.value });
    }
}