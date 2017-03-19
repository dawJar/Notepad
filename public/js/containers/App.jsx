import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter.jsx'
import * as actions from '../actions'


const mapStateToProps = state => ({
    counter: state.counter
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);