import * as Message from './../constants/Message';
import * as ActionType from './../constants/ActionType';

const messageInitial = Message.MSG_WELCOME;
const messageReducer = (state = messageInitial, action) => {
    switch (action.type) {
        case ActionType.CHANGE_MESSAGE:
            return action.message;
        default:
            return state;
    }
}
export default messageReducer