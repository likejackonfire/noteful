import React from 'react';

export default class NoteSideBar extends React.Component {
    render() {
        return (
            <>
            <button onClick={() => this.props.history.goBack()}>
                Go back
            </button>
            <p>{this.props.folder.name}</p>
            </>
        );
    }
}