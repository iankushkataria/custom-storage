import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class TextInput extends React.Component {

  state = {
    text: '',
  }

  componentDidMount () {
    if (this.props.editingNode) {
      this.setState({ text: this.props.editingNode.name });
    }
  }

  onChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  }

  onSubmit = () => {
    if (!this.state.text) return;
    this.props.onSubmit(this.state.text);
    this.setState({ text: ' ' });
  }

  render () {
    return (
      <Form>
        <label>You can use max 4 characters/numbers for each level's name</label>
        <InputGroup className="mb-3 ml-2">
          <FormControl
            autoFocus
            type="text"
            onChange={this.onChange}
            value={this.state.text ? this.state.text : ''}
            maxLength="4"
          />
          <InputGroup.Append>
            <Button onClick={this.onSubmit} variant="success">
              {this.props.editingNode ? 'Submit' : 'Add'}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}
