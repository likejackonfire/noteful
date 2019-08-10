import React from 'react';

export default class Note extends React.Component {
    render() {
        return (
            <li>
                <h3>{this.props.name}</h3>
                <p>{this.props.modified}</p>
                <button>Delete</button>
            </li>
        );
    }
}