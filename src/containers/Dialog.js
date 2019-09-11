import { connect } from 'react-redux';
import Dialog from '../components/Dialog';
import { setNodesField } from '../actions/actionCreators';

const mapStateToProps = state => state.nodes

export default connect(mapStateToProps, { setNodesField })(Dialog);
