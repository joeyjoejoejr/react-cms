import * as types from '../constants/ActionTypes.js';

export function addTemplate({ name, templateType }) {
  return {
    type: types.ADD_TEMPLATE,
    name,
    templateType
  };
}

export function addWidget(properties) {
  return {
    type: types.ADD_TEMPLATE,
    ...properties
  };
}
