// word.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"; // crud 할때 쓰는 애들

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const CHECK = "word/CHECK";
const DELETE = "word/DELETE";


const initialState = {
  
  list: [],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  return { type: CREATE, word };
}

export function checkWord(word_index) {
  return { type: CHECK, word_index };
}

export function deleteWord(word_index) {
  return { type: DELETE, word_index};
}




// firebase랑 통신하는 함수 // 미들웨어 !!!!

// dispatch를 인자로 받아오는 이유는 dispatch() 처럼 어떤 액션을 줘야 하니까 !
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));
    //console.log(word_data)

    let word_list = [];

    //리덕스에 넣어주기
    word_data.forEach((doc) => {
      //console.log(doc.data())
      word_list.push({ id: doc.id, ...doc.data() });
    });
    //console.log(word_list);

    dispatch(loadWord(word_list));
    
  };
};

export const createWordFB = (word) => {
  return async function (dispatch) {
    
    const docRef = await addDoc(collection(db, "word"), word);
    // console.log((await getDoc(docRef)).data());
    // const _word = await getDoc(docRef);
    const word_data = { id: docRef.id, ...word };
    
    // console.log(word_data);

    //액션을 일으며! 나 바꿔줘!
    dispatch(createWord(word_data));
  };
};

export const checkWordFB = (word_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "word", word_id);
    await updateDoc(docRef, { completed: true });
    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((w) => {
      return w.id === word_id;
    }) 
    dispatch(checkWord(word_index));
  };
  
};


export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if (!word_id) {
      window.alert("아이디가 없어요");
      return;
    }
    const docRef = doc(db, "word", word_id);
    await deleteDoc(docRef);

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((w) => {
      return w.id === word_id;
    });
    dispatch(deleteWord(word_index));
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list };
    }

    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }

    case "word/CHECK": {
      const new_word_list = state.list.map((l, idx) => {
        if (parseInt(action.word_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      }); console.log(action)
      return { list: new_word_list };
    }

    case "word/DELETE": {
      const new_word_list = state.list.filter((l, idx) => {
        return parseInt(action.word_index) !== idx;
      });
      return { list: new_word_list };
    }

    
    // do reducer stuff
    default:
      return state;
  }
}


