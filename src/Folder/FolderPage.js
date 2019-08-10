import React from 'react';
import MainPageHeader from './MainPage/MainPageHeader.js';
import NoteList from './NoteList.js';
import FolderSideBar from './FolderSideBar';

export default class Folder extends React.Component {
    render() {
        const filterList = this.props.notes.filter(
            note => note.folderId === this.props.match.params.folderId
        )
        const folderList =this.props.folders;

        return (
            <>
            <MainPageHeader />
            <FolderSideBar folderList={folderList}/>
            <NoteList notes = {filterList} />
            <button>Add Note</button>
            </>
        );
    }

}