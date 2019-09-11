import React from 'react';
import TextInput from './TextInput';
import Modal from 'react-bootstrap/Modal';

export default class AddChildDialog extends React.Component {

  handleClose = () => {
    this.props.setNodesField({
      showAddChildPopup: false,
      addChildForId: null,
      editingNode: null,
    });
  }

  onSubmit = (name) => {
    if (this.props.addChildForId) {
      this.addNewChild(name);
    } else {
      this.editNode(name);
    }
  }

  editNode = (name) => {
    const { parentId, id } = this.props.editingNode;
    const object = { ...this.props.editingNode, name };
    if (parentId) {
      const childNodes = { ...this.props.childNodes };
      childNodes[parentId] = childNodes[parentId].map(nod => nod.id === id ? object : nod)
      this.props.setNodesField({ childNodes, showAddChildPopup: false, editingNode: null });
    } else {
      const topNodes = [ ...this.props.topNodes ].map(nod => nod.id === id ? object : nod);
      this.props.setNodesField({ topNodes, showAddChildPopup: false, editingNode: null });
    }
  }

  addNewChild = (name) => {
    const childNodes = { ...this.props.childNodes };
    if (!childNodes[this.props.addChildForId]) {
      childNodes[this.props.addChildForId] = [];
    }
    childNodes[this.props.addChildForId].push({ id: ++window.nodeId, name, parentId: this.props.addChildForId });
    this.props.setNodesField({
      childNodes,
      showAddChildPopup: false,
      addChildForId: null,
    });
  }

  render () {
    const { showAddChildPopup, editingNode } = this.props;
    return (
      <Modal show={showAddChildPopup} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new child</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextInput onSubmit={this.onSubmit} editingNode={editingNode} />
        </Modal.Body>
      </Modal>
    );
  }
}
