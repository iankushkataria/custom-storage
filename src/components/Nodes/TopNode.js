import React from 'react';
import NodeMarkup from './NodeMarkup';
import ChildNode from './ChildNode';

function TopNode (props) {

  const { node, childNodes, renderChilds, nodeOpenedIds } = props;
  return (
    <>
      <NodeMarkup {...props} renderChilds={nodeOpenedIds.includes(node.id)} />
      <div className="ml-5">
        {renderChilds && (
          (childNodes[node.id] || []).map(cn =>
            <ChildNode
              {...props}
              key={`top-child-${cn.id}`}
              renderChilds={nodeOpenedIds.includes(cn.id)}
              node={cn}
            />)
        )}
      </div>
    </>
  );
}

export default TopNode;
