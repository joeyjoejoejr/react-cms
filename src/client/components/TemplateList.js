import React, { Component, PropTypes } from 'react';

class TemplateList extends Component {
  render () {
    let templates = [];
    for(let key in this.props.templates) {
      let template = this.props.templates[key];
      templates.push(
        <li key={template.id}>
          <h2>{template.name}</h2>
          <p>Template Type: {template.templateType }</p>
        </li>
      );
    }

    return (
      <ul>
        { templates }
      </ul>
    );
  }
}

TemplateList.propTypes = {
  templates: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default TemplateList;
