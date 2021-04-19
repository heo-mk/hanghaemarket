// 이미지 데이터를 관리하는 모듈 파일
import { createAction, handleActions} from "redux-actions";
import produce from "immer";

// Action 
const SET_PREVIEW = "SET_PREVIEW";
const PROFILE_PREVIEW = "PROFILE_PREVIEW";

// Action creators
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}));
const profilePreview = createAction(PROFILE_PREVIEW, (profile_preview) => ({profile_preview}));

// initialState
const initialState = {
  preview: null,
  profile_preview: null,
}

// reducer
export default handleActions({
  [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
    console.log(action.payload.preview)
    draft.preview = action.payload.preview;
  }),

  [PROFILE_PREVIEW]: (state, action) => produce(state, (draft) => {
    draft.profile_preview = action.payload.profile_preview;
  }),
  
}, initialState);

const actionCreators = {
  setPreview,
  profilePreview,
};

export { actionCreators };