import React, { PropTypes, Component } from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Notes from './Notes.jsx';


class NotepadTabs extends Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        let { currentActiveCategoryTab } = this.props;
        this.setVisibleNotes(currentActiveCategoryTab);
    }

    handleSelect(event) {
        this.setVisibleNotes(event);
    }

    setVisibleNotes(indexOfCurrentVisibleTab) {
        let { 
            setActiveNotesOfCurrentCategory,
            userNotes,
            userNoteCategories
        } = this.props;
        
        setActiveNotesOfCurrentCategory(indexOfCurrentVisibleTab, 
                                    userNotes,
                                    userNoteCategories);
    }
    
    render() {
        let { 
            userNoteCategories, 
            currentActiveCategoryTab,
            notesOfCurrentActiveTab,
            ...otherProps 
        } = this.props;

        let tabsToRender = userNoteCategories.map((category, i) => 
            <Tab 
                eventKey={ i } 
                title={ category }
            >
                <Notes 
                    filteredNotes={ notesOfCurrentActiveTab } 
                    currentActiveCategoryTab={ currentActiveCategoryTab }
                    { ...otherProps }
                />
            </Tab>
        );

        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={ currentActiveCategoryTab }
                onSelect={ this.handleSelect }
            >
                { tabsToRender }
            </Tabs>
        );
    }
}

NotepadTabs.propTypes = {
    notesOfCurrentActiveTab: PropTypes.arrayOf(PropTypes.object.isRequired),
    userNoteCategories: PropTypes.arrayOf(PropTypes.string.isRequired),
    setActiveNotesOfCurrentCategory: PropTypes.func.isRequired,
    userNotes: PropTypes.arrayOf(PropTypes.object.isRequired),
    currentActiveCategoryTab: PropTypes.number.isRequired,
};

export default NotepadTabs;