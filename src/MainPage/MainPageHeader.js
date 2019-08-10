import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage/MainPageHeader.css';

export default class MainPageHeader extends React.Component {
    render() {
        return (
            <div className="mainHeader">
                <Link to='/'>
                    <h1>Noteful</h1>
                </Link>
            </div>
        );
    }
}