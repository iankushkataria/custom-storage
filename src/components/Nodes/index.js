import React from 'react';
import TopNode from './TopNode';

export default class Nodes extends React.Component {

  onClickExpand = (event) => {
    let currentOpenedId = parseInt(event.target.getAttribute('data-nodeid'));
    const nodeOpenedIds = this.props.nodeOpenedIds.filter(id => Number(id) !== Number(currentOpenedId));
    if (nodeOpenedIds.length === this.props.nodeOpenedIds.length) {
      nodeOpenedIds.push(Number(currentOpenedId));
    }
    this.props.setNodesField({ nodeOpenedIds });
  }

  onClickAddChild = (event) => {
    const addChildForId = parseInt(event.target.getAttribute('data-nodeid'));
    this.props.setNodesField({ addChildForId, showAddChildPopup: true });
  }

  onClickEditNode = (editingNode) => {
    this.props.setNodesField({ editingNode, showAddChildPopup: true });
  }

  render () {
    const { topNodes, childNodes, nodeOpenedIds } = this.props;

    return (
      <div>
        {
          topNodes.map(tn => (
            <TopNode
              key={`top-node-${tn.id}`}
              renderChilds={nodeOpenedIds.includes(tn.id)}
              nodeOpenedIds={nodeOpenedIds}
              childNodes={childNodes}
              onClickExpand={this.onClickExpand}
              onClickAddChild={this.onClickAddChild}
              onClickEditNode={this.onClickEditNode}
              node={tn}
            />
          ))
        }
      </div>
    );
  }
}
