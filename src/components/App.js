import React from 'react';
import TextInput from './TextInput';
import Nodes from '../containers/Nodes';
import Dialog from '../containers/Dialog';

class App extends React.Component {

  addTopLevelNode = (name) => {
    const newNode = { id: ++window.nodeId, name };
    const topNodes = [...this.props.topNodes, newNode];
    this.props.setNodesField({ topNodes });
  }

  render () {

    return (
      <div className="App">
        <h2 className='my-5 p-2 shadow'>Your Custom Storage</h2>
        <div className="row">
          <div className="col-4">
            <TextInput onSubmit={this.addTopLevelNode} { ...this.props } />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Nodes />
          </div>
        </div>
        <Dialog />
      </div>
    );
  }
}

export default App;
