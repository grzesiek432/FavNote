import {
   ADD_ITEM,
   REMOVE_ITEM,
   AUTH_REQUEST,
   AUTH_FAILURE,
   AUTH_SUCCESS,
   FETCH_SUCCESS,
   FETCH_FAILURE,
   FETCH_REQUEST,
} from 'actions';

const initialState = { userID: '60e6d84d6cf413231003f94c' };

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case AUTH_SUCCESS:
         return {
            ...state,
            userID: action.payload.data._id,
         };
      case FETCH_SUCCESS:
         return {
            ...state,
            [action.payload.itemType]: [...action.payload.data],
         };
      case REMOVE_ITEM:
         return {
            ...state,
            [action.payload.itemType]: [
               ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
            ],
         };
      case ADD_ITEM:
         return {
            ...state,
            [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
         };
      default:
         return state;
   }
};

export default rootReducer;
