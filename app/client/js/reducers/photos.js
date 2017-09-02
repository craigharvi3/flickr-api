const defaultState = {
	list: [],
	tag: "",
	loading: true
}

const photos = function(state = defaultState, action) {
  switch (action.type) {
    case 'PHOTOS_LOADING':
      return { ...state, loading: true };
    case 'PHOTOS_LOADED':
      return { ...state, list: action.payload.photos, loading: false };
    case 'TAG_VAL':
      return { ...state, tag: action.payload };
    default:
      return state;
  }
};

export default photos;
