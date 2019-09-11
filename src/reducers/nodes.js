import { SET_NODES_FIELD } from '../actions/constants';

const initialState = {
  topNodes: [],
  childNodes: {},
  nodeOpenedIds: [],
}

function nodes (state = initialState, action) {
  switch (action.type) {
    case SET_NODES_FIELD:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export default nodes;
