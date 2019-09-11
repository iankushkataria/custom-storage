import { connect } from 'react-redux';
import App from '../components/App';
import { setNodesField } from '../actions/actionCreators';

const mapStateToProps = state => state.nodes

export default connect(mapStateToProps, { setNodesField })(App);
