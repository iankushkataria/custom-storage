import { connect } from 'react-redux';
import Nodes from '../components/Nodes';
import { setNodesField } from '../actions/actionCreators';

const mapStateToProps = state => state.nodes

export default connect(mapStateToProps, { setNodesField })(Nodes);
