import React, { PropTypes, Component } from 'react';
import Tab from 'react-bootstrap/lib/Tab';


class Notes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { 
            title, 
            content, 
            category, 
            currentActiveCategoryTab 
        } = this.props;

        return (
            <div>
                <p>note: { title }</p>
                {
                    (currentActiveCategoryTab === 0) ? <p>category: { category }</p> : null
                }
                <p>content: { content }</p>
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