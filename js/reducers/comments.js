var initComments = {
	comments: []
};

export default function comments(state = initComments, action) {
	switch (action.type) {
	case 'SAVE_COMMENT':
		return {...state, comments: [...state.comments, action.comment]};

	default:
		return {...state};
	}
}