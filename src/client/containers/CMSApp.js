import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TemplateActions from '../actions/CMSActions';
import { TemplateList, AddTemplateInput } from '../components'

const mapSateToProps = (state) => {
  return { templates: state.templates };
};

class CMSApp extends Component {
  render () {
    const { templates: { templatesById }, dispatch } = this.props;
    const actions = bindActionCreators(TemplateActions, dispatch);

    return (
      <div>
        <h1>Template List</h1>
        <AddTemplateInput addTemplate={actions.addTemplate} />
        <TemplateList templates={templatesById} actions={actions} />
      </div>
    );
  }
}

export default connect(mapSateToProps)(CMSApp);
