import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import getPopoverContent from './SelectedNodePopover';

function NodeMarkup (props) {

  const { onClick, onClickExpand, node, renderChilds, childNodes } = props;
  const hasChilds = (childNodes[node.id] && childNodes[node.id].length);
  const popoverContent = getPopoverContent(props);

  return (
    <div className="text-dark" onClick={onClick} data-nodeid={node.id}>
      <div className="d-flex">
        <h4 className="mx-3 cursor-pointer" onClick={onClickExpand} data-nodeid={node.id}>
          {hasChilds && <>{renderChilds ? '-' : '+'}</>}
        </h4>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popoverContent}
          rootClose={true}
        >
          <span className="cursor-pointer">{node.name.toUpperCase()}</span>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default NodeMarkup;
