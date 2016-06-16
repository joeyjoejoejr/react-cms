import * as types from '../constants/ActionTypes.js';

const initialState = {
  templates: [1],
  templatesById: {
    1: {
      id: 1,
      name: "My Basic Template",
      templateType: "Basic",
      widgets: []
    }
  }
}

export default function templates(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TEMPLATE:
      const newId = state.templates[state.templates.length - 1] + 1;
      return {
        templates: state.templates.concat(newId),
        templatesById: {
          ...state.templatesById,
          [newId] : {
            id: newId,
            name: action.name,
            templateType: action.templateType
          }
        }
      };
    default:
      return state;
  }
}
