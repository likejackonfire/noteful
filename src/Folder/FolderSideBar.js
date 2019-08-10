import React from 'react';
import FolderList from './Folder/FolderList';

export default class FolderSideBar extends React.Component {

    render() {
        return (
            <>
            <FolderList folders={this.props.folderList}/>
            <button>Add Folder</button>
            </>
        )
    }
}
