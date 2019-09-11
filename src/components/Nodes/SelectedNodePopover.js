import React from 'react';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

function CustomPopover (props) {
  return (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.node.name}</Popover.Title>
      <Popover.Content>
        <Button
          className="my-2 d-block"
          onClick={props.onClickAddChild}
          data-nodeid={props.node.id}
          variant="outline-success"
          size="sm"
        >
          Add Child
        </Button>
        <Button
          className="my-2 d-block"
          onClick={() => props.onClickEditNode(props.node)}
          data-nodeid={props.node.id}
          size="sm"
          variant="outline-success"
        >
          Edit
        </Button>
      </Popover.Content>
    </Popover>
  );
};

export default CustomPopover;
