import React, { cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Notepad from '../components/Notepad.jsx';


const mapStateToProps = state => ({
    anyNotes: state.fetchNotes.anyNotes,
    userNotes: state.fetchNotes.notes
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notepad);