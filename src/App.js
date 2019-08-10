import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage.js';
import FolderPage from './Folder/FolderPage';
import NotePage from './Note/NotePage';
import './App.css';

class App extends Component {

  state = this.props.data;  
 

  render() {
  return (
    <div className='App'>
      
      <Route
      exact
      path='/'
      render= {(props)=>
        <MainPage 
        notes={this.state.notes}
        folders={this.state.folders}/>
      } 
      />

      <Route
      exact
      path="/folders/:folderId"

      render = {(props) =>
      <FolderPage
      notes={this.state.notes}
      folders={this.state.folders}
      match={props.match}/>}
      />

      <Route
      exact
      path="/notes/:noteId"

      render = {(props) =>
      <NotePage
      notes={this.state.notes}
      folders={this.state.folders}
      history={props.history}
      match={props.match}/>} />


      
    </div>
  );
}}

export default App;