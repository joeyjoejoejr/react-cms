import React, { Component, PropTypes } from 'react';

class AddTemplateInput extends Component {
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          ref="name"
          name="name"
          placeholder="Template Name"
          value={this.state.name}
          onChange={this.handleChange.bind(this)} />
        <input
          type="text"
          ref="templateType"
          name="templateType"
          placeholder="Template Name"
          value={this.state.templateType}
          onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Add Template" />
      </form>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      templateType: this.props.templateType || ''
    };
  }

  handleChange (e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit (e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const templateType = this.refs.templateType.value;

    this.props.addTemplate({ name, templateType });
    this.setState({ name: '', templateType: '' });
  }
}

AddTemplateInput.propTypes = {
  addTemplate: PropTypes.func.isRequired
};

export default AddTemplateInput;
