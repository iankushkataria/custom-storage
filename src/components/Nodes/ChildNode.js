import React from 'react';
import NodeMarkup from './NodeMarkup';

function ChildNode (props) {

  const { node, nodeOpenedIds, renderChilds, childNodes } = props;
  return (
    <>
      <NodeMarkup {...props} renderChilds={nodeOpenedIds.includes(node.id)} />
      <div className="ml-5">
        {renderChilds && (
          (childNodes[node.id] || []).map(cn =>
            <div key={`top-child-${cn.id}`}>{cn.name}</div>)
        )}
      </div>
    </>
  );
}

export default ChildNode;
