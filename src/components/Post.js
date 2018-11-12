import React from 'react';

import Comment from './Comment'

export default class Post extends React.Component {

    constructor(pros) {

        super(pros);

        this.state = {
            comments: [],
            newCommentText: ''
        };

        this.handSubmit = this.handSubmit.bind(this);
        this.handTextChange = this.handTextChange.bind(this);
    }

    handSubmit(e){
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        });

        this.setState( {newCommentText: ''});
        e.preventDefault();
    }

    handTextChange(e){
        this.setState({ newCommentText: e.target.value});
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <form onSubmit={this.handSubmit}>
                    <input value={this.state.newCommentText} onChange={this.handTextChange}/>
                    <button type="submit">Comentar</button>
                </form>

                {this.state.comments.map((comment, index) => { return <Comment key={index} text={comment.text} /> })}

            </div>
        );
    }
}