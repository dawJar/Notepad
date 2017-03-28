import React, { PropTypes, Component } from 'react';
import Note from './Note.jsx';


class Notes extends Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.filteredNotes !== nextProps.filteredNotes;
    }

    render() {
        let { filteredNotes, ...otherProps } = this.props;
        let notesToRender = filteredNotes.map(note => 
            <Note 
                noteId={ note._id }
                title={ note.title }
                category={ note.category }
                content={ note.content }
                panelStyle={ note.importance }
                filteredNotes={ filteredNotes }
                { ...otherProps }
            />
        );

        return (
            <div>
                { notesToRender }
            </div>
        );
    }
}

// Notes.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default Notes;