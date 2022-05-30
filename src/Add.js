import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWord, createWordFB } from "./redux/modules/word";

const Add = () => {
  const input_word = React.useRef(null);
  const input_pinyin = React.useRef(null);
  const input_mean = React.useRef(null);
  const input_example = React.useRef(null);
  const input_read = React.useRef(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const addWordList = () => {
    let input_text = {
      word: input_word.current.value,
      pinyin: input_pinyin.current.value,
      mean: input_mean.current.value,
      example: input_example.current.value,
      read: input_read.current.value,
      completed: false,
    };
    //  dispatch(createWord(input_text));
    dispatch(createWordFB(input_text));
    history.goBack();
  };

  return (
    <AddCard>
      <div>
        <label>
          단어
          <input type="text" ref={input_word} />
        </label>
      </div>

      <div>
        <label>
          병음
          <input type="text" ref={input_pinyin} />
        </label>
      </div>

      <div>
        <label>
          뜻
          <input type="text" ref={input_mean} />
        </label>
      </div>
      <div>
        <label>
          예문
          <input type="text" ref={input_example} />
        </label>
      </div>

      <div>
        <label>
          해석
          <input type="text" ref={input_read} />
        </label>
      </div>

      <button onClick={addWordList}>등록하기</button>
    </AddCard>
  );
};

const AddCard = styled.div`
  margin: auto;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "GangwonEduSaeeum_OTFMediumA";
  font-size: 25px;

  & div {
    width: 400px;
    display: flex;
    margin-bottom: 20px;
  }

  & label {
    margin-bottom: 5px;
    width: 400px;
    text-align: start;
  }
  & input {
    font-size: 16px;
    width: 400px;
    border: none;
    border-bottom: 2px solid #ddd;
    padding: 5px 0;
  }

  & input:focus {
    outline: none;
    border-bottom: 2px solid #dadafc;
    transition: border-color 0.4s ease-in-out;
  }

  & button {
    border: none;
    border-radius: 7px;
    background-color: aliceblue;
    width: 200px;
    height: 40px;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 25px;
    padding: 1px 6px;
    cursor: pointer;
  }
`;

export default Add;
