//여기서 하고 싶은 것:
//작성페이지에서 제목이랑 가격을 적으면
//리듀서에서 상태값을 받아오게 하는거.

//Actions

//상품 제목 가져오기
const LOAD_TITLE="post/LOAD_TITLE";
//상품 가격 가져오기
const LOAD_PRICE="post/LOAD_PRICE";
//상품 제목 추가하기
const ADD_TITLE="post/ADD_TITLE";
//상품 가격 추가하기
const ADD_PRICE="post/ADD_PRICE";


//initialStates
const initialState={
    title : "애플워치팝니다",
    price : "110,000",
};

//ActionCreaters
export const loadTitle=(title)=>{
    return{type:LOAD_TITLE, title};
}

export const loadPrice=(price)=>{
    return{type:LOAD_PRICE, price};
}

export const addTitle=(title)=>{
    return{type:ADD_TITLE, title};
}

export const addPrice=(price)=>{
    return{type:ADD_PRICE, price};
}


//Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      // do reducer stuff
      case "post/LOAD_TITLE": {
        return { ...state, title: action.title };
      }
  
      case "post/LOAD_PRICE": {
        return { ...state, price: action.user_message };
      }
  
      case "post/ADD_TITLE": {
        return { ...state, title: action.title};
      }
  
      case "post/ADD_PRICE": {
        return { ...state, price: action.user_message};
      }
  
      default:
        return state;
    }
  }