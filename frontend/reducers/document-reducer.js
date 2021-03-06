import { GET_DOCUMENT, SELECT_REVIEWER } from '../actions/document-actions';

const defaultState = {
  title: '',
  body: null,
  category: '',
  privacy: '',
  deadline: new Date(),
  active: '',
  createdAt: new Date(),
  comments: [],
  selectedReviewer: ''
};

const reducer = (state = defaultState, action) => {
  let comments = [];

  switch (action.type) {
    case GET_DOCUMENT:
      const { title, body, category, privacy, deadline, active, createdAt } = action.data;
      comments = action.data.Comments;

      // When contentState was originally converted to raw, entityMap was empty,
      // so the database omitted it.
      // Body can not be converted back to contentState without this property,
      // so it is manually added below.
      body.entityMap = {};

      return Object.assign({}, state, {
        title,
        body,
        category,
        privacy,
        deadline,
        active,
        createdAt,
        comments
      });
    case SELECT_REVIEWER:
      const selectedReviewer = action.data;

      return Object.assign({}, state, { selectedReviewer });
    default:
      return state;
  }
};

export default reducer;
